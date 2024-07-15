//importamos express y los controllers para añadirlos a las rutas con sus respectivos metodos
const express = require('express')
const { postLogin } = require('../controllers/login')
const { getPeliculas } = require('../controllers/home')
const { getPelicula, putPelicula, deletegetPelicula } = require('../controllers/edit')
const { getPeli } = require('../controllers/movie')
const { getPeliculaAdd, postPelicula } = require('../controllers/add')

//importamos router de react roter-dom para poder utilizar las rutas
const router = express.Router()

router.route('/login')

    .post(postLogin)

router.route('/home')

    .get(getPeliculas)

router.route('/edit')

    .get(getPelicula)
    .put(putPelicula)

router.route('/add')

    .get(getPeliculaAdd)
    .post(postPelicula)

router.route('/edit/_id/:_id')

    .delete(deletegetPelicula)

router.route('/movie/:_id')
    .get(getPeli)






//Añadimos un middleware para capturar los errores en todas las rutas
router.all('*' , ( req , res , next )=>{
    const err = new Error()
          err.status     = 404 
          err.statusText = `No encuentro el Endpoint`
    next(err)
})

router.use(( err , req , res , next )=>{
    let { status , statusText } = err
          status     = status     || 500
          statusText = statusText || `Error interno de mi API`
    res.status(status).json({ status , statusText })
})

//exportamos router para conectarlo con la api
module.exports = {
    router
}