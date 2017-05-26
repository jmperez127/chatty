let express = require('express')
let router = express.Router()

router.get('/messages/:id', (req, res) => {
  res.render('messages/index')
})

module.exports = router
