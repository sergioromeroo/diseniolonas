const {check} = require('express-validator');

module.exports = [
    check('title')
    .notEmpty().withMessage('debes ingresar un titulo putarraco'),/* Empty si esta vacio el input q tiene q llenar el usuario */

    check('description')
    .notEmpty().withMessage('debes ingresar una descripcion padreee'),

    check('extra')
    .notEmpty().withMessage('te olvidaste aca dale media pila'),

    check('category')
    .notEmpty().withMessage('primero selecciona una categoria maestro'),
]