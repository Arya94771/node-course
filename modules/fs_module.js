const {readFileSync,writeFileSync}=require('fs')

const first=readFileSync('./modules/first.txt','utf8')
const second=readFileSync('./modules/second.txt','utf8')

// console.log(first);
// console.log(second);

writeFileSync('./modules/result-sync.txt',`Here is the result ${first},${second}`,{flag:'a'})
//It is faster than async approach

