var express = require('express');
var router = express.Router();
const {index, quienessomos,marketing} = require('../controllers/indexcontroller')

/* GET home page. */
router.get('/', index)
router.get('/quienessomos', quienessomos)
router.get('/marketing', marketing)
module.exports = router;
