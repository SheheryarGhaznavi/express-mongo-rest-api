const express = require('express');
const GoalRoutes = require('../routes/GoalRoutes');
const UserRoutes = require('../routes/UserRoutes');
const dotenv = require('dotenv').config();
const { errorHandler } = require('../middlewares/ErrorMiddleware');
const connectDB = require('../config/database');

connectDB();

const app = express();
const port = process.env.PORT || 5000;


// PRE-Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


// Routes
app.use('/api/goals', GoalRoutes);
app.use('/api/users', UserRoutes);


// POST-Middlewares
app.use(errorHandler);

app.listen(port);