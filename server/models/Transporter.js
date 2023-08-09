// models/Transporter.js
const mongoose = require('mongoose');

const transporterSchema = new mongoose.Schema({
  username: String,
  password: String,
  userType: { type: String, default: 'transporter' },
});

module.exports = mongoose.model('Transporter', transporterSchema);
