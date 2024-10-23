const mongoose = require('mongoose');

//Schema
const AssemblyLogSchema = new mongoose.Schema({
  employeeId: mongoose.Schema.Types.ObjectId,
  bike: String,
  startTime: Date,
  endTime: Date,
}) ; 

module.exports = mongoose.model('AssemblyLog', AssemblyLogSchema);
