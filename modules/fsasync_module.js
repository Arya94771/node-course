const{readFile,writeFile}=require('fs')

readFile('./modules/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first=result
    readFile('./modules/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second=result
        writeFile('./modules/second.txt',
            `Here is the result:${first},${second}`,
            (err,result)=>{
                if(err){
                    console.log(err);
                    return
                }
                console.log(result);
            }
        )
    })
})

//It is slower than sync approach.