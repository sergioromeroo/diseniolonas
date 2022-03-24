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

    save : (req,res) =>{
        const {title, description,extra,category,images} = req.body;
        let producto ={
            id : productos[productos.length - 1].id + 1,
            title,
            description,
            extra,
            images: req.file ? req.file.filename : 'default-image.png',
            category
        }
        productos.push(producto)
        fs.writeFileSync(path.join(__dirname,'..','data','products.json'),JSON.stringify(productos,null,2),'utf-8')/* q se me guarde en el json  */
        return res.redirect('/')
    },

    detail : (req,res) => {/* busco producto con el id */
        let producto = productos.find(producto => producto.id === +req.params.id)

        return res.render('productDetail',{
            producto
        })
    },

    edit : (req,res) => {
        let producto = productos.find(producto => producto.id === +req.params.id)

        return res.render('productEdit',{
            categorias,
            productos,
            producto
        })
    },

    update : (req,res) => {
        const {title, description,extra,category} = req.body;

        let producto = productos.find(producto => producto.id === +req.params.id)
        let productoEditado = {
            id : +req.params.id,
            title,
            description,
            extra,
            category
        }

        let productosModificados = productos.map(producto => producto.id === +req.params.id ? productoEditado : producto)

        fs.writeFileSync(path.join(__dirname,'..','data','products.json'),JSON.stringify(productosModificados,null,2),'utf-8')/* q se me guarde en el json  */

        res.redirect('/')
    },

    remove : (req,res) => {
        res.send(req.params.id)
    }
    
}