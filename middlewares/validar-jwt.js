const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario');

const validarJWT = async( req = request, res = response, next ) => {

    const token = req.header( 'x-token' );

    if ( !token ) {
        return res.status(401).json({
            msg:'No hay TOKEN en la peticion enviada '
        });
    }

    try {
        
        const { uid } = jwt.verify(token , process.env.SECRETORPRIVATEKEY);

        //Leer el usuario que corresponde al uid
        const usuario = await Usuario.findById( uid );

        //Verificar si el usuario esta eliminado de la BD o si existe 
        if ( !usuario ) {
            return res.status(401).json({
                msg:'TOKEN no es valido - Usuario no existe en la BD'
            })
        }

        //Verificar si el uid tiene estado TRUE
        if ( !usuario.estado ) {    
            return res.status(401).json({
                msg: 'TOKEN no es valido - Usuario con estado en FALSE',
            })
        }

        req.usuario = usuario;
        next();
        
    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: 'Token no valido'
        })
    }
    
    console.log(token);

    next();

}


module.exports = {
    validarJWT
}


