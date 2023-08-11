import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import {Box, useTheme} from '@mui/material';
import LineChart from '../../components/LineChart';
import { processData } from '../../dataProcessing';
import MiniChart from "../../components/MiniChart";
import {tokens} from "../../theme";
import TopDash from "./topDash";

const Dashboard = ({searchValue, setSearchValue, lineColor}) => {
  const [chartData, setChartData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async (symbol) => {
      try {
        const response = await fetch(`https://cmario721.pythonanywhere.com/stocks?symbol=${searchValue}`);
        const jsonData = await response.json();
        console.log('Fetched JSON data:', jsonData);
        const processedData = processData(jsonData);
        setChartData(processedData);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(searchValue);
  }, [searchValue]);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
  <Box  m={'20px'}>
    {/* Mini charts Top bar */}
    <Box>
      <TopDash></TopDash>
    </Box>

    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>

    </Box>


    {/* Main Chart */}
    <Box height={'75vh'} marginTop={2} m={'10px'} border={5} borderColor={colors.primary[400]} borderRadius={2}>
      <Header  marginTop={2} title={searchValue} subtitle={'5-Day Stock Price History'} size={"h2"} />
      {isLoaded ? (
        <LineChart
          data={chartData}
          lineColor={lineColor}
          style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 1s ease-in' }}
        />
      ) : (
        <div></div>
      )}
    </Box>
  </Box>
);

};

export default Dashboard;
