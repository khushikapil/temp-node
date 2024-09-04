//Asynchronous non blocking fs module
/*const {readFile,writeFile} = require('fs')  //structured both readfile and write file 
//we need to provide a callback what is means is that we run that callback when we're done  (two arguments)=>
readFile('./content/first.txt','utf8',(err,result)=>
{
    if(err)
    {
        console.log(err)  //this block is where you would setup the functionality 
        return
    }
    console.log(result)  //the only way for getting this result is  by creating a callback 
})*/

/*something interesting where we don't get the text after running this block we're getting the buffer
 this is going to happen when we don't provide the utf coding 'utf8' */ 

 const {readFile,writeFile} = require('fs')  //structured both readfile and write file 
 console.log('Start')
 //we need to provide a callback what is means is that we run that callback when we're done  (two arguments)=>
readFile('./content/first.txt','utf8',(err,result)=>
{
    if(err)
    {
        console.log(err)  //this block is where you would setup the functionality 
        return
    }

    const first = result;
    readFile('./content/second.txt','utf8', (err,result)=>
    {
        if(err)
        {
            console.log(err)
            return 
        }
        const second = result;
        writeFile('./content/result-Async.txt', `here is the result:${first},${second}`, (err,result)=>
        {
           if(err)
            {
               console.log(err)
               return  
            }     
            //console.log(result) //undefined
            console.log('Done with the task')
        })
    })   
})
console.log('starting next task')

//undefined output as we are not expecting anything the console but there will be a new file created with the name "result-Async" with text in it
/*Now here in the output starting next task will appear first then done with the task because in this approach node just offload one task so that 
application can keep on serving the other users*/

//this is bit messier (using nested callbacks) we wil use promises, and async await later