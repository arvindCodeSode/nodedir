const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'files');
if(!fs.existsSync('files'))
{
    fs.mkdirSync('files');
}else{
    fs.rmdirSync('files');
}
for(let i =0; i< 3; i++)
{
    fs.writeFileSync(`${dirPath}/hello${i}.txt`, 'Hello World'+i);
}

const files = fs.readdirSync(dirPath);
files.forEach((item)=>{
    console.log(item);
})
fs.readdir(dirPath,(err,item)=>{
    item.forEach((items)=>{
        fs.readFile(dirPath+'/'+items,'utf-8',(erro,data)=>{
            console.log(data);
        })
    })
});

fs.readFile(dirPath+'/hello0.txt','utf-8',(er,data)=>{
    console.log(data);
})

fs.appendFile(dirPath+'/hello0.txt',' Append',(err)=>{

});

fs.rename(dirPath+'/hello0.txt',dirPath+'/hello5.txt',(erro)=>{

})
fs.unlinkSync(dirPath+'/hello1.txt',);

console.log(process)
