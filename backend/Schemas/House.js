const mongoose = require('mongoose');

const houseImageSchema = new mongoose.Schema({
  name: String,
  link: String,
  location: String,
  size: String,
  price: String,
  bedrooms: Number,
  bathrooms: Number,
  lot_size: String,
  year_built: Number,
  proximity: String,
});

const HouseImage = mongoose.model(
  'HouseImage',
  houseImageSchema,
  'house-images'
);

module.exports = HouseImage;
