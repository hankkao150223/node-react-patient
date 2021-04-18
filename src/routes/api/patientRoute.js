const mongoose = require('mongoose');
const express = require('express');
const Joi = require('joi');

const Patient = mongoose.model('patients');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const patientsFromDb = await Patient.find();

    const patients =  patientsFromDb.map((p) => ({
      id: p._id,
      name: p.name,
      orders: p.orders,
    }));

    res.status(200).json({
      patients,
    });
  } catch (err) {
    res.status(500).json({
      err: err.message,
      patients: [],
    });
  }
});

const patientWithOrderSchema = Joi.object({
  orders: Joi.array().items(Joi.string()).required(),
});

router.patch('/:id/order', async (req, res) => {
  const { error, value } = patientWithOrderSchema.validate(req.body);
  if (error) {
    res.status(400).send({
      isSuccess: false,
      message: error.details[0].message,
    });
    return;
  }
  try {
    const patientId = req.params.id;
    const ordersById = value.orders;

    const patient = await Patient.findOne({ _id: patientId });
    if (!patient) {
      res.status(404).json({
        isSuccess: false,
        err: 'Not found',
      });
      return;
    }
    patient.orders = ordersById;
    const patientFromDb = await patient.save();

    res.status(200).json({
      isSuccess: true,
      patient: {
        id: patientFromDb._id,
        name: patientFromDb.name,
        orders: patientFromDb.orders,
      },
    });
  } catch (err) {
    res.status(500).json({
      isSuccess: false,
      err: err.message,
    });
  }
});

module.exports = router;
