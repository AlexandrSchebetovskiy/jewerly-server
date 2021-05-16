const {Schema, model} = require('mongoose')

const getCard = new Schema({
  name: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true
  },
  tel: {
    type: Number,
    required: true
  }
})

module.exports = model('Getcard', getCard)