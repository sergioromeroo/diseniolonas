var express = require('express');
var router = express.Router();
const {add} = require('../controllers/productsController')


router.get('/add', add)

module.exports = router;