const {Router} = require('express')
const router = Router()
const nodemailer = require('nodemailer')
const Store = require('./models/store')
const Bestseller = require('./models/bestseller')
const Blog = require('./models/blog')
const About = require('./models/about')
const Gallery = require('./models/gallery')
const Contact = require('./models/contact')
const GetCard = require('./models/getcard')
const Order = require('./models/orders')
const keys = require('./keys/')
const orderMail = require('./emails/order')
const getCardMail = require('./emails/getcard')
const contactsMail = require('./emails/contacts')
const orderMailMGR = require('./emails/orderMGR')
const getCardMailMGR = require('./emails/getcardMGR')
const contactsMailMGR = require('./emails/contactsMGR')

const smtpTransport = require('nodemailer-smtp-transport')

let transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  secure:true,
  host: 'smtp.gmail.com',
  auth: {
    user: keys.MAIL_USERNAME,
    pass: keys.MAIL_PASSWORD,
  },
}))
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
  const data = req.body
  console.log(data);
  const date =  Date.now()

  const contact = new Contact({
    name: data.name,
    mail: data.mail,
    subj: data.subj,
    msg: data.msg,
    date
  })
  transporter.sendMail(contactsMail(data.mail, data))
  transporter.sendMail(contactsMailMGR(keys.BASE_EMAIL, data))
  contact.save()
  res.json({"test":true})
  // res.redirect('/')
})
router.post('/order', async (req, res) => {
  const data = req.body
  console.log(data.dataCart)
  const order = new Order({
    name: data.name,
    email: data.mail,
    phone: data.phone,
    adress: data.adress,
    promo: data.promo,
    cart: {
      items: data.dataCart
    }
  })
  order.save()
  transporter.sendMail(orderMail(data.mail, data.dataCart))
  transporter.sendMail(orderMailMGR(keys.BASE_EMAIL, data.dataCart))
  res.json({"test":true})
})
router.post('/getcard', async (req, res) => {
  const data = req.body
  console.log(data);
  const getcard = new GetCard({
    name: data.name,
    mail: data.mail,
    tel: data.phone,
  })
  transporter.sendMail(getCardMail(data.mail, data))
  transporter.sendMail(getCardMailMGR(keys.BASE_EMAIL, data))

  getcard.save()
  res.json({"test":true})
  // res.redirect('/')
})

module.exports = router