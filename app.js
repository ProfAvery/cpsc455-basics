const os = require('os')
const express = require('express')
const bodyParser = require('body-parser')

const PORT = 8080
const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('form', { name: null })
})

app.post('/greet', (req, res) => {
  const fullName = `${req.body.first_name} ${req.body.last_name}`
  console.log(fullName)

  res.render('form', { name: fullName })
})

app.listen(PORT, () => {
  console.log(`Server running at http://${os.hostname()}:${PORT}/`)
})
