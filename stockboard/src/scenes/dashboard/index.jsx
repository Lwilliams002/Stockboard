import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Box } from '@mui/material';
import LineChart from '../../components/LineChart';
import { processData } from '../../dataProcessing';
const Dashboard = () => {
  const [searchValue, setSearchValue] = useState("");




  useEffect(() => {
    const fetchData = async (symbol) => {
      try {
        const response = await fetch(`http://localhost:5000/stocks?symbol=${symbol}`);
        const jsonData = await response.json();
        console.log('Fetched JSON data:', jsonData);
        const processedData = processData(jsonData);
        setSearchValue(processedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData('TSLA');
  }, []);

  return (
    <Box m={'20px'}>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Header title={'DASHBOARD'} subtitle={'Welcome to your dashboard'} />
      </Box>
      <Box height={'75vh'}>
        {searchValue ? <LineChart searchValue={searchValue} /> : <div>Loading...</div>}
      </Box>
    </Box>
  );
};

export default Dashboard;
