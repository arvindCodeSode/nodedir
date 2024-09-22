const fs = require('fs');
const path = require('path');

const dirname = path.join(__dirname,'files');
if(!fs.existsSync(dirname)){
    console.log('directory exists');
    fs.mkdirSync(dirname);
}

// fs.writeFileSync(`${dirname}/apple.txt`,'hello txt');
// fs.unlinkSync(`${dirname}/apple.txt`);
// fs.renameSync(`${dirname}/apple.txt`,`${dirname}/apple1.txt`);
// fs.appendFileSync(`${dirname}/apple.txt`,' And this also');
fs.readFile(`${dirname}/apple.txt`,'utf-8',(err,item)=>{
    console.log(item);
});