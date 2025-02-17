const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRouters = require('./routes/admin');
const shopRouters = require('./routes/shop');
// const rootDir=require('util/path');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRouters);
app.use(shopRouters);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
});
app.listen(3000);
