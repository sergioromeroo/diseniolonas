const fs = require('fs');
const path = require('path');
const productos = require('../data/products_db');
const categorias = require('../data/categories_db');

module.exports = {//TODO ESTO ES PARA  ME RENDERISE EL INDEX.EJS A HTML
    products : (req,res) => {
        return res.render('products',{
            productos,
            Lonas : productos.filter(producto => producto.category === "Lonas"),
            Stickers : productos.filter(producto => producto.category === "Stickers"),
            Carteles : productos.filter(producto => producto.category === "Carteles"),
            Banners : productos.filter(producto => producto.category === "Banners"),
        })
    },
    add : (req,res) => {
        return res.render('productAdd',{
            categorias
        })
    },
    detail : (req,res) => {/* busco producto con el id */
        let producto = productos.find(producto => producto.id === +req.params.id)

        return res.render('productDetail',{
            producto
        })
    }
}