const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const WSongs = require('../models/wunschliste')

//Hinzufügen
router.post('/', async (req, res) => {
    const songs = new WSongs ({
    title: req.body.title,
    artist: req.body.artist,
    pickedToList: req.body.pickedToList
    })
     try {      
        const newSongs = await songs.save()
        res.status(201).json(newSongs)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Vote counter

router.patch('/:id', getSong, async (req, res) => {
    if (req.body.title != null) {
        res.song.title = req.body.title
    }
    if (req.body.artist != null) {
        res.song.artist = req.body.artist
    }
    if (req.body.title == res.song.title &&
        req.body.artist == res.song.artist)
        ++res.song.votes
    try {
        const updatedSong = await res.song.save()
        res.json(updatedSong)
    } catch(err) {
        res.status(400).json({ message: err.message})
    }
})

async function getSong(req, res, next) {
    let song
    try {
        song = await WSongs.findById(req.params.id)
        if (song == null) {
            return res.status(404).json({ message: 'Kein Song gefunden!'})
        }
    } catch(err) {
        return res.status(500).json({ message: err.message})
    }
    
    res.song = song
    next()
}

//Alle
router.get('/', async (req, res) => {
    try {      
        const songs = await WSongs.find()
        res.json(songs)
    } catch (error){
        console.log(error)
    }
})

//nach votes sortieren

module.exports = router