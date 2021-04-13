// const amount = 12
// if(amount < 10){
//   console.log('small no');
// }else{
//   console.log('large no');
// }

// console.log('hey its my first node app.');

// console.log(__dirname);  // path to current directory
// console.log(__filename); // file name
// console.log(require); // function to use modules (common JS)
// console.log(module); // info about current file(file) 
// console.log(process); // info about env where the program is being executed

// console.log('########################################################');

// setInterval(()=>{
//   console.log('hello world');
// }, 1000)

// setTimeout(() => {
//   console.log("hey how are you");
// }, 1000)

console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');

// Every file is module itself in CommonJS, (module => encapsulate code {only share minimum})

// const names = require('./name')
// const {jhon, peter} = require('./name')
// const sayHi = require('./utils')

// console.log(names)



// sayHi('roy')
// // sayHi(names.jhon)
// // sayHi(names.peter)

// sayHi(jhon)
// sayHi(peter)

// const data = require('./name')

const {name, singlePerson} = require('./name')
const {cube, adder} = require('./utils')
// require('./utils')

console.log(name);
console.log(singlePerson)

console.log(cube(5));
console.log(adder(100, 100));


// console.log(cube(10));
// console.log(adder);
