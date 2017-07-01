var ONLINEGAMING = ONLINEGAMING || {};

ONLINEGAMING.Communicator = function(){
    this.socketURL = window.location.origin;;
    this.socket = '';
    this.connectionStarted = false;
};

var  p = ONLINEGAMING.Communicator.prototype;

p.connectToSocket = function connectToSocket(){
    if(this.connectionStarted) return;
    this.connectionStarted = true;
    var playerName = 'kaushik';
    var userName = 'kaushik14';
    socket = io.connect(this.socketURL, {query: 'name=' + playerName + '&userName=' + userName});
    this.setEventHandlers(socket);
}

p.setEventHandlers = function(socket){
    socket.on('lobbyPlayers', this.publishMessage.bind(this));
};

p.publishMessage = function(data){
    console.log(data);
}