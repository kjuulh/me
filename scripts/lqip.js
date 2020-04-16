const lqip = require('lqip');

const file = `../app/src/assets/me.jpg`;

lqip.base64(file).then(res => {
  console.log(res); // "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhY.....
});