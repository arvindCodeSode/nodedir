const insert = require('./product/insert');
(async()=>{
    let details =  await insert();
    console.log(details);
})()