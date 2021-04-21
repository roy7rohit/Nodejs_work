const eventEmitter = require('events')
const customEmitter = new eventEmitter()

customEmitter.on('response', () =>{
  console.log('Data recieved');
})

customEmitter.on('response', (name, id)=>{
  console.log(`Hey!${name} with id : ${id}?????`);
})

customEmitter.emit('response', 'roy', 7)