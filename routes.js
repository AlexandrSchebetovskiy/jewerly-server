const {Router} = require('express')
const router = Router()
const nodemailer = require('nodemailer')
const Store = require('./models/store')
const Bestseller = require('./models/bestseller')
const Blog = require('./models/blog')
const About = require('./models/about')
const Gallery = require('./models/gallery')
const Contact = require('./models/contact')



//START ROUTE
////////////////////////////////////////////////
router.get('/', (req, res) => {
  res.sendFile(__dirname+'/public/index.html')
})

//DATA ROUTES
/////////////////////////////////////////////////
router.get('/server/about', async (req, res) => {
  const about = await About.find().lean()
  res.json(about)
})
router.get('/server/home', async (req, res) => {
  const bestsellers = await Bestseller.find().lean()
  const blog = await Blog.find().lean()
  res.json({bestsellers, blog})
})
router.get('/server/store', async (req, res) => {
  const store = await Store.find().lean()
  res.json(store)
})
router.get('/server/gallery', async (req, res) => {
  const gallery = await Gallery.find().lean()
  res.json(gallery)
})
router.get('/server/blog', async (req, res) => {
  const blog = await Blog.find().lean()
  res.json(blog)
})
//POST ROUTES
////////////////////////////////////////////////
router.post('/contact', async (req, res) => {
  console.log(req.body)
  const data = req.body
  
  const date =  Date.now()

  const contact = new Contact({
    name: data.name,
    mail: data.mail,
    subj: data.subj,
    msg: data.msg,
    date
  })
  contact.save()
  res.redirect('/')
})
router.post('/order', async (req, res) => {

})
router.post('/getcard', async (req, res) => {
  const data = req.body
  res.redirect('/')
})

module.exports = router