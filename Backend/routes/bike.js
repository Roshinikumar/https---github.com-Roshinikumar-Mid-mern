const express = require('express');
const AssemblyLog = require('../models/AssemblyLog');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/assemble', authMiddleware, async (req, res) => {
  const { bike } = req.body;
  const assemblyTime = bike === 'Bike 1' ? 50 : bike === 'Bike 2' ? 60 : 80;
  const endTime = new Date(Date.now() + assemblyTime * 60000);

  const log = await AssemblyLog.create({
    employeeId: req.user.id,
    bike,
    startTime: new Date(),
    endTime,
  });

  res.json(log);
});

module.exports = router;
