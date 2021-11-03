const { Router } = require ('express');
const { check } = require('express-validator');
const { usersGet,
        usersPost,
        usersPut,
        usersDelete,
        usersPatch } = require('../controllers/users.controllers');
const { esRoleValido, existeEmail, existeUsuarioPorId } = require('../helpers/db-validators');
// -------------- middlewares --------------------------
const {
        validacampos,
        validarJWT,
        esAdminRole,
        tieneRole } = require('../middlewares');

// ----------------- models ----------------------------
const Role = require('../models/role');

const router = Router();

/* this.app.get('/api',  (req, res) => {
    res.status(403).json( {
        msg: 'get API'
    })
}); */

router.get('/', usersGet );

router.post('/',[
    /* check('correo',' El correo no es el valido ').isEmail(), */
    /* check('role',' No es un rol permitido ').isIn(['ADMIN_ROLE','USER_ROLE']), */
    check('nombre',' El nombre es obligatorio ').not().isEmpty(),
    check('password',' El password debe de ser mas de 6 letras ').isLength({min: 6 }),
    check('correo').custom( existeEmail ),
    check('role').custom( esRoleValido ),
    validacampos
],usersPost );

router.put('/:id',[
    check('id', 'No es un ID correspondiente ').isMongoId(),
    check('id').custom( existeUsuarioPorId ),
    check('role').custom( esRoleValido ),
    validacampos
],usersPut);

router.delete('/:id',[
    validarJWT,
    /* esAdminRole, */
    tieneRole('ADMIN_ROLE','VENTAS_ROLE'),
    check('id', 'No es un ID correspondiente ').isMongoId(),
    check('id').custom( existeUsuarioPorId ),
    validacampos
], usersDelete);

router.patch('/', usersPatch);

module.exports = router;