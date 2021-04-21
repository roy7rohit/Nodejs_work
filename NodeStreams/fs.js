const {createReadStream} = require('fs')

const stream = createReadStream('/home/roy/Documents/Nodejs/NodeStreams/bigdata.txt', {highWaterMark:90000, encoding: 'utf8'})

// default size 64kb
// last buffer - reminder
// highWaterMark - control size

stream.on('data', (result) =>{
  console.log(result);
})

stream.on('error', (err) => {
  console.log(err.message);
})