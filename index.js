console.clear()
console.log('Iniciando Js')

//Importamos los modulos necesarios para coenctar a la base de datos, poder utilizar express, conectar con las rutas y recibir los datos de lso formularios
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const { router } = require('./router/router')

//Definimos las variables de entorno del puerto de conexion y la direccion de la base de datos para que no sean visibles una vez publicada la appi
const PORT = process.env.PORT || 3000
const BBDD = process.env.BBDD || 'mongodb://127.0.0.1:27017/Api_peliculas'
//Conectamos express con la base de datos de Mongo
const conectar = async () => mongoose.connect(BBDD)
                    .then( ()=> console.log('Conectado con Mongo') )
                    .catch( err => console.log(err.message) )

conectar()

//Definimos los middleware necesarios para el uso de los modulos
const app = express()

    app.use( cors() )
    app.use( express.json() )
    app.use( express.urlencoded({ extended : false }) )
    app.use( router )






app.listen(PORT , ()=> console.log('Iniciando Api'))