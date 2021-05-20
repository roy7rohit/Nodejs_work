// Example - 1 : 

// const {readFile, writeFile} = require('fs')
// console.log('Started a first task');

// readFile('/home/roy/Documents/Nodejs/Nodejs/Event-Loop Examples/roy.txt', 'utf-8', (err, data) => {
//   if(err){
//     console.log(err);
//   }
//   console.log(data);
//   console.log('Completed the task');
// })
// console.log('Starting next task');

// Example - 2 : 

// console.log('First');
// setTimeout(()=>{
//   console.log('Second');
// },1)
// console.log('Third');

// setInterval(()=>{
//   console.log('Fourth');
// },1)
// console.log('Fifth');

// Example : 3 : 

const http = require('http')

const server = http.createServer((req, res)=>{
  console.log('request event');
  res.end('Hello World');
})

server.listen(5000, ()=>{
  console.log('server listening on port : 5000...........');
})
