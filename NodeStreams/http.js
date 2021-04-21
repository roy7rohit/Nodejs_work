const http = require('http')
const fs = require('fs')

http.createServer((req, res) =>{
  // const text = fs.readFileSync('/home/roy/Documents/Nodejs/NodeStreams/bigdata.txt', 'utf8');
  // res.end(text)

  const readStream = fs.createReadStream('/home/roy/Documents/Nodejs/NodeStreams/bigdata.txt', 'utf8');

  readStream.on('open', () => {
    readStream.pipe(res) // read and write data in chunks
  })

  readStream.on('error', (err) =>{
    res.end(err)
  })
}).listen(5000);
