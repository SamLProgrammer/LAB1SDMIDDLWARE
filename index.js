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

function yourFunction(){
  shell.exec('/home/debian2/pinger.sh')
  let fs  = require("fs");
  let array = fs.readFileSync('/home/debian2/last_debian0_ping.txt').toString().split('\n');
  console.log(array[0])
  setTimeout(yourFunction, 2000);
}

yourFunction();

