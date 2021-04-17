const mongoose = require('mongoose');
const express = require('express');

const Order = mongoose.model('orders');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const ordersFromDb = await Order.find();

    const orders =  ordersFromDb.map((o) => ({
      id: o._id,
      message: o.message,
    }));

    res.status(200).json({
      orders,
    });
  } catch (err) {
    res.status(500).json({
      err: err.message,
      patients: [],
    });
  }
});

module.exports = router;
