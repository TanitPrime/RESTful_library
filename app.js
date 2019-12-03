const LogEvent = require('./logger.js');
const express = require('express');
var DB = require('./books.js');
//instantiate the exported classes
const logger = new LogEvent();
const app = express();



//time stamp
let ts = new Date();
//home end point
app.get('/',(req,res)=>{
    logger.log(`entered end point ${req.url}`);
    res.send("we in hoe");
});

app.get('/api/books',(req,res)=>{
    logger.log(`entered end point ${req.url}`);
    res.send(DB.books);
});

app.get('/api/books/:id',(req,res)=>{
    const found = DB.getBook(req.params.id);
    res.send(found);
});

app.listen(3000,()=>logger.log(`server started at ${ts} //`));
console.log('Listening on port 3000...');