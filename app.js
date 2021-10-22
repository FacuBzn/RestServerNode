require('dotenv').config();
const Server = require('./models/server');


const server = new Server();
/* server.listen(); */

/* app.listen(8080) */
server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


