//Event code loop example
//Asynchronous code non blocking operation
const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        return res.end('Home Page')
    }
    if(req.url==='/about'){
        //BLOCKING CODE !!!
      for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
            console.log(`${i} ${j}`)
        }
      }
      return res.end('About page')
    }
    console.log('request event')
    //return res.end('Hello world')
})

server.listen(5000,()=>{
    console.log('Server listening on port:5000');
}) 
 