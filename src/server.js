const express = require('express');
const app = express();

const routes = require('./server/routes');
app.set('views', __dirname + '/views')



app.set('view engine', 'ejs');

app.use(express.static('public'))

app.use('/', routes)


const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
