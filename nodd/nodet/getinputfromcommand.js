const fs = require('fs');

if( process.argv[2]=='add' )
{
    fs.writeFileSync(`${process.argv[3]}.${process.argv[4]}`, process.argv[5])
}else if( process.argv[2]=='remove' ){
    fs.unlinkSync(`${process.argv[3]}.${process.argv[4]}`);
}

// example 
// PS D:\nodet> node getinputfromcommand.js add hello1 txt 'Hello world'
// PS D:\nodet> node getinputfromcommand.js remove  hello1 txt 'Hello world'