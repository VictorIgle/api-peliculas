//Importamos Mongoose para recibir la informacion de la base de datos
const mongoose = require('mongoose')
//Importamos el esquema que define el tipo de datos
const { peliculasSchema } = require('../schema/peliculas')
//Definimos el modelo en base al esquema de la base de datos
const Pelicula = mongoose.model('Pelicula' , peliculasSchema)
//Exportamos el modelo para ser utilizado en los controllers
module.exports = {
    Pelicula
}