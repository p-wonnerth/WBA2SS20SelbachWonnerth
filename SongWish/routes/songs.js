const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const Songs = require('../models/songs')



//Alle songs die der DJ abspielen kann
router.get('/', async (req, res) => {
    try {      
        const songs = await Songs.find()
        /*const sortedByVotes = songs.sort(function (a, b) {
            return b.votes - a.votes
        })*/
        res.json(songs)
    } catch (error){
        console.log(error)
    }
})

//Getting One
router.get('/:id', getSong, (req, res) => {
    res.json(res.song)
})

//Creating One
router.post('/', async (req, res) => {
    const songs = new Songs ({
    title: req.body.title,
    artist: req.body.artist
    })
     try {      
        const newSongs = await songs.save()
        res.status(201).json(newSongs)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


//Deleting One
router.delete('/:id', getSong, async (req, res) => {
    try {
        await res.song.remove()
        res.json({ title: res.song.title, message: 'wurde gelöscht' })
    } catch(err) {
        res.status(500).json({ message: err.message})
    }
})

async function getSong(req, res, next) {
    let song
    try {
        song = await Songs.findById(req.params.id)
        if (song == null) {
            return res.status(404).json({ message: 'Kein Song gefunden!'})
        }
    } catch(err) {
        return res.status(500).json({ message: err.message})
    }
    
    res.song = song
    next()
}


module.exports = router