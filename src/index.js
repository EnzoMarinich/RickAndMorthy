const express = require('express')
const server = express()
const PORT = 3001
const router = require("./routes/index")
const morgan = require("morgan")
const { conn } = require('./DB_connection')

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(express.json())
 server.use(morgan("dev"))

//  server.use((req, res, next)=>{
//     req.url = `/rickandmorty${req.url}`
//     next()
//  })

 server.use("/rickandmorty", router)

server.listen(PORT, async()=>{
   await conn.sync({force: true})
   console.log("estas coenctado a la base de datos correctamente")
   })

