var express = require('express'), app = express();

app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));
// app.use(require('./middlewares/users'));
app.use(require('./controllers'));

app.listen(3000, function() {
  console.log('Listening on port 3000...')
});