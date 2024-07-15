//Importamos Mongoose para recibir la informacion de la base de datos
const mongoose = require('mongoose')
//Definimos el esquema para indicar el tipo de datos que se van a recibir de la base de datos e indicamos a que coleccion pertenecen
const peliculasSchema = new mongoose.Schema(
    { title : String , year : Number , director : String ,
        genre : String , image : String , synopsis : String , trailer : String , poster : String},
    { collection : 'peliculas' , versionKey : false}
)
//Exportamos el esquema para poder ser utilizado por los modelos
module.exports = {
    peliculasSchema
}