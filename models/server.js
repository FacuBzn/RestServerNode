const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Conectarse con la base de datos
        this.conectarDB(); 

        // Middlewares
        this.middlewares(); 
        // Rutas de mi aplicacion
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }


    middlewares(){

        /*CORS define una forma en la que un navegador y un servidor pueden 
        interactuar para determinar si es seguro permitir la solicitud de origen cruzado*/
        this.app.use( cors() );

        /* lectura y parseo del body */
        this.app.use( express.json() );


        //directorio publico
        this.app.use(express.static('public'));
    }

    routes(){

        this.app.use( this.usuariosPath, require('../routes/users.routes')); 

    }

    listen(){
        this.app.listen(this.port,() => {
            console.log('El servidor corriendo en el puerto: '
            + this.port +` Example app listening at http://localhost:${this.port}`);
        });
    }

}

module.exports = Server; 