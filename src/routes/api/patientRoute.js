const mongoose = require('mongoose');
const express = require('express');

const Patient = mongoose.model('patients');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const patientsFromDb = await Patient
      .find()
      .select('_id name');

    patients =  patientsFromDb.map((p) => ({
      id: p._id,
      name: p.name,
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
