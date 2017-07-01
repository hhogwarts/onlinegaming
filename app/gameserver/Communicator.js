var exports = module.exports = {};

var express = require('express');
var http = require('http');
var fs = require('fs');
var path = require('path');

var Communicator = function(){
    var io;
    var server = http.createServer(function(request, response){
        var getParamList,
        URL = '.' + request.url,
        gameName = '',
        params = {};
        // console.log('request URL: ', request.url);
        filePath = URL.split('?')[0];
        // getParamList = getParamList.split('&');

        if(filePath == './'){
            filePath = './index.html';  
        }

        var extName = path.extname(filePath);
        var contentType = 'text/html';
        switch(extName){
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case '.json':
                contentType = 'application/json';
                break;
            case '.png':
                contentType = 'image/png';
                break;
            case '.jpg':
                contentType = 'image/jpg';
                break;
            case '.wav':
                contentType = 'audio/wav';
                break;
        }

        fs.readFile(filePath, function(error, content){
            if(error){

            }else{
                response.writeHead(200, {'Content-Type': contentType});
                response.end(content, 'utf-8');
            }
        });
    });

    var connectToPort = function(port){
        io = require('socket.io').listen(server);
        server.listen(process.env.PORT || port || 8081);
        console.log('Server is running at 8081');
    }

    var onSocketConnection = function(socket){
        // console.log('player connected: ' + socket);
        // console.log(gameApp.mediator);
        socket.on("disconnect", onSocketDisconnection);
        _mediator.publish('onSocketConnection', socket);
    }

    var onSocketDisconnection = function(socket){
        _mediator.publish('onSocketDisconnection', {socket: this});
    }

    var addEvents = function(){
        // console.log('adding events onSocketConnection');
        io.sockets.on('connection', onSocketConnection);
    }

    this.addSubscribers();

    return {
        connectToPort: connectToPort,
        addEvents: addEvents
    }
}

var p = Communicator.prototype;

p.addSubscribers = function(){
    _mediator.subscribe('sendToSelf', this.sendToSelf.bind(this));
    _mediator.subscribe('sendToOthers', this.sendToOthers.bind(this));
    _mediator.subscribe('sendToAll', this.sendToAll.bind(this));
};

p.sendToSelf = function(data){
    // console.log('received send to self: ', data);
    data.socket.emit(data.event, data.parameters);
}

p.sendToOthers = function(data){
    data.socket.broadcast.emit(data.event, data.parameters);
}

p.sendToAll = function(data){
    this.sendToSelf(data);
    this.sendToOthers(data);
}

module.exports = Communicator;