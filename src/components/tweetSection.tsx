import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const TwittSection = () => {
  const [tweetText, setTweetText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleTextareaChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTweetText(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setResult(null);

      const response = await fetch("http://localhost:8000/api/tweet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: tweetText }),
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="tweet" className="flex flex-col items-center justify-center w-full py-12">
      <div className="max-w-2xl w-full p-6 space-y-6 bg-white shadow-md rounded-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-indigo-600">Tweet Sentiment Analysis</h2>
          <p className="mt-2 text-gray-600">Analyze the sentiment of a tweet and identify investment-related entities.</p>
        </div>
        <Textarea
          placeholder="Enter the tweet's text here..."
          value={tweetText}
          onChange={handleTextareaChange}
          className="w-full p-4 rounded-md border border-input bg-white text-black focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <Button
          onClick={handleSubmit}
          className={`w-full py-2 ${loading ? "bg-gray-400" : "bg-indigo-600"} text-white rounded-md`}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze"}
        </Button>
        {result && (
          <div className="mt-6 p-6 rounded-md bg-indigo-50 text-indigo-700 shadow-inner">
            <h4 className="text-lg font-bold mb-2">Analysis Result:</h4>
            <p className="mb-2"><strong>Tweet:</strong> {result.tweet}</p>
            <p className="mb-2"><strong>Sentiment Score:</strong> <span className="text-2xl font-extrabold text-indigo-600">{result.sentiment_score}</span></p>
            <p><strong>Investment Entities:</strong> {result.investment_entities.join(', ')}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TwittSection;
