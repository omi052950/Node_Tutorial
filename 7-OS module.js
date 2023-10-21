// OS Module 

const os = require('os');

// information about the current user

const user = os.userInfo();
console.log(`The user is " ${user.username} ".`);
console.log(`The homedirectory of the user is " ${user.homedir} ".`);
console.log(`The shell of the user is " ${user.shell} ".`);


// system returns the uptime in seconds

console.log(`The system uptime is is ${os.uptime()} seconds `);

// Information about operating system

const current = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMemo: os.freemem()
}

console.log(current);