var express = require('express');
var router = express.Router();

const {register,login,processRegister} = require('../controllers/usersController');

const registerValidator = require('../validations/registerValidator')



router.get('/register',register)
router.post('/register',registerValidator, processRegister)
router.get('/login',login )

module.exports = router;
