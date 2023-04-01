import yfinance as yf
import pandas as pd
import matplotlib.pyplot as plt
from datetime import date, timedelta

# Fetch stock price data
end_date = date.today().strftime("%Y-%m-%d")
start_date = (date.today() - timedelta(days=5)).strftime("%Y-%m-%d")

data = yf.download("TSLA", start=start_date, end=end_date, interval='30m')

# Calculate daily returns
data['TSLA Daily Return'] = data['Close'].pct_change()

# Drop any rows with missing data
data = data.dropna()

# Chart requirements
close_data = data[['Close']]
# Plot the line chart
close_data.plot()

# Customize the chart appearance
plt.figure(figsize=(12, 6))
plt.plot(close_data.index, close_data['Close'], lw=2, color='blue', label="TSLA")
plt.title("TSLA Close Prices")
plt.xlabel("Date")
plt.ylabel("Close Price")
plt.grid()
plt.legend()

# Display the chart
plt.show()
# Save the processed data to a CSV file
data.to_csv("data.csv")

# Print the data
print(data)