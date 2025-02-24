const { error } = require('console');
let fs = require('fs');

fs.readFile("a.txt","utf-8",(error,file1)=>{
    if(error){
        console.log(error);
    }else{
        console.log(file1);
    }
});

let file2 = fs.readFileSync('b.txt','utf-8');
console.log(file2);
