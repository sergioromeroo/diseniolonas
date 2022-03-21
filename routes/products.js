var express = require('express');
var router = express.Router();
const {products,add} = require('../controllers/productsController')


router.get('/products', products)
router.get('/add', add)

module.exports = router;