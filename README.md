# Stock Visualizer

Stock Visualizer is a powerful data visualization dashboard for tracking stock market performance. The application fetches stock price data using the Yahoo Finance API (yfinance library), creates a custom API with Flask, and develops an interactive frontend dashboard using React. Users can analyze historical stock prices, compare multiple stocks, and visualize market trends.

## Features
- Fetch stock price data from Yahoo Finance API using yfinance library.
- Custom RESTful API built with Flask for serving stock data.
- Interactive frontend dashboard developed with React.
- Data visualization using Nivo.
- Analyze historical stock prices with intraday data granularity.
- User-friendly design with a search bar for stock symbols.

## Bugs
- Upon initial load of the website, the chart does not update automatically. A refresh is needed before viewing the data. 


## UI
![234044608-ff620d58-77e2-4db5-9dc3-718109182957](https://user-images.githubusercontent.com/82903572/234873395-276124a3-1607-44a0-b0c2-0fccd570af7b.png)
## Installation

1. Clone the repository:

```sh
git clone https://github.com/Lwilliams002/Stockboard

pip install -r requirements.txt

python app.py

npm install

npm start
