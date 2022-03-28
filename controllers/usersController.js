const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator')


module.exports = {//TODO ESTO ES PARA  ME RENDERISE EL INDEX.EJS A HTML
    register : (req,res) => {
        return res.render('register')
    },
    
    processRegister : (req, res) => {
        let errors = validationResult(req)
        
    },

    login : (req,res) => {
        return res.render('login')
    }
}