 // Constructor to create a new function: 
var sum = new Function('a', 'b','return a + b');
console.log(sum (100, 200));

var mult = new Function('a', 'b', 'return a * b');
console.log(mult(10, 20));

console.log(eval('100 * 100')); // 10000
console.log(eval(new String('100 * 100'))); // '100 * 100'
console.log(eval('100 * 100') === eval('10000')); // true
console.log(eval('100 * 100') === eval(new String('100 * 100'))); // false{  Number !== String }

console.log(eval(new String('2 + 2')));  // returns a String object containing "2 + 2"
console.log(eval('2 + 2'));             // returns 4

const exp = new String('2*8');
console.log(eval(exp.toString()));

function test() {
  var x = 2, y = 4;
  // Direct call, uses local scope
  console.log(eval('x + y')); // Result is 6
  // Indirect call using the comma operator to return eval
  console.log((0, eval)('x + y')); // Uses global scope, throws because x is undefined
  // Indirect call using a variable to store and return eval
  var geval = eval;
  console.log(geval('x + y')); // Uses global scope, throws because x is undefined
}

//================================================================



