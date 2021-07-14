const express = require('express');
require('express-async-errors');

const app = express();
const config = require('./utils/config');
const cors = require('cors');
const mongoose = require('mongoose');

const itemsRouter = require('./controllers/items');

mongoose.set('useCreateIndex', true)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })
mongoose.set('useFindAndModify', false)

app.use(cors());
app.use(express.json());

app.use('/api/items', itemsRouter);

module.exports = app;