const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')


router.get('/:songs', (req, res) => {
    console.log('API')
    const songs = req.params.songs;
    console.log('Request');
    const getData = async (songs) => {
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

module.exports = router