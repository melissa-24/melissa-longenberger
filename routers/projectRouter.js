const router = require('express').Router()
const Projects = require('./projectModel')

router.get('/', (req, res, next) => {
    Projects.findAll()
        .then(projects => res.status(200).json(projects))
        .catch(err => next({ code: 500, message: 'Problems getting Projects', err}))
})


router.get('/:id', (req, res, next) => {
    Projects.findById()
        .then(projects => res.status(200).json(projects))
})

router.post('/', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router