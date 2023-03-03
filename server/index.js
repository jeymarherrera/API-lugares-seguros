//inicializar nuestro servidor
const express = require("express");
const {router} = require("./routes/index");
const server = express();

//endpoint - controlador
/**
server.get("/saludar", (req,res)=>{
    return res.status(200).send("Hola mi nombre es Jeymar");
    //200 ok
    //2001 crear algo
    //400 bad request
    //404 not found
    //500 server error
}); **/

server.use(express.json()); //solicitudes que traen algon en el post
server.use(router);


//exports
module.exports = {server};
//este es para versiones mas recientes de js
//export default server;