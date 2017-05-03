var express = require('express')
var router = express.Router()

router.post('/messages/:id', function (req, res) {
  res.render('messages/index')
})

module.exports = router
