const { Router } = require ('express');
const { check } = require('express-validator');
const { login, googleSignIn } = require('../controllers/auth.controllers');
const { validacampos } = require('../middlewares/validar-campos');

const router = Router();


router.post('/login',[
    check('correo','El correo es obligatorio').isEmail(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
    validacampos
], login);

router.post('/google',[
    check('id_token','id_token es necesario').not().isEmpty(),
    validacampos
], googleSignIn);


module.exports = router;