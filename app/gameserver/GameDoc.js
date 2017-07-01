var ONLINEGAMING = ONLINEGAMING || {};

ONLINEGAMING.GameDoc = function(){
    this.lobbyPlayers = {};
    _mediator.subscribe('onSocketConnection', this.onSocketConnection.bind(this));
    _mediator.subscribe('onSocketDisconnection', this.onSocketDisconnection.bind(this));
};

p = ONLINEGAMING.GameDoc.prototype;

p.onSocketConnection = function(socket){
    // console.log('in GameDoc: ', socket);
    this.updateLobbyPlayers(socket);
};

p.onSocketDisconnection = function(data){
    var socket = data.socket;
    // console.log('disconnecting socket: ', data.socket);
    delete this.lobbyPlayers[socket.id];
    console.log('disconnection total plyaer: ', Object.keys(this.lobbyPlayers).length);
}

p.updateLobbyPlayers = function(socket){
    // console.log('socket.id: ', socket.id);
    // console.log('playerName: ', socket.handshake.query.name);
    // console.log('userName: ', socket.handshake.query.userName);
    // console.log(this.lobbyPlayers.hasOwnProperty(socket.id));
    if(!this.lobbyPlayers.hasOwnProperty(socket.id)){
        this.lobbyPlayers[socket.id] = {};
        this.lobbyPlayers[socket.id].name = socket.handshake.query.name;
        this.lobbyPlayers[socket.id].userName = socket.handshake.query.userName;
    }
    console.log(this.lobbyPlayers);
    // console.log('publishing send to self');
    // console.log('connection total plyaer: ', Object.keys(this.lobbyPlayers).length);
    // _mediator.publish('sendToSelf', {socket: socket, event: 'lobbyPlayers', parameters: this.lobbyPlayers});
};

module.exports = ONLINEGAMING.GameDoc;