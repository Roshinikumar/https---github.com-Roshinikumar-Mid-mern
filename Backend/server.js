const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const bikeRoutes = require('./routes/bike');
const dashboardRoutes = require('./routes/dashboard');
global.TextEncoder = util.TextEncoder;
global.TextDecoder = util.TextDecoder;

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/bike_assembly', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api', authRoutes);
app.use('/api', bikeRoutes);
app.use('/api', dashboardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
