//Importamos Mongoose para recibir la informacion de la base de datos
const mongoose = require('mongoose')
//Importamos el esquema que define el tipo de datos
const { usuarioSchema } = require('../schema/usuarios')
//Definimos el modelo en base al esquema de la base de datos
const Usuario = mongoose.model('Usuario' , usuarioSchema)
//Exportamos el modelo para ser utilizado en los controllers
module.exports = {
    Usuario
}