const { read } = require('fs')
const http = require('http')
const net = require('net')
const {url} = require('url')

// create a http proxy tunneling :
const proxy = http.createServer((req, res) => {
  res.writeHead(200, {"content-type" : "text/plain"})
  res.write("Okay")
  res.end()
});

proxy.on('connect', (req, clientSocket, head) => {
  // connect to an origin server
  const { port, hostname } = new URL(`http://${req.url}`); 
  const serverSocket = net.connect(port || 80, hostname, () =>{
    clientSocket.write('HTTP/1.1 200 Connection Established\r\n' + 'Proxy-agent: Node.js-Proxy\r\n',+'\r\n');

    serverSocket.write(head);
    serverSocket.pipe(clientSocket);
    clientSocket.pipe(serverSocket);
  });
});

// Now the proxy is running 

proxy.listen(5000, '127.0.0.1', () => {

  console.log('Server is running on port 5000');

  // Make a request to a tunneling proxy
  const options = {
    port: 5000,
    host: '127.0.0.1',
    method: 'CONNECT',
    path: 'www.google.com:80'
  };
  const req = http.request(options);
  req.end();

  req.on('connect', (res, socket, head)=>{
    console.log("Get Connected!");

    socket.write('GET / HTTP/1.1\r\n' +
    'Host: www.google.com:80\r\n' +
    'Connection: close\r\n' +
    '\r\n');

    socket.on('data', (chunk) => {
      console.log(chunk.toString());
    });

    socket.on('end', ()=>{
      proxy.close();
    })
  })
})