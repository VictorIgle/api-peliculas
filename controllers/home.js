//importamos el modelo para poder recibir los datos de la base de datos
const {Pelicula} = require("../models/peliculas")

//Definimos los metodos necesarios para ser utilizados en router
const getPeliculas = async ( req , res , next) => {

    const buscar = await Pelicula.find()
    res.json(buscar)
}

//Exportamos los metodos para poder utilizarlos en router
module.exports = {
    getPeliculas
}