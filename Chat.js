/**
 * Created by iceConfig on 2015/12/23.
 */
var net = require('net');
var chatServer = net.createServer();
chatServer.on('connection',function(client){
    client.write('Hi!\n');

    client.on('data',function(data){
        console.log(data;)
    })
    //client.write('Bye!\n');
    //client.end();
});
chatServer.listen(9000);
console.log('Chat server started');