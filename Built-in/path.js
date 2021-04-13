const path = require('path')

console.log(path.sep);

const filePath = path.join('/component', 'folder', 'test.txt')
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'component', 'folder', 'test.txt')
console.log(absolute);

console.log(path.delimiter);

console.log(path.dirname('app.js'));