const {Schema, model} = require('mongoose')

const about = new Schema({
  img: {
    type: String,
    required: true
  },
  instaLink: {
    type: String,
    required: true
  }

})

module.exports = model('About', about)