// const {readFileSync, writeFileSync} = require('fs')

// const first = readFileSync('./component/test.txt', 'utf8');
// const second = readFileSync('./component/new-test.txt', 'utf8');

// console.log(first, second);

//==========================================================================
const {readFile, writeFile} = require('fs')

readFile('./component/test.txt', 'utf8 ', (err, result)  => {
  if(err){
    console.log(err)
    return
  }
  const first = result
  readFile()
})
