var eventMap = {
    'defaultContainer': 'content',  //name of element
    'defaultContent': content,      //name of variable holding container's content
    'pages': {
        'games': contentOurGames,
        'home': content
    }
}

function addEvents(){
    var container = document.getElementById(eventMap.defaultContainer);
    Object.keys(eventMap.pages).forEach(function(elementId){
        var elem = document.getElementById(elementId);
        elem.addEventListener('click', function(){
            console.log('elementId: ', elementId, eventMap.pages[elementId]);
            container.innerHTML = eventMap.pages[elementId];
            // if(elementId === 'games'){
            //     document.getElementById()
            // }
        });
    });
    container.innerHTML = eventMap.defaultContent;
};

addEvents();