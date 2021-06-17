const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const bcrypt = require('bcryptjs')

const app = express()
const PORT = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extend: true}))
app.use(methodOverride(')method'))

app.get('/', (req,res) =>{
  res.send('hello world')
})

app.listen(PORT, () =>{
  console.log(`app is running on http://localhost:${PORT}`)
})

