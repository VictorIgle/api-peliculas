//importamos el modelo para poder recibir los datos de la base de datos
const {Pelicula} = require('../models/peliculas')

//Definimos los metodos necesarios para ser utilizados en router
const getPeliculaAdd = async ( req , res , next) => {

    const buscar = await Pelicula.find()

    res.json(buscar)
}

const postPelicula = async ( req , res , next) => {

    try {
         const {title , year , director , genre , synopsis } = req.body
 
         const nuevo = new Pelicula ({title , year , director , genre , synopsis})
 
         await nuevo.save()
 
         const buscar = await Pelicula.find()
 
          res.json(buscar)
    } catch (error) {
     next({statusText : error.message})
     
    }
 }

//Exportamos los metodos para poder utilizarlos en router
module.exports = {
    postPelicula,
    getPeliculaAdd
}