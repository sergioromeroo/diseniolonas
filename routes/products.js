var express = require('express');
var router = express.Router();
const {products,add,detail,save} = require('../controllers/productsController')


router.get('/products', products);
router.get('/add', add);
router.post('/add', save)
router.get('/detail/:id',detail);

module.exports = router;