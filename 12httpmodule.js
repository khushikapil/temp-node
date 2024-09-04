//HTTP MODULE (allows us to setup a web server)
const http = require('http');
const server = http.createServer((req,res)=>
{
    /*console.log(req) (2)
    res.write('Welcome to our home page')
res.end() (1)*/
    if(req.url==='/')
    {
        res.end('Welcome to our home page')
    }
    if(req.url==='/about')
    {
        res.end('Here is our short history')
    }
    res.end(`<h1>OOPs!</h1>
        <p> We can't find the page you are looking for</p>
        <a href ="/">Back home,</a>`) //defaut response

})
server.listen(5000)


//req is what incoming request and res is response we are sending to the user

 //we won't leave the terminal baecause webserver keeps on listening to the requests 
//open chrome browser and write localhost:5000 after saving running in the terminal
//now as you can see we have created our very first basic website 

//add console.log(req) after pressing ctrl+C in the terminal to stop the server 
//after adding the above refresh the browser then come back to the terminal and we'll see too many properties
/**look for the url property the write if statement */

