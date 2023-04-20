export const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
  };

export const processData = (jsonData) => {
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

