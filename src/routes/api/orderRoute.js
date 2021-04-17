const mongoose = require('mongoose');
const express = require('express');
const Joi = require('joi');

const Order = mongoose.model('orders');

const router = express.Router();

const orderSchema = Joi.object({
  message: Joi.string().trim().required(),
});

module.exports = router;
