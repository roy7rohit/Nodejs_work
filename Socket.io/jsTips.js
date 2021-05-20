const isBelowThreshold = (currVal) => currVal < 40;
const arr = [1, 30, 39, 29, 10, 13];
console.log(arr.every(isBelowThreshold));

const isEven = (even) => even %2 == 0;
const arr1 = [2,4,6,8,0];
console.log(arr1.every(isEven));

const isOdd = (odd) => odd % 2 != 0;
const arr2 = [1,3,5,7,9,10];
console.log(arr2.every(isOdd));

const allEqual = (curr) => curr === arr3[0];
// const arr3 = [1,2,3,4,5,6,7];
const arr3 = [1,1,1,1,1,1,1];
console.log(arr3.every(allEqual));

const num = (curr) => curr % 3 === 0 && curr % 5 === 0;
const arr4 = [15, 45, 75];
console.log(arr4.every(num));

//  ApproximatelyEqual : 

const approximatelyEqual = (v1, v2, epsilon=0.001) => Math.abs(v1 - v2) < epsilon;
approximatelyEqual(Math.PI / 2.0, 1.5708); // true

//  ArrayToCSV :

const arrayToCSV = (arr5, delimeter = ',') =>{
  arr5.map(v => v.map(x => `${x}`).join(delimeter)).join('\n');
};

console.log(arrayToCSV([['a', 'b'], ['c', 'd']])); // '"a","b"\n"c","d"'
console.log(arrayToCSV([['a', 'b'], ['c', 'd']], ';')); // '"a";"b"\n"c";"d"'```