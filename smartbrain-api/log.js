const fs = require('fs');
fs.appendFile('server.log',">>\t\tSERVER STARTED\t\t<<\n", function (err) {
    if (err) throw err;
}); 
const write = (message,type,origin) =>{
    //Tpyes
    // 0 = GOOD
    // -1 = FATAL ERROR
    // 1 = WARNING
    const currentdate = new Date(); 
    
    switch (type) {
        case 0:
            console.log('\x1b[36m%s\x1b[0m', ` [INFO][${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}][${origin}] `+message);
            break;
            case -1:
                console.log('\x1b[31m', `[FATAL][${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}][${origin}] `+message);
                break;
                case 1:
                    console.log('\x1b[33m', `[WARNING][${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}][${origin}] `+message);
                    break
                    default:
                        break;
                        console.log(message);
                    }
                    fs.appendFile('server.log', `[${type}][${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}][${origin}] `+message+"\n", function (err) {
                        if (err) throw err;
                    }); 
                }
module.exports.write = write; 