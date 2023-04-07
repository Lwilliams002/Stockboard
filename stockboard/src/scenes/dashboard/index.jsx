import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Box } from '@mui/material';
import LineChart from '../../components/LineChart';

const Dashboard = () => {
  const [stockData, setStockData] = useState();

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
  };

  const processData = (jsonData) => {
    const result = [];

    for (const [timestamp, data] of Object.entries(jsonData)) {
    const closeValue = data.Close;

    const seriesKey = 'Close';

    let series = result.find((item) => item.id === seriesKey);
    if (!series) {
      series = {
        id: seriesKey,
        data: [],
      };
      result.push(series);
    }
    series.data.push({
      x: formatTime(timestamp),
      y: closeValue,
    });
  }

  return result;
};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/stocks');
        const jsonData = await response.json();
        console.log('Fetched JSON data:', jsonData);
        const processedData = processData(jsonData);
        setStockData(processedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box m={'20px'}>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Header title={'DASHBOARD'} subtitle={'Welcome to your dashboard'} />
      </Box>
      <Box height={'75vh'}>
        {stockData ? <LineChart data={stockData} /> : <div>Loading...</div>}
      </Box>
    </Box>
  );
};

export default Dashboard;
