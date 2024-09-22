const fs = require('fs');
const path = require('path');

let dirPath = path.join(__dirname,'file1/files');
fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) {
      console.error('Error creating directory:', err);
    } else {
      console.log('Directory created successfully:', dirPath);
    }
  });


// for(let i=0; i< 5; i++)
// {
//     fs.writeFileSync(`${dirPath}/hello_${i}.txt`, 'Hello World');
//     // fs.unlinkSync(`hello_${i}.txt`);
// }