const fs = require('fs');
const path = require('path');
const productos = require('../data/products_db');
const categorias = require('../data/categories_db');

module.exports = {//TODO ESTO ES PARA  ME RENDERISE EL INDEX.EJS A HTML
    products : (req,res) => {
        return res.render('products',{
            productos
        })
    },
    add : (req,res) => {
        return res.render('productAdd',{
            categorias
        })
    }
}