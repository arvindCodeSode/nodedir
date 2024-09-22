const express =  require('express');
const app = express();

app.get('/',(req, resp)=>{
    resp.send(`
        <a href="/">Home</a>
        <a href="/user">User</a>
        <a href="/about">About</a>
    <h1>This is home page</h1>

    `)

});

app.get("/user", (req,resp)=>{
    resp.send(`
    <a href="/">Home</a>
    <a href="/user">User</a>
    <a href="/about">About</a>
    <h1>This is user page</h1>

`)
});

app.get("/about", (req,resp)=>{
    resp.send(`
    <a href="/">Home</a>
    <a href="/user">User</a>
    <a href="/about">About</a>
    <h1>This is about page</h1>
`)
});

app.listen(5000);