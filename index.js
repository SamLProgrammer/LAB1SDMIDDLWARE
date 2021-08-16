const express = require('express')
const app = express()
const port = 4000
const shell = require('shelljs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

 shell.exec('/home/debian2/pinger.sh')

