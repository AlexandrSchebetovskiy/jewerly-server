const {Schema, model} = require('mongoose')

const contact = new Schema({
  name: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true
  },
  subj:{
    type: String,
    required: true
  },
  msg: {
    type: String,
    required: true
  },
  date:{
    type: Date,
    required: true
  }
})

module.exports = model('Contact', contact)