const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const Songs = require('../models/songs')



// Gettiing API-Requests
router.get('/:songs', (req, res) => {
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
        res.json(songs)
    } catch (error){
        console.log(error)
    }
})

//Getting One
router.get('/:id', (req, res) => {

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

//Deleting One
router.delete('/:id', (req, res) => {

})


module.exports = router