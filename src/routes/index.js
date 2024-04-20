const express = require('express')
const routerMovies = require('./movie.router')
const router = express.Router()

router.use('/movies', routerMovies)




module.exports = router