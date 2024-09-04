// we have an option of interacting with the file system and the modules (fs) 
/** there are two flavours in it 
 1. asynchronously non blocking 
 2. synchronously blocking 
 */

 //Synchronous 
 const {readFileSync,writeFileSync} = require('fs')  //structured both readfile and write file 
console.log('Start')
 //in readFileSync method we need to provide two parameters, we need to provide a path to that specific file as well as what is the encoding 
 const first = readFileSync('./content/first.txt', 'utf-8')  //utf-8 is encoding 
 const second = readFileSync('./content/second.txt', 'utf-8')
 console.log(first, second);
 
 //adding one more file 
 writeFileSync('./content/result-syc.txt',`here is the result:${first},${second}`,
     {flag:'a'})  //creating a file, result-sync file has been created in content folder
 
 //node will append this flag: 'a'
 console.log('Done with this task')
 console.log('Starting The next one ')