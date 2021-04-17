const mongoose = require('mongoose');
const express = require('express');
const Joi = require('joi');

const Order = mongoose.model('orders');

const router = express.Router();

const orderSchema = Joi.object({
  message: Joi.string().trim().required(),
});

router.post('/', async (req, res) => {
  const { error, value: order } = orderSchema.validate(req.body);
  if (error) {
    res.status(400).send({
      isSuccess: false,
      message: error.details[0].message,
    });
    return;
  }
  try {
    const orderFromDb = await Order.create(order);
    res.status(201).json({
      isSuccess: true,
      data: {
        id: orderFromDb._id,
        message: orderFromDb.message,
      },
    });
  } catch (err) {
    res.status(500).json({
      isSuccess: false,
      message: err.message,
    });
  }
});

module.exports = router;
