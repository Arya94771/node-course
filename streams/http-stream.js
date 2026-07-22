var http=require('http')
var fs=require('fs')

http
.createServer(function(req,res){
    const fileStream=fs.createReadStream('./big_file1.txt','utf8');
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('err',()=>{
        return res.end(err);
    })
})
.listen(5000)