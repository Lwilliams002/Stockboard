from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load the stock data from the CSV file
data = pd.read_csv('data.csv', index_col='Datetime', parse_dates=True)


@app.route('/stocks', methods=['GET'])
def get_stocks():
    # Get query parameters
    symbol = request.args.get('symbol', None)
    start_date = request.args.get('start_date', None)
    end_date = request.args.get('end_date', None)

    # Filter data based on query parameters
    filtered_data = data.copy()
    if symbol:
        filtered_data = filtered_data.filter(like=symbol, axis=1)
    if start_date:
        filtered_data = filtered_data[filtered_data.index >= start_date]
    if end_date:
        filtered_data = filtered_data[filtered_data.index <= end_date]

    # Convert DataFrame to dictionary
    response_data = filtered_data.to_dict(orient='index')

    # Convert Timestamp objects to strings
    response_data = {str(k): v for k, v in response_data.items()}

    return jsonify(response_data)


if __name__ == '__main__':
    app.run(debug=True)
