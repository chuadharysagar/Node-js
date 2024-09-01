const os = require('os');

// info about the current user
const user =os.userInfo();
console.log(user);

// methos returns the sytem uptime in seconds
console.log("System uptime is "+os.uptime());

const currentOs ={
  name:os.type(),
  release:os.release(),
  totalMem:os.totalmem(),
  freeMem : os.freemem(),
}

console.log(currentOs);