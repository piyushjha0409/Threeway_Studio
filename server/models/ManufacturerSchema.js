const mongoose = require('mongoose');

const Manufacturer = new mongoose.Schema({
  orderID: { type: String, unique: true, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  quantity: { type: String, enum: ['1 ton', '2 ton', '3 ton'], required: true },
  pickupAddress: { type: String, required: true },
  transporter: { type: mongoose.Schema.Types.ObjectId, ref: 'Transporter' },
  status: { type: String, enum: ['pending', 'accepted', 'completed'], default: 'pending' }
});

const Order = mongoose.model('Order', Manufacturer);

module.exports = Order;
