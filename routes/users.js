var express = require('express');
var router = express.Router();

const {register,login,processRegister,processLogin} = require('../controllers/usersController');

const registerValidator = require('../validations/registerValidator')
const loginValidator = require('../validations/loginValidator')



router.get('/register',register)
router.post('/register',registerValidator, processRegister)
router.get('/login',login )
router.post('/login',loginValidator ,processLogin)

module.exports = router;
