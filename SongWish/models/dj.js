const mongoose = require('mongoose')

const djSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true  
    },
    vorname: {
      type: String,
      required: true
    },
    kuenstlerName: {
      type: String,
      required: true  
    },
    pickDate: {
      type: Date,
      required: true,
      default: Date.now  
    }
})

module.exports = mongoose.model('Dj', djSchema)