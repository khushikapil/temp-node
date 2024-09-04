const os = require('os') //builtin os module, still we have access to all properties of OS module 
//in the node we can intereact with thw file system 

// info about current user
const user = os.userInfo()
console.log(user)
//uptime of the system 
//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()}seconds`) //uptime is a predefine method 

const currentOS = 
{
    name : os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freemem :os.freemem(),
}
console.log(currentOS);


