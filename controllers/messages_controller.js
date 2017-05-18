let express = require('express')
let router = express.Router()

router.post('/messages/:id', (req, res) => {
  res.render('messages/index')
})

module.exports = router
