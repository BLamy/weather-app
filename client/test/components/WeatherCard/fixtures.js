const data = {
  "dt": 1467738000,
  "temp": {
    "day": 78.93,
    "min": 65.8,
    "max": 80.92,
    "night": 65.8,
    "eve": 76.57,
    "morn": 70.66
  },
  "pressure": 1005.24,
  "humidity": 47,
  "weather": [{
    "id": 800,
    "main": "Clear",
    "description": "clear sky",
    "icon": "02d"
  }],
  "speed": 3.4,
  "deg": 11,
  "clouds": 8,
  "location": "rochester"
};

const SmallCard = {
  mode: 'small',
  data
};
const LargeCard = {
  mode: 'large',
  data
};
export { SmallCard, LargeCard }
