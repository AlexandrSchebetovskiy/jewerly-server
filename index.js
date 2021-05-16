const express = require('express')
const path = require('path')
const routes = require('./routes')
const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://Alex:uMT22fXLGdeqn99n@cluster0.m31es.mongodb.net/jewerly'
const Store = require('./models/store')
const Bestseller = require('./models/bestseller')
const Blog = require('./models/blog')
const About = require('./models/about')
const Gallery = require('./models/gallery')
const be = require('./public/server/Home.json')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', routes)
const PORT = process.env.PORT || 3000




async function start() {
  try {
    await mongoose.connect(mongoURI, {
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

