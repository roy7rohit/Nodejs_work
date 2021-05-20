// provides basic os related utility functions.
// use require('os') to access this module

const os = require('os')

console.log(os.tmpdir()); // returns os default directory
console.log(os.endianness()); // returns the endianness of the CPU. Possible values are 'LE' or 'RE'
console.log(os.hostname()); // returns the hostname of the os
console.log(os.type()); // returns the type of os
console.log(os.platform()); // returns the os platform
console.log(os.arch()); // returns the architecture of os
console.log(os.release()); // return the os release
console.log(os.uptime()); // returns the system uptime in seconds
console.log(os.loadavg()); // returns ans array containing the 1, 5, and 15 minute load average
console.log(os.totalmem()); // returns the total amount of system memory in bytes
console.log(os.freemem()); // returns the amount of free system memory in bytes
console.log(os.cpus());
 // returns the array objects containing information about each CPU/core installed : model, speed(mhz), and times (an object containing the number of milliseconds the CPU/core spent in: user, nice, sys, idle, and irq)

 console.log(os.networkInterfaces()); // get a list of network interfaces
 console.log(os.EOL) ; // A constant defining the appropriate End-of-line marker for the operating system 