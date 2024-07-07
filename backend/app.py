from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
from transformers import AutoTokenizer, AutoModelForSequenceClassification
from scipy.special import softmax
import spacy
import json
import random
from ta.trend import SMAIndicator, EMAIndicator, MACD, ADXIndicator
from ta.momentum import RSIIndicator
from ta.volatility import BollingerBands, AverageTrueRange
import re  # Assurez-vous que le module re est importé

app = Flask(__name__)
CORS(app)

# Charger le modèle et le tokenizer de BERT
MODEL = "nlptown/bert-base-multilingual-uncased-sentiment"
tokenizer = AutoTokenizer.from_pretrained(MODEL)
model = AutoModelForSequenceClassification.from_pretrained(MODEL)

# Charger le modèle spaCy pour la reconnaissance des entités nommées
nlp = spacy.load("en_core_web_sm")

# Fonction d'analyse de sentiment
def analyze_sentiment(tweet):
    inputs = tokenizer(tweet, return_tensors="pt", truncation=True, padding=True)
    outputs = model(**inputs)
    scores = outputs[0][0].detach().numpy()
    scores = softmax(scores)
    negative_score = scores[0]
    positive_score = scores[4]
    raw_score = positive_score - negative_score
    transformed_score = raw_score * 2
    final_score = np.tanh(transformed_score)
    final_score = round(final_score, 2)
    return final_score

# Fonction pour extraire les entités nommées liées aux investissements
def extract_investment_entities(tweet):
    doc = nlp(tweet)
    entities = [ent.text for ent in doc.ents if ent.label_ in ("ORG", "PRODUCT", "GPE", "NORP")]
    symbols = re.findall(r'\b[A-Z]{2,5}\b', tweet)
    entities.extend(symbols)
    return list(set(entities))

# Route pour analyser les tweets
@app.route('/api/tweet', methods=['POST'])
def tweet_analysis():
    try:
        data = request.get_json()
        tweet = data['text']
        score = analyze_sentiment(tweet)
        entities = extract_investment_entities(tweet)
        result = {
            "tweet": tweet,
            "sentiment_score": score,
            "investment_entities": entities
        }
        return jsonify(result)
    except Exception as e:
        app.logger.error(f"Error processing tweet: {e}")
        return jsonify({"error": "Error processing tweet"}), 500

# Fonction pour vérifier les colonnes du CSV
def check_csv_columns(df, required_columns):
    missing_columns = [col for col in required_columns if col not in df.columns]
    if missing_columns:
        return False, f"Missing columns in CSV: {', '.join(missing_columns)}"
    return True, ""

# Fonction pour analyser les indicateurs et prendre une décision
def analyze_investment(df):
    df['SMA_20'] = SMAIndicator(df['Close'], window=20).sma_indicator()
    df['EMA_20'] = EMAIndicator(df['Close'], window=20).ema_indicator()
    df['MACD'] = MACD(df['Close']).macd()
    df['MACD_Signal'] = MACD(df['Close']).macd_signal()
    df['RSI'] = RSIIndicator(df['Close']).rsi()
    df['ATR'] = AverageTrueRange(df['High'], df['Low'], df['Close'], window=14).average_true_range()
    df['ADX'] = ADXIndicator(df['High'], df['Low'], df['Close'], window=14).adx()
    bb = BollingerBands(df['Close'], window=20, window_dev=2)
    df['BB_High'] = bb.bollinger_hband()
    df['BB_Low'] = bb.bollinger_lband()

    latest = df.iloc[-1]

    def format_value(value):
        return round(value, 2) if not np.isnan(value) else None

    values = {
        "Latest Close": format_value(latest['Close']),
        "SMA_20": format_value(latest['SMA_20']),
        "EMA_20": format_value(latest['EMA_20']),
        "MACD": format_value(latest['MACD']),
        "MACD_Signal": format_value(latest['MACD_Signal']),
        "RSI": format_value(latest['RSI']),
        "ATR": format_value(latest['ATR']),
        "ADX": format_value(latest['ADX']),
        "BB_High": format_value(latest['BB_High']),
        "BB_Low": format_value(latest['BB_Low'])
    }

    warning = ""
    if values["MACD_Signal"] is None:
        warning += "MACD Signal is NaN, likely due to insufficient data. Need at least 35 days of data. "

    buy_conditions = [
        (values["Latest Close"] > values["SMA_20"], "The price is above the 20-day SMA, indicating a positive trend.", "The price is below the 20-day SMA, indicating a negative trend."),
        (values["MACD"] is not None and values["MACD_Signal"] is not None and values["MACD"] > values["MACD_Signal"], "The MACD is above its signal, suggesting upward momentum.", "The MACD is below its signal, suggesting downward momentum."),
        (values["Latest Close"] < values["BB_High"], "The price is below the upper Bollinger Band, indicating it is not overbought.", "The price is above the upper Bollinger Band, indicating it is overbought."),
        (values["ADX"] > 20, "The ADX is above 20, indicating a strong trend.", "The ADX is below 20, indicating a weak trend.")
    ]

    sell_conditions = [
        (values["Latest Close"] < values["SMA_20"], "The price is below the 20-day SMA, indicating a negative trend.", "The price is above the 20-day SMA, indicating a positive trend."),
        (values["MACD"] is not None and values["MACD_Signal"] is not None and values["MACD"] < values["MACD_Signal"], "The MACD is below its signal, suggesting downward momentum.", "The MACD is above its signal, suggesting upward momentum."),
        (values["RSI"] < 30 or values["RSI"] > 70, "The RSI is in a zone of overbought or oversold, indicating a potential reversal.", "The RSI is in a neutral zone, indicating no potential reversal."),
        (values["Latest Close"] > values["BB_Low"], "The price is above the lower Bollinger Band, indicating it is not oversold.", "The price is below the lower Bollinger Band, indicating it is oversold."),
        (values["ADX"] > 20, "The ADX is above 20, indicating a strong trend.", "The ADX is below 20, indicating a weak trend.")
    ]

    if values["RSI"] is not None:
        if values["RSI"] > 70:
            warning += f"Warning: RSI is {values['RSI']}, indicating a zone of overbought. "
        elif values["RSI"] < 30:
            warning += f"Warning: RSI is {values['RSI']}, indicating a zone of oversold. "

    decision = "Hold or wait for a better opportunity."
    justification = []
    unmet_conditions = []

    if all(cond[0] for cond in buy_conditions):
        decision = "It's a good time to invest."
        justification = [cond[1] for cond in buy_conditions]
    elif all(cond[0] for cond in sell_conditions):
        decision = "It's a good time to sell."
        justification = [cond[1] for cond in sell_conditions]
    else:
        unmet_conditions = [cond[2] for cond in buy_conditions if not cond[0]]
        if unmet_conditions:
            decision = "Hold or wait for a better opportunity."
            justification = [random.choice(unmet_conditions)]

    result = {
        "decision": decision,
        "justification": justification,
        "indicators": values,
        "warning": warning.strip()
    }

    return result

# Route pour analyser les fichiers CSV
@app.route('/api/upload', methods=['POST'])
def upload_csv():
    if 'file' not in request.files:
        return jsonify({"error": "No file part in the request"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No file selected"}), 400

    try:
        df = pd.read_csv(file, parse_dates=['Date'], index_col='Date')
    except Exception as e:
        app.logger.error(f"Error reading CSV file: {e}")
        return jsonify({"error": "Error reading CSV file"}), 400

    valid, error_message = check_csv_columns(df, ['Open', 'High', 'Low', 'Close', 'Volume'])
    if not valid:
        return jsonify({"error": error_message}), 400

    result = analyze_investment(df)
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
