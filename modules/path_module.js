const path=require('path')
//console.log(path.sep)
const filePath=path.join('/modules','names.js')
//console.log(filePath);

const base=path.basename(filePath)
//console.log(base);

const absolute=path.resolve(__dirname,'modules','utils.js');
console.log(absolute);