var ONLINEGAMING = ONLINEGAMING || {};

ONLINEGAMING.gameApp = function(){
    this.mediator = new Mediator();
    
    this.communicator = new ONLINEGAMING.Communicator();
    this.communicator.connectToSocket();
    // this.communicator.addEvents();

    console.log(this.communicator);


};

function bodyOnLoad(){ 
    console.log('kaushik');
    gameApp = new ONLINEGAMING.gameApp();
}