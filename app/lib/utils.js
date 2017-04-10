var utils = {
    openIFrame: function(params){
        console.log(params);
        var width = (params !== undefined && params.width !== undefined) ? params.width : 1280;
        var height = (params !== undefined && params.height !== undefined) ? params.height : 720;
        var url = (params !== undefined && params.url !== undefined) ? params.url : "/";
        console.log(url);
        // window.open(url, "theFrame");
        document.getElementById('theFrame').src = url;
        document.getElementById('frameContainer').style.display = 'block';
    }
}