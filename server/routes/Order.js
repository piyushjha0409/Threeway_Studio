// routes/order.js
const express = require('express');
const router = express.Router();

const Order = require('../models/Order');

router.get('/all-orders', async (req, res) => {
  try{
     const orders = await Order.findById().lean().exec();
     res.json(orders);
  }catch(err){
    console.error(err);
    res.status(500).json({ message: "Internal server error"})
  }
});

module.exports = router;
    