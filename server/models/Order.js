// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderID: String,
  from: String,
  to: String,
  quantity: String,
  pickupAddress: String,
  transporter: { type: mongoose.Schema.Types.ObjectId, ref: 'Transporter' },
  price: Number,
});

module.exports = mongoose.model('Order', orderSchema);
