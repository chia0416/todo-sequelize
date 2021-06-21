const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const usePassport = require('./config/passport')
const routes = require('./routes')

const app = express()
const PORT = 3000

usePassport(app)

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

app.use(session({
  secret: 'ThisIsMysecret',
  resave: false,
  saveUninitialized: true
}))

app.use(bodyParser.urlencoded({ extend: true}))
app.use(methodOverride(')method'))
app.use(routes)

app.listen(PORT, () =>{
  console.log(`app is running on http://localhost:${PORT}`)
})

