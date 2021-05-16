const {Schema, model} = require('mongoose')

const store = new Schema({
  id: {
    type: String,
    required: true
  },
  name:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }
})



module.exports = model('Store', store)