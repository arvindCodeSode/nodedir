const os = require('os');

// console.log(os);
console.log(os.arch());
console.log(os.platform());
console.log(os.userInfo());
console.log(os.freemem()/(1024*1024*1024));
console.log(os.totalmem()/(1024*1024*1024));