const {writeFileSync} = require('fs')
for (let index = 0; index < 10000; index++) {
  writeFileSync('/home/roy/Documents/Nodejs/NodeStreams/bigdata.txt', `Hello Roy => ${index}\n`, {flag: 'a'});
}