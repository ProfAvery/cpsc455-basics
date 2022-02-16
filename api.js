const os = require('os')
const express = require('express')
const bodyParser = require('body-parser')

const PORT = 8080
const app = express()

app.use(express.static('static'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.redirect('/form.html')
})

app.post('/greet', (req, res) => {
  const fullName = `${req.body.first_name} ${req.body.last_name}`
  console.log(fullName)

  res.json({ name: fullName })
})

app.listen(PORT, () => {
  console.log(`Server running at http://${os.hostname()}:${PORT}/`)
})
