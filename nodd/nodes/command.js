const fs = require('fs');
const path = require('path');

// const dir = 

let fileName = path.join(__dirname,process.argv[2]);
let content = process.argv[3];
let action = process.argv[4];


if(action=='add'){
    fs.writeFileSync(fileName,content);
}else{
    fs.unlinkSync(fileName);
}