var express = require('express');
var router = express.Router();
const {products,add,detail,save,edit,update,search} = require('../controllers/productsController');
const remove = require('../controllers/productsController');
const path = require('path');

const addProductValidator = require('../validations/addProductValidator')


/*  de aca abajo hasta router es para subir imagenes  */
const multer = require('multer'); /* debemos instalarlo npm install multer */


const storage = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null,'public/images')
    },
    filename : (req,file,callback) => {
        callback(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage,
})

router.get('/products', products);
router.get('/add', add);
router.post('/add',upload.single('images'),addProductValidator, save)
router.get('/detail/:id',detail);
router.get('/edit/:id',edit);
router.put('/edit/:id',update);
router.delete('/delete/:id',remove.destroy);
router.get('/search',search);

module.exports = router;