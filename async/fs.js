// const {readFile, writeFile, read} = require('fs')
// const { resolve, reject } = require('path')
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const wriyeFilePromise = util.promisify(writeFile)





// const getText = (path ) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) =>{
//       if(err){
//         reject(err);
//       }else{
//         resolve(data)
//       }
//     })
//   })
// }

 // Approach : 1 

// getText('/home/roy/Documents/Nodejs/content/test.txt')
// .then((data) => console.log(data)).catch((err) => console.log(err))

// Approach 2 : {Using async, await}

// const start = async() => {
//   try {
//     const first = await getText('/home/roy/Documents/Nodejs/content/test.txt')
//     const second = await getText('/home/roy/Documents/Nodejs/content/second.txt')

//   console.log(`${first} <=> ${second}`);
    
//   } catch (error) {
//     console.log(error);
//   }
// }

// console.log(start());

// Approach : 3 {using util's promisify}

// const {readFile, writeFile, read} = require('fs')
// const { resolve, reject } = require('path')
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async() => {
//   try {
//     const first = await readFilePromise('/home/roy/Documents/Nodejs/content/test.txt', 'utf8')
//     const second = await readFilePromise('/home/roy/Documents/Nodejs/content/second.txt', 'utf8')

//     await writeFilePromise(
//       '/home/roy/Documents/Nodejs/content/third.txt', 
//       `Love : ${first}. ${second}`,
//       {flag:'a'}
//     )
//   console.log(`${first} <=> ${second}`);
    
//   } catch (error) {
//     console.log(error);
//   }
// }

// console.log(start());

// Approach : 4 {Using fs.promises with async and await}

const {readFile, writeFile} = require('fs').promises

const start = async() => {
    try {
      const first = await readFile('/home/roy/Documents/Nodejs/content/test.txt', 'utf8')
      const second = await readFile('/home/roy/Documents/Nodejs/content/second.txt', 'utf8')
  
      await writeFile(
        '/home/roy/Documents/Nodejs/content/fourth.txt', 
        `Love : ${first}. ${second}`,
        {flag:'a'}
      )
    console.log(`${first} <=> ${second}`);
      
    } catch (error) {
      console.log(error);
    }
  }
  
  console.log(start());

