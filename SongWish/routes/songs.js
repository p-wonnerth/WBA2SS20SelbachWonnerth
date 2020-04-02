const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')



// Getting all
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

//Getting One
router.get('/:id', (req, res) => {

})

//Creating One
router.post('/', (req, res) => {

})

//Deleting One
router.delete('/:id', (req, res) => {

})


module.exports = router