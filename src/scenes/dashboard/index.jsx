import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Box } from '@mui/material';
import LineChart from '../../components/LineChart';
import { processData } from '../../dataProcessing';
const Dashboard = ({searchValue, setSearchValue, lineColor}) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async (symbol) => {
      try {
        const response = await fetch(`http://cmario72.pythonanywhere.com/stocks?symbol=${searchValue}`);
        const jsonData = await response.json();
        console.log('Fetched JSON data:', jsonData);
        const processedData = processData(jsonData);
        setChartData(processedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(searchValue);
  }, [searchValue]);

  return (
    <Box m={'20px'}>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Header title={searchValue} subtitle={'5-Day Stock Price History'} />
      </Box>
      <Box height={'75vh'} >
        {chartData ? <LineChart data={chartData} lineColor={lineColor} /> : <div>Loading...</div>}
      </Box>
    </Box>
  );
};

export default Dashboard;
