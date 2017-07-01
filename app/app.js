var GAMES_ROOT = './gameserver/'
var ONLINEGAMING = ONLINEGAMING || {};
var Mediator = require("mediator-js").Mediator;
var Communicator = require(GAMES_ROOT + "Communicator.js");
var GameDoc = require(GAMES_ROOT + "GameDoc.js");

ONLINEGAMING.App = function(){
    
    this.communicator = new Communicator();
    this.communicator.connectToPort(8081);
    this.communicator.addEvents();

    this.gameDoc = new GameDoc(); 
};

_mediator = new Mediator();
_gameApp = new ONLINEGAMING.App();