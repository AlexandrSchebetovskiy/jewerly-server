const {Schema, model} = require('mongoose')

const gallery = new Schema({
  img: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }

})

module.exports = model('Gallery', gallery)