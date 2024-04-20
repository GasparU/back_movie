
const Movies = require('../models/Movies')
const catchError = require('../utils/catchError')

const getAll = catchError(async(req, res) =>{
    const results = await Movies.findAll()
    return res.json(results)
})

const create = catchError(async(req,res)=>{
    const results = await Movies.create(req.body)
    return res.status(201).json(results)
})

const getOne = catchError(async(req, res)=>{
    const {id} = req.params
    const results = await Movies.findByPk(id)
    if(!results) return res.sendStatus(404)
    return res.json(results)
})

const remove = catchError(async (req, res) => {
    const {id} = req.params
    await Movies.destroy({where: {id}})
    return res.sendStatus(204)
})

const update = catchError(async(req, res) => {
    const {id} = req.params
    const results = await Movies.update(req.body, {where: {id}, returning: true})
    if(!results[1]===0) return res.sendStatus(404)
    return res.json(results[1][0])
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}