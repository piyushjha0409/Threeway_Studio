// routes/order.js
const express = require('express');
const router = express.Router();

const Order = require('../models/Order');

router.get('/all-orders', async (req, res) => {
  // Implementation to get all orders
});

module.exports = router;
    