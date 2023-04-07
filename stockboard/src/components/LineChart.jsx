import { ResponsiveLine } from '@nivo/line';
import {tokens} from "../theme";
import {useTheme} from "@mui/material";
import { useState, useEffect, useCallback } from 'react';

const LineChart = () => {
    const [data, setData] = useState([]);
    const formatTime = (timestamp) => {
      const date = new Date(timestamp);
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');

      return `${hours}:${minutes}`;
    };

    const fetchData = useCallback(async () => {
        const processData = (jsonData) => {
            const result = [];

            console.log('Raw JSON data:', jsonData);
            for (const [date, values] of Object.entries(jsonData)) {
              for (const [symbol, value] of Object.entries(values)) {
                  console.log('Symbol:', symbol, 'Value:', value);

                let series = result.find((item) => item.id === symbol);
                if (!series) {
                  series = {
                    id: symbol,
                    data: [],
                  };
                  result.push(series);
                }
                series.data.push({
                  x: formatTime(date),
                  y: value,
                });
              }
            }

            return result;
          };
        try {
            // const symbol = 'TSLA'; // Replace with the desired symbol
            // const startDate = '2023-03-23'; // Replace with the desired start date
            // const endDate = '2023-03-27'; // Replace with the desired end date

            const response = await fetch(
                `http://localhost:5000/stocks`,
            );
            const jsonData = await response.json();

            // You might need to process jsonData to match the format expected by the LineChart component
            const processedData = processData(jsonData);

            setData(processedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, []);


    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (

        <ResponsiveLine

            data={data}
            theme={{
                axis:{
                    domain:{
                        line:{
                            stroke: colors.grey[100]
                        }
                    },
                    legend:{
                        text:{
                            fill:colors.grey[100]
                        }
                    },
                    ticks:{
                        line:{
                            stroke: colors.grey[100],
                            strokeWidth: 1
                        },
                        text:{
                            fill: colors.grey[100]
                        }
                    }
                },
                legends:{
                    text:{
                        fill: colors.grey[100]
                    },
                },
                tooltip: {
                    container: {
                        color: colors.primary[500]
                    }
                }
            }}
            margin={{top: 50, right: 110, bottom: 50, left: 60}}
            xScale={{type: 'point'}}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            curve="catmullRom"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Time',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Price',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            enableGridX={false}
            enableGridY={false}
            pointSize={10}
            pointColor={{theme: 'background'}}
            pointBorderWidth={2}
            pointBorderColor={{from: 'serieColor'}}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )
};
export default LineChart;