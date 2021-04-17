const mongoose = require('mongoose');
const express = require('express');

const Patient = mongoose.model('patients');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.send({
      patients,
    });
  } catch (err) {
    res.status(500).send({
      err: err.message,
      patients: [],
    });
  }
});

module.exports = router;
