let a= 10;
let b=0;

let pro =  new Promise((res, rej)=>{
    setTimeout(()=>{
        // res(b=30);
        rej('error')
    },2000)
})
pro.then((data)=>{
    console.log(a+data)
}).catch((err)=>{
    console.log(err)
});
console.log('hello');