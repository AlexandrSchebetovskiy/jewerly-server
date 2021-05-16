const {Schema, model} = require('mongoose')

const order = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true 
  },
  phone: {
    type: Number,
    required: true
  },
  adress: {
    type: String,
    required: true 
  },
  cart: {
    name: {
      type: String,
      required: true 
    },
    id: {
      type: String,
      required: true 
    },
    count: {
      type: Number,
      required: true
    }
  }
})

module.exports = model('Order', order)