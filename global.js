//GLOBAL-NO WINDOW!!

//__dirname -path to current directory
//__filename-file name
// require-function to use modules
// module-info about current module
// process= info about environment wwhere the program is being executed
console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);
setInterval(()=>{
    console.log('HELLO WORLD');
},1000)