require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Mit Datenbank verbunden'))

app.use(express.json())

const songsRouter = require('./routes/songs')
app.use('/songs', songsRouter)

app.listen(3000, () => console.log('Server gestartet'))

