const {createReadStream}=require('fs')

const stream=createReadStream('./big_file1.txt');

//default 64kb
//highWaterMark-control size
//const stram=createReadStream('./big_file1.txt',{highWaterMark:90000})
//const stram=createReadStream('./big_file1.txt',{encoding:'utf8'})
stream.on('data',(result)=>{
    console.log(result);
})

stream.on('error',(err)=>console.log(err))