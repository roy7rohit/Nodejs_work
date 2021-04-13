// const fun = new Promise(function(resolve, reject) {
//   resolve();
//   reject();
// });

// fun.then(
//   function(value) { /* code if successful */ },
//   function(error) { /* code if some error */ }
// );

function myDisplayer(some) {
  // document.getElementById("demo").innerHTML = some;
  console.log('roy');
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x === 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {console.log( myDisplayer(value));},
  function(error) {console.log(myDisplayer(error));}
);