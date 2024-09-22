const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'curd');

fs.stat(dirPath,( err,stats )=>{

    if(err)
    {
        if( err.code == 'ENOENT' )
        {
            fs.mkdir(dirPath, {recursive:true},(err)=>{

            });
            createFile();
            console.log('Directory not exist', dirPath)
        }else{
            console.log('Something wrong', err);
        }
    }else{

        if( stats.isDirectory() )
        {
            createFile();
            // fs.rmdir(dirPath,(errr)=>{

            // });
            console.log('Directory exist', dirPath)
        }else{
            console.log('Path is not a directory', dirPath);
    
        }
    }

});


function createFile()
{
    let fileName = process.argv[2];
let action = process.argv[3];

if( action == 'add' ) {
    fs.writeFileSync(`${dirPath}/${fileName}`,'Hello World');
}

else if( action == 'update' ) {
    fs.writeFileSync(`${dirPath}/${fileName}`,'Hello World one');

}
else if( action == 'rename' ) {

    if(fs.access(`${dirPath}/${fileName}`, fs.constants.F_OK,(err)=>{
            if(err)
            {
                console.log('file not exist');
    fs.writeFileSync(`${dirPath}/${fileName}`,'Hello World');

            }else{
                fs.renameSync(`${dirPath}/${fileName}`,`${dirPath}/new.txt`);
                
            }
    }));
}
else if( action == 'delete' ) {
    fs.unlinkSync(`${dirPath}/${fileName}`);
}
else if( action == 'read' ) {

    fs.readFile(`${dirPath}/new.txt`,'utf8',(err,item)=>{
        console.log(item);
    });
}


}