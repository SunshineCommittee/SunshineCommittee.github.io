var bg = $("#bg");

function resizeBackground() {
    bg.height($(document).height());
    console.log("resizing");
}

$(window).resize(resizeBackground);
$(document).resize(resizeBackground);
resizeBackground();