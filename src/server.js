const express = require('express');
const GoalRoutes = require('../routes/GoalRoutes');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


// Routes
app.use('/api/goals', GoalRoutes);

app.listen(port);