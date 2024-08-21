const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const Data = require('./models/Data');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to Mongo
mongoose.connect('mongodb://localhost:27017/dataVisualizationDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Serve static files from reacct
app.use(express.static(path.join(__dirname, 'client/build')));

// API route
app.get('/api/data', async (req, res) => {
  const { endYear, topic, sector, region, PEST, source, SWOT, country, city } = req.query;

  let filters = {};
  if (endYear) filters.end_year = endYear;
  if (topic) filters.topic = topic;
  if (sector) filters.sector = sector;
  if (region) filters.region = region;
  if (PEST) filters.pestle = PEST;
  if (source) filters.source = source;
  if (SWOT) filters.SWOT = SWOT;
  if (country) filters.country = country;
  if (city) filters.city = city;

  try {
    const data = await Data.find(filters);
    res.json(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Catch-all handler in reacct app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
