const mongoose = require('mongoose');

//schema
const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, default: 'employee' }, // 'employee' or 'admin'
});

module.exports = mongoose.model('Employee', EmployeeSchema);
