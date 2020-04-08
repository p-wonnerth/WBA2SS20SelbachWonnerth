const mongoose = require('mongoose')

const songsSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true  
    },
    artist: {
      type: String,
      required: true
    },
    pickedToList: {
      type: String,
      required: true  
    },
    pickDate: {
      type: Date,
      required: true,
      default: Date.now  
    }
})

module.exports = mongoose.model('Songs', songsSchema)