const http=require('http');

const server=http.createServer((req,res)=>{
if(req.url==='/'){
    return res.end('Welcome to mmmut')
}
else if(req.url==='/about'){
  return res.end('Here is our short histoy')
}
res.end(`
    <h1>Oops!!</h1>
    <p>We can't seem to find page that you are looking for</p>
    <a href="/">back home</a>`)
});

server.listen(500);