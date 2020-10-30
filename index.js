const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const server = express()

server.use(express.json())

server.use(express.static(path.join(__dirname, portfolio/build)))

server.get('/', (req, res) => {
    res.json({ message: 'Server is running'})
})

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfolio/build', 'index.html'))
})

server.listen(PORT, () => {
    console.log(`Listening on ` + PORT)
})