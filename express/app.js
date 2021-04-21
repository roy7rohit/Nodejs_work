// Approach : 1
// const app = require('express')() 

// Approach : 2
// const express = require('express')
// const app = express()

// Express methods :

// app.get()
// app.post()
// app.put()
// app.delete()
// app.use()
// app.all()
// app.listen()


const express = require('express')
const app = express()

app.get('/', (req, res) =>{
  res.status(200).send("home page")
})

app.get('/about', (req, res) => {
  res.status(200).send("about page")
})

app.all('*', (req, res)=>{
  res.status(404).send("<h2> Page not found </h1>")
})

app.listen(5000, ()=>{
  console.log("user hits the server");
})