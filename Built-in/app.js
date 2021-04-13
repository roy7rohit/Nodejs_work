const os = require('os')

// info of current user
const user = os.userInfo()
// console.log(user);

// method returns system uptime in seconds
// console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem()
}

console.log(os.EOL);

//Returns the operating system CPU architecture for which the Node.js binary was compiled. Possible values are 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32', and 'x64'
console.log(os.arch());

//Contains commonly used operating system-specific constants for error codes, process signals, and so on

console.log(os.constants);


// console.log(currentOS);