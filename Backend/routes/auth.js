const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Employee = require('../models/Employee');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const employee = await Employee.findOne({ email });
  if (!employee) return res.status(400).json({ msg: 'Employee not found' });

  const isMatch = await bcrypt.compare(password, employee.password);
  if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

  const token = jwt.sign({ id: employee._id, role: employee.role }, 'jwtSecret');
  res.json({ token });
});

module.exports = router;
