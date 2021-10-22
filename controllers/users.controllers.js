const { response } = require('express');
const { request } = require('http');


const usersGet = (req= request, res = response) => {

    /* const query = req.query; se puede desestructurar la variable query 
    en varios parametros de la url*/

    const { nombre="no name", apikey ,page ,limit  } = req.query;
    res.json( {
        msg: 'Get API - Controlador',
        /* query */
        nombre,
        apikey,
        page,
        limit
    })
}
const usersPost = (req, res = response) => {

    /* const body = req.body; -> forma de declarar o sino especificando que datos quiero*/
    const { dni, nombre, email } = req.body;

    res.json( {
        msg: 'Post API - Controlador',
        /* body */
        dni,nombre,email
    })
}
const usersPut = (req, res = response) => {

    /* const id = req.params.id; esta es una forma cuando se tiene solo un parametro, si habria que
    desestrucutrar se lo hace de la sgte manera:*/ 
    const {id} = req.params;
    res.json( {
        msg: 'Put API - Controlador',
        id  
    })
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