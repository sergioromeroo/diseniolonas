const {check, body} = require('express-validator');

module.exports = [
    check('nombre')
    .notEmpty().withMessage('debes ingresar un nombre putarraco').bail()/* notEmpty si esta vacio el input q tiene q llenar el usuario */
    .isLength({
        min : 2,
        max : 10
    }).withMessage('nombre debe tener entre 2 a 10 letras').bail(),


    check('email')
    .notEmpty().withMessage('debes ingresar una email padreee'),

    check('contrasenia')
    .isLength({/* que tenga una longitud la palabra de 6 a 12 */
        min : 6,
        max : 12
    }).withMessage('la contraseña debe tener entre 6 a 12 caracteres'),

]