const {readFile,writeFile}=require('fs').promises;
// const util=require('util');
// const readFileProgram=util.promisify(readFile)
// const writeFileProgram=util.promisify(writeFile)
// const getText=(path)=>{
//     return new Promise((resolve,reject)=>{
//     readFile(path,'utf8',(err,data)=>{
//     if(err){
//         reject(err)
//     } else{
//         resolve(data)
//     }
// })

//     })
// }
// getText('./modules/first.txt')
// .then(result=>console.log(result))
// .catch(err=>console.log(err))

const start=async()=>{
    try{ const first=await readFile('./modules/first.txt','utf8')
        const second=await readFile('./modules/second.txt','utf8')
        await writeFile('./modules/result-mind-grenade.txt',`This is awesome:${first}`,
            {flag:'a'})
         console.log(first)
        console.log(second)}
    catch(error){
        console.log(error)
    }
   
}
start()