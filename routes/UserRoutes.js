const express = require('express');
const router = express.Router();
const { register, login, get } = require('../controllers/UserController');

router.post('/register', register);
router.post('/login', login);
router.get('/get', get);

module.exports = router;