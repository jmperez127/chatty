var express = require('express')
var app = express()

app.engine('pug', require('pug').__express)
app.set('view engine', 'pug')

app.use(express.static(__dirname + '/public'))
// app.use(require('./middlewares/users'));

require('fs').readdirSync(__dirname + '/controllers').forEach(function (file) {
  app.use(require('./controllers/' + file))
})

app.listen(3000, function () {
  console.log('Listening on port 3000...')
})
