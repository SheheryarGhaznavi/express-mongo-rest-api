const express = require('express');
const GoalRoutes = express.Router();
// const { getGoals, createGoals, updateGoals, deleteGoals } = require('../controllers/GoalController');
const { callFunction } = require('../controllers/GoalAdvancedController');
const protect = require('../middlewares/AuthMiddleware');

GoalRoutes.route('/')

    // Get goals
    .get(protect, callFunction('get'))

    // Create goals
    .post(protect, callFunction('create'));



GoalRoutes.route('/:id')

    // Update goals
    .put(protect, callFunction('update'))

    // Delete goals
    .delete(protect, callFunction('delete'));


module.exports = GoalRoutes;