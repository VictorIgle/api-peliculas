//importamos el modelo para poder recibir los datos de la base de datos
const {Pelicula} = require("../models/peliculas")

//Definimos los metodos necesarios para ser utilizados en router
const getPeli = async (req , res , next) => {

    try {
        const {_id} = req.params
        const buscar = await Pelicula.findById(_id)

        res.json(buscar)
    } catch (error) {
        next({ statusText : error.message})
    }
}

//Exportamos los metodos para poder utilizarlos en router
module.exports = {
    getPeli
}