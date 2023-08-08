// models/user.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  userType: { type: String, enum: ['manufacturer', 'transporter'] }, // 'manufacturer' or 'transporter'
});

module.exports = mongoose.model('User', UserSchema);
