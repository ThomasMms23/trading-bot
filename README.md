# Trading Bot SAAS

This is a SAAS project for analyzing tweet sentiment and CSV stock data using a combination of a React front-end and a Flask back-end.

## Prerequisites

Before starting, ensure you have the following installed:

- **Python 3.8+**: [Download Python](https://www.python.org/downloads/)
- **Node.js and npm**: [Download Node.js](https://nodejs.org/en/download/)

## Project Setup

### Clone the Repository

```bash
git clone https://github.com/yourusername/trading-bot.git
cd trading-bot
```

## Python Setup

### Windows
- Download and install Python from the link above.
- Add Python to your PATH during installation.
- Verify Python installation:
```bash
python --version
```

### Macos
- Install Python using Homebrew:
```bash
brew install python
```

## Node.js and npm Setup
Download and install Node.js from the link above, which will include npm.

## Project Installation

```bash
cd trading-bot
npm install
cd backend


##windows
python -m venv venv
.\\venv\\Scripts\\activate
##macos/linux
python3 -m venv venv
source venv/bin/activate


pip install flask flask-cors transformers spacy pandas numpy ta scipy
python -m spacy download en_core_web_sm

cd ../
```


## Running the Application
To start both the front-end and back-end servers, run:

```bash
npm run dev
```

## Additional Notes
- Ensure your CSV file includes the following columns: Date, Open, High, Low, Close, Volume.
- If you encounter any issues, please check the terminal for error messages and verify your installation steps.