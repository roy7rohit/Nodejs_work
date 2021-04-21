const app = require('express')()
const http = require('http')
const io = require('socket.io')

const server = http.createServer(app)

// app.use('/', express.static('/home/roy/Documents/Nodejs/nav-bar app'))

io.on('connection', (socket) =>{
  console.log('connection', socket.id);
})

server.listen(4646, () =>{
  console.log("server is running on port 4646");
})