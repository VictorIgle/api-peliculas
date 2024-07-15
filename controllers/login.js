//importamos el modelo para poder recibir los datos de la base de datos
const {Usuario} = require("../models/usuarios")

//Definimos los metodos necesarios para ser utilizados en router
const postLogin = async ( req , res, next) => {

    try {
        const {password , username} = req.body

        const buscar = await Usuario.findOne({ username , password })

        buscar
        ? res.json({ login : true})
        : res.json({ login : false})
    } catch (error) {
        next({ statusText : error.message})
    } 
}

//Exportamos los metodos para poder utilizarlos en router
module.exports = {
    postLogin
}