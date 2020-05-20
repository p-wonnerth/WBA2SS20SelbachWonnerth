const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const Dj = require('../models/dj')

//Creating one
router.post('/', async (req, res) => {
    const dj = new Dj ({
    name: req.body.name,
    vorname: req.body.vorname,
    kuenstlerName: req.body.kuenstlerName
    })
     try {      
        const newDj = await dj.save()
        res.status(201).json(newDj)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Gettin one   
router.get('/:id', getDJ, (req, res) => {
    res.json(res.dj)
})

async function getDJ(req, res, next) {
    let dj
    try {
        dj = await Dj.findById(req.params.id)
        if (dj == null) {
            return res.status(404).json({ message: 'Keinen DJ gefunden!'})
        }
    } catch(err) {
        return res.status(500).json({ message: err.message})
    }
    
    res.dj = dj
    next()
}

module.exports = router