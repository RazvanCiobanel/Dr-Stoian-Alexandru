const express = require('express')
const activities = require('../data/activities.json')

const router = express.Router()

router.get('/:id', (req,res) => {
    const { id } = req.params
    const activity = activities.find((item) => item.id === id)
    res.send(activity)
})

module.exports = router