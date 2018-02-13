var bg = $("#bg");

function resizeBackground() {
    bg.height($(window).height() + 60);
    console.log("resizing");
}

$(window).scroll(resizeBackground);
resizeBackground();