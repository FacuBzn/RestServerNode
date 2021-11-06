const { Router } = require ('express');
const { check } = require('express-validator');

const { validacampos } = require('../middlewares/validar-campos');

const router = Router();

/* 
{{url}}/api/categorias
*/

//OBTENER TODAS LAS CATEGORIAS - PUBLICO
router.get('/', (req, res) => {
    res.json({
        msg: "ESTO ES UN GET"
    })
});

//OBTENER UNA CATEGORIA POR ID - PUBLICO
router.get('/:id', (req, res) => {
    res.json({
        msg: "ESTO ES UN GET"
    })
});

//CREAR CATEGORIA  - PRIVADO - CUALQUIER PERSONA CON UN TOKEN VALIDO
router.post('/', (req, res) => {
    res.json({
        msg: "ESTO ES UN POST"
    })
});

//ACTUALIZAR - PRIVADO - CUALQUIERA CON TOKEN VALIDO
router.put('/:id', (req, res) => {
    res.json({
        msg: "ESTO ES UN PUT"
    })
});

//BORRAR UNA CATEGORIA - ADMIN
router.delete('/:id', (req, res) => {
    res.json({
        msg: "ESTO ES UN DELETE"
    })
});

module.exports = router;