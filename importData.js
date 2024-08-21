const mongoose = require('mongoose');
const fs = require('fs');
const Data = require('./models/Data');
mongoose.connect('mongodb://localhost:27017/dataVisualizationDB')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

const jsonData = JSON.parse(fs.readFileSync('jsondata.json', 'utf-8'));

// Import data into MongoDB
const importData = async () => {
  try {
    await Data.insertMany(jsonData);
    console.log('Data imported successfully');
  } catch (err) {
    console.error('Error importing data:', err);
  } finally {
    mongoose.connection.close();
  }
};

importData();
