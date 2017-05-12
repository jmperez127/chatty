var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.render('home/index')
})

router.get('/sign_in', function (req, res) {
  res.render('home/sign_in')
})

module.exports = router
