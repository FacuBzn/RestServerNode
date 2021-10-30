const {Schema, model } = require('mongoose');

const UsuarioSchema = Schema({

    nombre:{
        type: String,
        required: [true,'El NOMBRE es obligatorio']
    },
    correo:{
        type: String,
        required: [true,'El CORREO es obligatorio'],
        unique: true
    },
    password:{
        type: String,
        required: [true,'la CONTRASEÑA es obligatoria'],
    }, 
    img:{
        type: String,
    },
    role:{
        type: String,
        required: true,
        emun: ['ADMIN_ROLE','USER_ROLE']
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    },

});

/* metodo que se utiliza para borrar u ocultar algunos atributos de un json*/
UsuarioSchema.methods.toJSON = function(){
    const { __v, password, ... usuario} = this.toObject();
    return usuario;
}

module.exports = model ( 'Usuario ', UsuarioSchema );