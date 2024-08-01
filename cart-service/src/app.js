const express = require('express');
const bodyParser = require('body-parser');
const cartRoutes = require('./routes/cartRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api/cart', cartRoutes);

module.exports = app;
