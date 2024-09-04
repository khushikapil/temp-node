//CommonJS, every file is module(by default)
//Modules - Encapsulated code(only share minimum)


const names = require('./4-modules') //for importing 
const sayHi = require('./5 utils')
const data = require('./6-alternateexport')
require ('./7-mind-grenade')
//console.log(names) //uncomment before adding 5utils


//sayHi('Khushi')// no access before importing 5utils
//sayHi(names.john)  //no accesss to this 
//sayHi(names.peter) //no access

//modules let us access different functions from different files anywhere in the application 


