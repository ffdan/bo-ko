const express = require('express')
const app = express()
const port = 3000
const mongguse = require('mongoose')
const {User} =require("./models/user");
const bodyparser = require("body-parser");
const config = require('./config/key');

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

mongguse.connect(config.mongoURI,{}).then(()=>console.log('mongodb')).catch(err=>console.log(err))


app.get('/', (req, res) => {
  res.send('새해복많이받으세요')
})

app.post('/register',(req,res)=>{

 const user = new User(req.body)
 user.save((err,doc)=>{
   if(err) return res.json({success:false,err})
   return res.status(200).json({success:true})
 })

})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})