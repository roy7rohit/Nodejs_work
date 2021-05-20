const fs = require('fs')

// Synchronous rename.
// const rename = fs.renameSync('/home/roy/Documents/Nodejs/Nodejs/Event-Loop Examples/roy.txt', '/home/roy/Documents/Nodejs/Nodejs/Node/roy.txt')

// console.log(rename);

// Asynchronous rename.
// const rename = fs.rename('/home/roy/Documents/Nodejs/Nodejs/Event-Loop Examples/priyu.txt',
// '/home/roy/Documents/Nodejs/Nodejs/Node/priyu.txt', (err)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log('Successfully renamed');
//   }
// })

// fs.rename('hello.txt', 'world.txt', (err)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log('its done');
//   }
// })
 
//*****************************************************************************
// Synchronous ftruncateSync.

// console.log('content before ftruncateSync');
// console.log(fs.readFileSync('world.txt', 'utf8'));

// // get the fd = file descriptor for the file:
// const fd = fs.openSync('world.txt', 'r+');

// fs.ftruncateSync(fd, 5);
// console.log(fs.readFileSync('world.txt', 'utf8'));
// console.log('content after ftruncateSync');

// Asynchronous ftruncate. 

// console.log('Contents of file before truncate');
// console.log(fs.readFileSync('world.txt', 'utf8'));

// // get the file descriptor of the file
// const fd = fs.openSync('world.txt', 'r+');

// fs.ftruncate(fd, 10, (err) => {
//   if(err){
//     console.log(err);
//   }else{
//     console.log('Contents of file after truncate');
//     console.log(fs.readFileSync('world.txt', 'utf8'));
//   }
// })

//*****************************************************************************
// Asynchrounous truncate : 

// fs.truncate('/home/roy/Documents/Nodejs/Nodejs/Node/world.txt', 20, (err)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log('file content is deleted');
//   }
// })

//=======================================================

// open the file
// fs.open('/home/roy/Documents/Nodejs/Nodejs/Node/world.txt', 'r+', (err, fd) => {
//   if(err){
//     return console.error(err);
//   }

//   //read the file
//     fs.read(fd, buf, 0, buf.length, 0,  (err, data) => {
//       if(err){
//         console.log(err);
//       }

//       // truncate the file
//       fs.truncate('/home/roy/Documents/Nodejs/Nodejs/Node/world.txt', 50,(err, bytes) => {
//         if(err){
//           console.log(err);
//         }

//         // content after truncating
//         console.log('new content after truncating');
//         fs.read(fd, buf, 0, buf.length, 0, (err, data) =>{
//           if(err){
//             console.log(err);
//           }

//            // Print only read bytes to avoid junk.
//            if(bytes > 0){
//              console.log(buf.slice(0, bytes).toString());
//            }

//            // close the opened file :
//            fs.close('fd', (err)=>{
//              if(err){
//                console.log(err);
//              }else{
//                console.log('file has been closed');
//              }
//            })
//         })
//       })
//     })
// })

// Synchronous truncate :

// fs.truncateSync('/home/roy/Documents/Nodejs/Nodejs/Node/world.txt', 0)

//*************************************************************************** 

// Asynchronous chown => change owner

// let filePath = '/home/roy/Documents/Nodejs/Nodejs/Node/world.txt';
// fs.chown(filePath, 1541, 999, (err) => {
//   if(err){
//     console.log(err);
//   }else{
//     console.log('uid and gid updated successfully');
//   }
// })

// // Synchronous chown : 
// fs.chownSync('/home/roy/Documents/Nodejs/Nodejs/Node/world.txt', 1541, 999);

// Asynchronous fChown => The fs.fchown() method is used to change the owner and group of the given file descriptor. :

// let fd = fs.openSync('/home/roy/Documents/Nodejs/Nodejs/Node/world.txt', 'r');
// fs.fchown(fd, 1027, 999, (err) => {
//   if(err){
//     console.log(err);
//   }else{
//     console.log("uid and gid set successfully");
//   }
// })

// let fd = fs.openSync('/home/roy/Documents/Nodejs/Nodejs/Node/world.txt', 'r');
// fs.fchown(fd, 1051, 1125, (err)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log('uid and gid set successfully');
//   }
// })

// Synchronous fchown : 

// const fd = fs.openSync('/home/roy/Documents/Nodejs/Nodejs/Node/world.txt', 'r')
// fs.fchownSync(fd, 1051, 999)

// Asynchronous lchown : 
// The fs.lchown() method is used to asynchronously change the owner and group of the given path, however, it does not deference symbolic links if the path is one, unlike the fs.chown() method which does dereference the links to their path.

const filepath = '/home/roy/Documents/Nodejs/Nodejs/Node/world.txt';
const symlinkpath = 'symlinkPath';

// Create a symlink to the file
fs.symlinkSync(filepath, symlinkpath);
fs.lchown(symlinkpath, 1200, 1201, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("Given uid and gid set successfully");
  }
});