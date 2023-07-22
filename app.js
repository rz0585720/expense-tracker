const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const Handlebars = require('handlebars')
const hbsHelpers = require('handlebars-helpers')


if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const routes = require('./routes')
require('./config/mongoose')

const port = process.env.PORT || 3000
const app = express()
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs', helpers: hbsHelpers }))
app.set('view engine', 'hbs')

Handlebars.registerHelper('dateFormat', require('handlebars-dateformat'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(routes)

app.listen(port, () => {
	console.log(`Express is running on http://localhost:${port}`)
})