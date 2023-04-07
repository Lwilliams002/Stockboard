from flask import Flask, jsonify, request
from flask_cors import CORS
import yfinance as yf
import pandas as pd
from datetime import date, timedelta

app = Flask(__name__)
CORS(app)

@app.route('/stocks', methods=['GET'])
def get_stocks():
    # Get query parameters
    symbol = request.args.get('symbol', 'TSLA')
    start_date = request.args.get('start_date', (date.today() - timedelta(days=5)).strftime("%Y-%m-%d"))
    end_date = request.args.get('end_date', date.today().strftime("%Y-%m-%d"))

    # Fetch stock price data
    data = yf.download(symbol, start=start_date, end=end_date, interval='30m', auto_adjust=True)

    # Calculate daily returns
    data[f'{symbol} Daily Return'] = data['Close'].pct_change()

    # Drop any rows with missing data
    data = data.dropna()

    # Convert DataFrame to dictionary
    response_data = data.to_dict(orient='index')

    # Convert Timestamp objects to strings
    response_data = {str(k): v for k, v in response_data.items()}

    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)