const http = require('http')

// Approach 1 : simple http.createServer

// const server = http.createServer((req, res) => {
//   res.end("Hey Roy")
// })

// Approach : 2 -> using event emitter API

const server = http.createServer()
// emits the request event
// subscribe to it / listen to it / respond to it

server.on('request', (req, res) =>{
  res.end('Hey Roy')
})

server.listen(5000)