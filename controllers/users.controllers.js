const { response } = require('express');
const { request } = require('http');
const bcryptjs = require('bcryptjs');

const Usuario = require ('../models/usuario');

const usersGet = async(req= request, res = response) => {

    /* {const query = req.query; se puede desestructurar la variable query 
    en varios parametros de la url*}/

    /* const {q, nombre="no name", apikey ,page=1 ,limit  } = req.query; */
    
    const { limite = 5, desde=0 } = req.query;
    const query = {estado:true};

 /*    const usuarios = await Usuario.find(query)
        .skip(Number (desde))
        .limit(Number (limite));
    
    const total = await Usuario.countDocuments(query); */

    const respuesta = Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip(Number (desde))
            .limit(Number (limite))
    ])

    res.json( {
        total,
        usuarios
    });
}
const usersPost = async (req, res = response) => {

    /* const body = req.body; -> forma de declarar o sino especificando que datos quiero*/
    const { nombre, correo, password, role } = req.body;
    const usuario = new Usuario( {nombre, correo, password, role} );

    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    //Guardar en DB
    await usuario.save();

    res.json( {
        msg: 'Post API - Controlador',
        /* body */
       /*  dni,nombre,email, */
        usuario
    })
}
const usersPut = async (req, res = response) => {

    /* const id = req.params.id; esta es una forma cuando se tiene solo un parametro, si habria que
    desestrucutrar se lo hace de la sgte manera:*/ 
    const {id} = req.params;

    const{ _id, password, google,correo, ...resto} = req.body;

    //TODO validar contra base de datos
    if ( password ) {
        //encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json( usuario );
}
const usersDelete = (req, res = response) => {

    res.json( {
        msg: 'Delete API - Controlador'
    })
}
const usersPatch = (req, res = response) => {

    res.json( {
        msg: 'Pathc API - Controlador'
    })
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
    usersPatch
};