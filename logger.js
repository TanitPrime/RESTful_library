const fs = require('fs');
const EventEmitter = require('events');


class LogEvent extends EventEmitter{
    constructor(){
        super();
        this.on('logging',(eventArg)=>{
            log(eventArg);
        });
    }
    
     log(text){
        fs.appendFile("./log",text+"\n",(err)=>{
            if(err) console.log("error while logging;",err);
        });
    }
}



module.exports = LogEvent;