const express = require('express');
const AssemblyLog = require('../models/AssemblyLog');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/dashboard', authMiddleware, async (req, res) => {
  const { fromDate, toDate } = req.query;

  const logs = await AssemblyLog.aggregate([
    { $match: { startTime: { $gte: new Date(fromDate), $lte: new Date(toDate) } } },
    { $group: { _id: '$employeeId', bikesAssembled: { $sum: 1 } } }
  ]);

  res.json(logs);
});

module.exports = router;
