var progress = document.querySelector('.volumn-progress');
var progress_btn = document.querySelector('.volumn-btn');

var mousedownID = -1;
function mousedown(event) {
    console.log('mousedown');
    whilemousedown(event);
}
function mouseup(event) {
    console.log('mouse up');
    clearInterval(mousedownID);
}
function whilemousedown(e) {
    mousedownID = window.setInterval(function() {
        console.log(e.clientX - progress.getBoundingClientRect().left);
        document.querySelector('.volumn-btn').style.left = getCursorPosition(e)[0] - progress.getBoundingClientRect().left;
    }, 100);
}

//Assign events
progress_btn.addEventListener("mousedown", mousedown);
progress_btn.addEventListener("mouseup", mouseup);
progress.addEventListener("mouseout", mouseup);

function getCursorPosition(e) {
    var posx = 0;
    var posy = 0;
    if (!e) var e = window.event;
    if (e.pageX || e.pageY)     {
        posx = e.pageX- document.documentElement.scrollLeft- document.body.scrollLeft;
        posy = e.pageY- document.documentElement.scrollTop- document.body.scrollTop;
    }
    else if (e.clientX || e.clientY)     {//for fucking IE
        posx = e.clientX ;//+ document.body.scrollLeft+ document.documentElement.scrollLeft;
        posy = e.clientY ;//+ document.body.scrollTop + document.documentElement.scrollTop;
    }

    return [posx,posy];//posx posy就是游標的X,Y值了
}