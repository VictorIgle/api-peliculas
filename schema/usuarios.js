//Importamos Mongoose para recibir la informacion de la base de datos
const mongoose = require('mongoose')

//Definimos el esquema para indicar el tipo de datos que se van a recibir de la base de datos e indicamos a que coleccion pertenecen
const usuarioSchema = new mongoose.Schema(
    {password : String , username : String},
    { collection : 'usuarios' , versionKey : false }
)

//Exportamos el esquema para poder ser utilizado por los modelos
module.exports = {
    usuarioSchema
}