const {Schema, model} = require('mongoose')

const blog = new Schema({
      id: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      date: {
        day: {
          type: Number,
          required: true
        },
        month: {
          type: String,
          required: true
        },
        year: {
          type: Number,
          required: true
        }
      },
      img: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      }
})

module.exports = model('Blog', blog)