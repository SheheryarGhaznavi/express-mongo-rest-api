const express = require('express');
const router = express.Router();
const { register, login, get } = require('../controllers/UserController');
const protect = require('../middlewares/AuthMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/get', protect, get);

module.exports = router;