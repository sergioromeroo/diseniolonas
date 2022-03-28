module.exports = {//TODO ESTO ES PARA  ME RENDERISE EL INDEX.EJS A HTML
    register : (req,res) => {
        return res.render('register')
    },
    
    processRegister : (req, res) => {

    },

    login : (req,res) => {
        return res.render('login')
    }
}