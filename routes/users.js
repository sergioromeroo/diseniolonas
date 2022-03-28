var express = require('express');
var router = express.Router();

const {register,login,processRegister} = require('../controllers/usersController');

router.get('/register',register)
router.post('/register',processRegister)
router.get('/login',login )

module.exports = router;
