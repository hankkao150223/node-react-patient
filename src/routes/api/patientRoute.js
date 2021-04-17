const mongoose = require('mongoose');
const express = require('express');

const Patient = mongoose.model('patients');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const patientsFromDb = await Patient.find(); //.populate('orderId')

    const patients =  patientsFromDb.map((p) => ({
      id: p._id,
      name: p.name,
      orderId: p.orderId,
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

module.exports = router;
