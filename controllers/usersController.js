module.exports = {//TODO ESTO ES PARA  ME RENDERISE EL INDEX.EJS A HTML
    register : (req,res) => {
        return res.render('register')
    },
    login : (req,res) => {
        return res.render('login')
    }
}