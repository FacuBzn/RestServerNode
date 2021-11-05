const { response, json } = require("express");
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');

const { generarJWT } = require("../helpers/generarJWT");
const { googleVerify } = require("../helpers/google-verify");


const login = async (req, res = response) => {  
    const{ correo, password } = req.body;

    try {

        //Verificar si el email existe
        const usuario = await Usuario.findOne({ correo });
        if ( !usuario ) {
            return res.status(400).json({
                msg:'Usuario / Password no son correctas - correo'
            });
        }
        
        //Si el usuario esta activo 
        if ( !usuario.estado ) {
            return res.status(400).json({
                msg:'Usuario / Password no son correctas - Estado: false'
            });
        }
        
        //Verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if(!validPassword){
            return res.status(400).json({
                msg:'Usuario / Password no son correctas - password'
            });
        }
        //Generar el JWT
        const token = await generarJWT( usuario.id );                
        
        res.json({
            usuario,
            token
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg:'Algo salio mal, hable con el administrador'
        })
    }
}

const googleSignIn = async (req, res = response) => {

    const { id_token } = req.body;
    try {

        /* const { nombre, img, emaiil } = await googleVerify( id_token ); */
        const { nombre, img, correo } = await googleVerify( id_token );
        /* console.log('id_token:'+ id_token +'\n'); */
 
        let usuario = await Usuario.findOne({ correo });

        if ( !usuario ) {
            //tengo que crearlo
            /* console.log('1'+ usuario); */
            const data = {
                nombre,
                password: ':)',
                img,
                correo,
                google: true,
                role:true
            };
            /* console.log('2'+ usuario); */

            usuario = new Usuario( data );
            await usuario.save();
        }
        // si el usuario en DB
        if ( !usuario.estado ) {
            /* console.log('Estado del usuario'+ usuario.estado); */
            return res.status(401).json({
                msg: 'Hable con el administrador, el USUARIO se encuentra BLOQUEADO'
            });
        }
        //Generar el JWT
        const token = await generarJWT( usuario.id );

        /* console.log(googleUser); */
        res.json({
            usuario,
            token
        });

    } catch (error) {

        /* console.log('error:'+error); */
        json.status(400).json({
            ok: false,
            msg:' El token de google no se pudo verificar'
        })
    }
        
}

module.exports = {
    login,
    googleSignIn
}