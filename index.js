const express = require('express')
const path = require('path')
const routes = require('./routes')
const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://Alex:uMT22fXLGdeqn99n@cluster0.m31es.mongodb.net/jewerly'
const keys = require('./keys')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use('/', routes)
const PORT = process.env.PORT || 3000




async function start() {
  console.log(keys)
  try {
    await mongoose.connect(keys.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify:false ,
    })
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}
start()

