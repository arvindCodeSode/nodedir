// const w = require('console').writeFileSync;
const fs = require('fs').writeFileSync;
console.log('hello');
let conte = `
<html>
    <head>
        <title>This is test file title</title>
        <meta charset="UTF-8" />
        <meta name="author" content="Arvind Parkash" />
    </head>
    <body>
        <div>
            <h1> This is full html file</h1>
        </div>
    </body>
</html>
`;
const datea =  new Date();
let times =  datea.getTime();
fs(  times+`_h.html`,conte);