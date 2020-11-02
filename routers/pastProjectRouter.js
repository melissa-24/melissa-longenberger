const router = require('express').Router()
const PastProjects = require('./pastProjectModel')

router.get('/', (req, res) => {
    PastProjects.findAll()
        .then(pastProjects => res.status(200).json(pastProjects))
        .catch(err => orWhereNotExists({ code: 500, message: "Problem getting Projects", err}))
})


router.get('/:id', (req, res) => {
    PastProjects.findById(req.params.id)
    .then(pastProject => {
        if (pastProject) {
            res.status(200).json(pastProject)
        } else {
            res.status(404).json({ message: 'ID not found'})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'Trouble getting Past Project', err})
    })
})

router.post('/', (req, res) => {
    PastProjects.add(req.body)
    .then(pastProject => {
        res.status(201).json(pastProject)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Trouble adding to Past Projects'})
    })
})

router.put('/:id', (req, res) => {
    PastProjects.update(req.params.id, req.body)
    .then(pastProject => {
        if (pastProject) {
            res.status(200).json(pastProject)
        } else {
            res.status(404).json({ message: 'ID not found' })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Trouble updating Past Project' })
    })
})

router.delete('/:id', (req, res) => {
    PastProjects.remove(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({ message: 'Your removed that Past Project' })
        } else {
            res.status(400).json({ message: 'Having trouble finding that ID' })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Trouble removing Past Project' })
    })
})

module.exports = router