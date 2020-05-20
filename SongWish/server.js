require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Mit Datenbank verbunden'))

app.use(express.json())

const djRouter = require('./routes/dj')
app.use('/dj', djRouter)

const songsRouter = require('./routes/songs')
app.use('/songs', songsRouter)

const wsongsRouter = require('./routes/wunschliste')
app.use('/wunschliste', wsongsRouter)

const sucheRouter = require('./routes/musiksuche')
app.use('/musiksuche', sucheRouter)

app.listen(3000, () => console.log('Server gestartet'))

