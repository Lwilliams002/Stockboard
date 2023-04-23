from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import yfinance as yf
import pandas as pd
from datetime import date, timedelta

application = Flask(__name__)
CORS(application)


@application.after_request
def after_request(response):
    header = response.headers
    header['Access-Control-Allow-Origin'] = '*'
    return response


@cross_origin()
@application.route('/stocks', methods=['GET'])
def get_stocks():
    # Get query parameters
    symbol = request.args.get('symbol', 'TSLA')
    start_date = request.args.get('start_date', (date.today() - timedelta(days=5)).strftime("%Y-%m-%d"))
    end_date = request.args.get('end_date', date.today().strftime("%Y-%m-%d"))

    # Fetch stock price data
    url = f"http://Server-env.eba-v2awp3cu.us-east-1.elasticbeanstalk.com/stocks?symbol={symbol}&start_date={start_date}&end_date={end_date}"
    data = pd.read_json(url)

    # Convert DataFrame to dictionary
    response_data = data.to_dict(orient='index')

    # Convert Timestamp objects to strings
    response_data = {str(k): v for k, v in response_data.items()}

    return jsonify(response_data), 200, {'Access-Control-Allow-Origin': '*'}


if __name__ == '__main__':
    application.run(debug=True)
