const http = require('http')

const server = http.createServer((req, res) => {
  console.log("request send");
  res.end("Hello World")
})

server.listen(5000,  ()=>{
  console.log("Server listening on port 5000....");
})