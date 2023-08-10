// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderID: String,
  from: String,
  to: String,
  quantity: String,
  pickupAddress: String,
  transporter: { type: String, ref: 'Transporter' },
  price: Number,  
});

module.exports = mongoose.model('Order', orderSchema);
