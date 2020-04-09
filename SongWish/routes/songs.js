const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const Songs = require('../models/songs')



// Gettiing API-Requests
router.get('/api/:songs', (req, res) => {
    const songs = req.params.songs;
    console.log('Request');
    const getData = async (songs) => {
            console.log('Hi')
            try {
                const res = await fetch(`https://orion.apiseeds.com/api/music/search/?q=${songs}&apikey=A3Ws3ljpfcTMFW4U6TRa6lmHC0yX8xsa5fsJIKwI7MxuFEMEwTkwqShjGPv9tDMh`)
                const fetchData = await res.json();

                let i;
                for (i=0; i<fetchData.length; i++) {
                    console.log('Titel: ',fetchData.result[i].title,
                                'Interpret: ',fetchData.result[i].artist,
                                'Album: ', fetchData.result[i].album);
                }
            } catch (error) {
                console.log(error);
            }
        } 
    getData(songs);  
})

//Alle songs die der DJ abspielen kann
router.get('/', async (req, res) => {
    try {      
        const songs = await Songs.find()
        const sortedByVotes = songs.sort(function (a, b) {
            return b.votes - a.votes
        })
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

//Updating One
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

//Nach votes sortieren


module.exports = router