//importamos el modelo para poder recibir los datos de la base de datos
const { Pelicula } = require('../models/peliculas')

//Definimos los metodos necesarios para ser utilizados en router
const getPelicula = async ( req , res , next) => {

    const buscar = await Pelicula.find()

    res.json(buscar)
}
const putPelicula = async ( req , res , next) => {

    try {
        const {_id , ...datos} = req.body

        await Pelicula.findByIdAndUpdate(_id , datos)

        const buscar = await Pelicula.find()
    
        res.json(buscar)
    } catch (error) {
        next({statusText : error.message})

    }
}
const deletegetPelicula = async ( req , res , next) => {

    const {_id} = req.params

    await Pelicula.findByIdAndDelete(_id)

    const buscar = await Pelicula.find()

    res.json(buscar)
}

//Exportamos los metodos para poder utilizarlos en router
module.exports = {
    getPelicula,
    putPelicula,
    deletegetPelicula
}
