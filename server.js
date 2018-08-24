var socket  = require( 'socket.io' );
var express = require('express');
var app     = express();
var com     = require('serialport');
var server  = require('http').createServer(app);
var io      = socket.listen( server );
var port    = process.env.PORT || 3000;


// port
var serialPort = new com("COM3"); 

serialPort.on('data', function(data){
    console.log(data.toString("utf-8"));
    io.sockets.emit('new_message',{
        new_message: data.toString("utf-8")
    });
});
// buat server
server.listen(port, function () {
  console.log('Server listening at port %d', port);
});