
var items = document.querySelectorAll(".item");
var points = document.querySelectorAll(".point")
var left = document.getElementById("leftBtn");
var right = document.getElementById("rightBtn");
var all = document.querySelector(".wrap")
var index = 0;
var time = 0;



var clearActive = function () {
    for (i = 0; i < items.length; i++) {
        items[i].className = 'item';
    }
    for (j = 0; j < points.length; j++) {
        points[j].className = 'point';
    }
}

var goIndex = function () {
    clearActive();
    items[index].className = 'item active';
    points[index].className = 'point active'
}
var goLeft = function () {
    if (index == 0) {
        index = 1;
    } else {
        index--;
    }
    goIndex();
}

var goRight = function () {
    if (index < 1) {
        index++;
    } else {
        index = 0;
    }
    goIndex();
}


left.addEventListener('click', function () {
    goLeft();
    time = 0;
})

right.addEventListener('click', function () {
    goRight();
    time = 0;
})

for(i = 0;i < points.length;i++){
    points[i].addEventListener('click',function(){
        var pointIndex = this.getAttribute('data-index')
        index = pointIndex;
        goIndex();
        time = 0;
    })
}
var timer;
function play(){
 timer = setInterval(() => {
    time ++;
    if(time == 8 ){
        goRight();
        time = 0;
    }    
},100)
}
play();
all.onmousemove = function(){
    clearInterval(timer)
}
all.onmouseleave = function(){
    play();
}


