//path modules  allows us to interact with file paths 
const path = require('path');

//console.log(path.sep)  //separator property that returns a platform specific operator
//joins property which joins a sequence of path segements
//it returns a normalised resulting path

const filepath = path.join('/content/','subfolder','test.txt')
console.log(filepath)

//Accessing the last name of the file path 
const base = path.basename(filepath)
console.log(base)

//path.results - returns absolute path, accepts a sequence of path, segments of path and returns an absolute path 
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute); //why do we need absolute path ? because, our application will be running in differene pcs, diff envs having different paths 

