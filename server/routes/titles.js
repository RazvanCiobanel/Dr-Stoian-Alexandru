const express = require('express')
const titles = require('../data/titles.json')

const router = express.Router()

router.get('/', (req,res) => {
    res.send(titles)
})

module.exports = router