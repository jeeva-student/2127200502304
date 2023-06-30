const express = require('express');
const app = express();

app.get('/trains', (req, res) => {

  const currentTime = Date.now();

  const twelveHoursFromNow = currentTime + 12 * 60 * 60 * 1000;

  const trains = fetchTrainsFromDatabase(currentTime, twelveHoursFromNow);

  const formattedResponse = formatTrainData(trains);

  res.json(formattedResponse);
});

function fetchTrainsFromDatabase(startTime, endTime) {

  const trains = [
    {
      id: 1,
      name: 'Train A',
      departureTime: startTime + 1000,
      arrivalTime: startTime + 2000,
      seatAvailability: 100,
      price: 10,
    },
    {
      id: 2,
      name: 'Train B',
      departureTime: startTime + 3000,
      arrivalTime: startTime + 4000,
      seatAvailability: 50,
      price: 15,
    },

  ];

  return trains;
}

function formatTrainData(trains) {

  const formattedTrains = trains.map((train) => {
    return {
      id: train.id,
      name: train.name,
      departureTime: new Date(train.departureTime).toISOString(),
      arrivalTime: new Date(train.arrivalTime).toISOString(),
      seatAvailability: train.seatAvailability,
      price: train.price,
    };
  });

  return formattedTrains;
}

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
