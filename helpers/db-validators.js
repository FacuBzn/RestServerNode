const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRoleValido = async ( role = '' ) => {
    const existeRole = await Role.findOne({role}) ;

   if ( !existeRole ) {
        throw new Error(`El Rol ${ role } no se encuentra creado en la BD `)
   }
}

const existeEmail = async( correo = '') => {
    //Verificar si el correo existe
    const existeEmail = await Usuario.findOne({correo});

    if( existeEmail ){
        throw new Error(`El correo del usuario ${ correo } ya se encuentra creado en la BD `)
    }
}

const existeUsuarioPorId = async( id = '') => {
    //Verificar si el id existe
    const existeUsuario = await Usuario.findById(id);

    if( !existeUsuario ){
        throw new Error(`El ID del usuario ${ id } NO EXISTE `)
    }
}

module.exports = {
    esRoleValido,
    existeEmail,
    existeUsuarioPorId
}



