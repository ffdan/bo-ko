const express = require('express')
const app = express()
const port = 3000
const mongguse = require('mongoose')


mongguse.connect('mongodb+srv://david:rhrbgud1@boiler.kldve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{}).then(()=>console.log('mongodb')).catch(err=>console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})