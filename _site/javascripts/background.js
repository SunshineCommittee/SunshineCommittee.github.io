var bg = $("#bg");

function resizeBackground() {
    bg.height($(body).height() + $(head).height());
    console.log("resizing");
}

$(window).scroll(resizeBackground);
resizeBackground();