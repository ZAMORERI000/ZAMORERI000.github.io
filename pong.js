var ballX = Math.random(1, 1.2);
var ballY = 200;
var context;
var dirX = 1;
var dirY = 1;
var rect1Y = 1;
var rect2Y = 1;
var bscore = 0;
var rscore = 0;

onkeydown = function(key){
    if(key.keyCode == 38){
        paddle2Up();
    }
    if (key.keyCode == 40){
        paddle2Down();
    }
    if (key.keyCode == 87) {
        paddle1Up();
    }
    if (key.keyCode == 83){
        paddle1Down();
    }
}

function ballMove() {
    ballX = ballX + dirX;
    ballY = ballY + dirY;
    if ((ballY + 10) >= 400) {
        dirY = -1;
    }
    if ((ballY - 10) <= 0) {
        dirY = 1;
    }
    if (((ballX + 10) >= 587) && ((ballY + 10) > rect2Y) && ((ballY - 10) < (rect2Y + 75)) && (ballX < 600)) {
        dirX = -1;
    }
    if (((ballX - 10) <= 13) && ((ballY + 10) > rect1Y) && ((ballY - 10) < (rect1Y + 75)) && (ballX > 0)) {
        dirX = 1;
    }
}
function paddle1Up() {
    rect1Y = rect1Y - 10;
    if (rect1Y < 0) {
        rect1Y = 0;
    }
}
function paddle1Down() {
    rect1Y = rect1Y + 10;
    if ((rect1Y + 75) > 400) {
        rect1Y = 325;
    }
}
function paddle2Up() {
    rect2Y = rect2Y - 10;
    if (rect2Y < 0) {
        rect2Y = 0;
    }
}
function paddle2Down() {
    rect2Y = rect2Y + 10;
    if ((rect2Y + 75) > 400) {
        rect2Y = 325;
    }
}
function initCanvas() {
    var canvasObject = document.getElementById('myCanvas');
    context = canvasObject.getContext('2d');
    setInterval(draw, 2);
}
function draw() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, 600, 400);

    context.fillStyle = 'white';
    context.fillRect(5, rect1Y, 13, 75);
    context.fillRect(582, rect2Y, 13, 75);

    context.fillStyle = 'red';
    context.beginPath();
    context.arc(ballX, ballY, 10, 0, 2 * Math.PI);
    context.fill();
    ballMove();
    
    if (ballX>600) {
        ballX = 300;
        ballY = 200;
        bscore += 1;
    }
    if (ballX<0){
        ballX = 300;
        ballY = 200;
        rscore += 1;
    }
    document.getElementById("left-button").innerHTML = bscore;
    document.getElementById("right-button").innerHTML = rscore;
}
