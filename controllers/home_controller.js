let express = require('express')
let router = express.Router()

router.get('/', (req, res) => {
  res.render('home/index')
})

router.get('/sign_in', (req, res) => {
  res.render('home/sign_in')
})

module.exports = router
