// const { dir } = require("console");
const express = require("express");
const path =  require("path");
const app = express();
let dirPath = path.join(__dirname,'public');

app.use(express.static(dirPath));
app.listen(5000);