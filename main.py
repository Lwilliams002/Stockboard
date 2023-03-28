import yfinance as yf
import pandas as pd
import matplotlib.pyplot as plt

# Fetch stock price data
data = yf.download("SPY AAPL", start="2017-01-01", end="2017-04-30")

# Reset the index to flatten the multi-level columns
data.columns = [' '.join(col).strip() for col in data.columns.values]

# Calculate daily returns
data['SPY Daily Return'] = data['Close SPY'].pct_change()
data['AAPL Daily Return'] = data['Close AAPL'].pct_change()

# Drop any rows with missing data
data = data.dropna()

# Chart requirements
close_data = data[['Close SPY', 'Close AAPL']]
# Plot the line chart
close_data.plot()

# Customize the chart appearance
plt.title("SPY and AAPL Close Prices (2017-01-01 to 2017-04-30)")
plt.xlabel("Date")
plt.ylabel("Close Price")
plt.legend(["SPY", "AAPL"])

# Display the chart
plt.show()
# Save the processed data to a CSV file
data.to_csv("data.csv")

# Print the data
print(data)
