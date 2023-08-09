// models/Manufacturer.js
const mongoose = require('mongoose');

const manufacturerSchema = new mongoose.Schema({
  username: String,
  password: String,
  userType: { type: String, default: 'manufacturer' },
  pickupAddress: String,
});

module.exports = mongoose.model('Manufacturer', manufacturerSchema);
