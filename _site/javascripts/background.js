var sidebar = $("#sidebar");
var content = $("#content-body")

function resizeCols(){
    if(sidebar.height() >= content.height()){
        content.height(sidebar.height());
    }
    else{
        sidebar.height(content.height());
    }
}

var bg = $("#bg");

function resizeBackground() {
    bg.height($(document).height());
    //console.log("resizing");
}

$(window).scroll(resizeBackground);
$(window).resize(resizeBackground);
$(document).resize(resizeBackground);
resizeBackground();