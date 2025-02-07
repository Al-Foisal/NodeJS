const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  console.log('Run for every route');
  next();
});
app.use('/another-route', (req, res, next) => {
  res.send('<h1>Another route page.</h1>');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from express js!</h1>');
});

app.listen(3000);
