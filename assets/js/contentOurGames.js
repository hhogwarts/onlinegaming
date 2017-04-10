var gamesList = {
    'games': {
        'tic-tac-toe': {
            'image': 'assets/images/games-lobby/tic-tac-toe.png',
            'class': 'lobby-games',
            'iFrameParams': {'width': 1280, 'height': 720, 'url': 'http://localhost:8081'}
        },
        'dehla-pakad': {
            'image': 'assets/images/games-lobby/dehla-pakad.png',
            'class': 'lobby-games',
            'iFrameParams': {width: 1280, height: 720, url: 'localhost:8080'}
        }
    }
}
function getGamesLobby(){
    var elements = '';
    Object.keys(gamesList.games).forEach(function(gameName){
        console.log(gamesList.games[gameName].iFrameParams);
        elements += '<div id=' + gameName + ' class =' +
        gamesList.games[gameName].class + ' style="background-image: url(' + 
        gamesList.games[gameName].image + ');" onclick=utils.openIFrame(gamesList.games["' + gameName + '"]["iFrameParams"])></div>';
        // document.getElementById('gameName').addEventListener('click', function(){
            // utils.openIFrame(gamesList.games[gameName].iFrameParams);
        // });
    });
    return elements;
};
var contentOurGames = getGamesLobby();