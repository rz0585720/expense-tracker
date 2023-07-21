const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

require('./config/mongoose')

const port = process.env.PORT || 3000
const app = express()
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')


app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
	res.render('index')
})


app.listen(port, () => {
	console.log(`Express is running on http://localhost:${port}`)
})