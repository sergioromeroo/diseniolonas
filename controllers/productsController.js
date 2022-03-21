const fs = require('fs');
const path = require('path');
const {} = require('../data/products_db');

module.exports = {//TODO ESTO ES PARA  ME RENDERISE EL INDEX.EJS A HTML
    add : (req,res) => {
        return res.render('addproducts')
    }
}