// const {readFile, writeFile} =  require('fs');

// const start = async () =>{
//   try {
//     const first = await readFile('/home/roy/Documents/Nodejs/Nodejs/Event-Loop Examples/roy.txt', 'utf8');
//     const second = 
//   } catch (error) {
    
//   }
// }

// Promises : 
// function request(url){
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       reject(`Network error when trying to reach ${url}`);
//     }, 500);
//   });
// }

// function requestWithTries(url, retryCount, currentTries = 1){
//   return new Promise((resolve, reject)=>{
//     if (currentTries <= retryCount) {
//       const timeout = (Math.pow(2 * currentTries) - 1) * 100;
//       request(url)
//       .then(resolve)
//       .catch((err) => {
//         setTimeout(() => {
//           console.log(err);
//           console.log(`Waiting ${timeout} ms`);
//           requestWithTries(url, retryCount, currentTries + 1)
//         }, timeout);
//     });
//     }else{
//       console.log('No retries left, giving up.');
//       reject('No retries left, giving up.');
//     }
//   });
// }

// requestWithTries('http://localhost:3000')
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })

// // Async-await : 

// function wait(timeout){
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       resolve();
//     }, timeout);
//   });
// }

// async function requestWithRetry(url){
//   const max_tries = 10;
//   for (let i = 0; i <= max_tries; i++) {
//     try {
//       return await request(url)
//     } catch (error) {
//       const timeout = Math.pow(2 , i);
//       console.log('Waiting', timeout, 'ms');
//       await wait(timeout);
//       console.log('Retrying', err.message, i);
//     }
//   }
// }

// requestWithRetry('http://localhost:3000')
//   .then((res) => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.error(err)
//   });



//==========================================================================

// function executeAsyncTask(){
//   return a()
//   .then((valueA)=>{
//     return b(valueA)
//     .then((valueB) => {
//       return c(valueA, valueB);
//     });
//   });
// }

// const d = executeAsyncTask();
// console.log(d);

// =========================================================================

// const myPromise =  new Promise((res, rej) => {
//   setTimeout(() =>{
//     res('foo');
//   }, 300);
// });

// /*
//  .then() method takes up to two arguments; the first argument is a callback function for the resolved case of the promise, and the second argument is a callback function for the rejected case. Each .then() returns a newly generated promise object, which can optionally be used for chaining.
//  */

// // myPromise
// //   .then(handleResolvedA, handleRejectedA) 
// //   .then(handleResolvedB, handleRejectedB)
// //   .then(handleResolvedC, handleRejectedC)
// //   .catch(handleRejectedAny) 

//   // A .catch() is really just a .then() without a slot for a callback function for the case when the promise is resolved.



//   myPromise
//     .then(val => { return val  + ' and bar \n'; })
//     .then(val => { return val + ' and bar again \n'; })
//     .then(val =>{ return val + ' and again \n'; })
//     .then(val => {return val + ' and again \n'; })
//     .then(val => console.log(val))
//     .catch(err => console.log(err))

//   // ========================================================================

//   const promise = new Promise((res, rej)=>{
//     res(777);
//   });

//   promise.then((val) => console.log('Asynchronous logging has value :' , val))
//   console.log('Immediate Logging');

  //======================================================================
  // require('XMLHttpRequest')
  
  // const promise1 = new Promise((res, rej) =>{
  //   setTimeout(()=>{
  //     res('foo');
  //   }, 300)
  // })

  // promise1.then(val => console.log(val)); // foo
  // console.log(promise1); // [object : Promise]

  // // ====================================================================

  // const promise = new Promise((res, rej) => {
  //   const xhr = new XMLHttpRequest();
  //   xhr.open('GET', url);
  //   xhr.onload = () => res(xhr.responseText);
  //   xhr.onerror = () => rej(xhr.statusText);
  //   xhr.send();
  // });

  // console.log(promise);

  // ========================================================================

  // const p1 = Promise.resolve(10);
  // const p2 = 42;
  // const p3 = new Promise((res, rej)=>{
  //   setTimeout(res, 100, 'foo');
  // }) ;

  // Promise.all([p1, p2, p3]).then((val) => {
  //   console.log(val);
  // })
  

  // const p1 = Promise.resolve(7);
  // const p2 = Promise.resolve("roy");
  // const p3 = Promise.resolve("loves");
  // const p4 = "priyu";
  // const p5 = new Promise((res, rej) => {
  //   setTimeout(res, 200, "forever")
  // });

  // const p6 = new Promise((res, rej) => {
  //   setTimeout(res, 100, "and forever")
  // });

  // Promise.all([p1, p2, p3, p4, p5, p6]).then(val => console.log(val));

  //======================================================================
  // If the iterable contains non-promise values, they will be ignored, but still counted in the returned promise array value (if the promise is fulfilled):

  // this will be counted as if the iterable passed is empty, so it gets fulfilled
  var p1 = Promise.all([1,2,3,4,5]);

// this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
  var p2 = Promise.all([1,2,3,4, Promise.resolve(777)]);

// this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected
  var p3 = Promise.all([1,2,3, Promise.reject(666)]);

  setTimeout(function() {
    console.log(p1);
    console.log(p2);
    console.log(p3);
  });

// logs : 
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: 555 }


