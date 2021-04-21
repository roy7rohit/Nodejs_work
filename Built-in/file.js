const {readFile, writeFile} = require('fs');
console.log("Started a first task");

readFile('/home/roy/Documents/Nodejs/content/test.txt', 'utf8', (err, result) => {
   if(err){
     console.log(err);
     return 
   }
   console.log(result);
   console.log("Completed first task");
})

console.log("Starting next task");