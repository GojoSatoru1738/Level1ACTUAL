var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var timer;
var interval = 1000/60;

var ball = new Ball();

// start in center
ball.x = canvas.width/2;
ball.y = canvas.height/2;

timer = setInterval(animate, interval);

let time = 0;

setInterval(function()
{
    time++;
    document.getElementById("timer").textContent = time
} , 1000)


function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    ball.move();
//ye
    
    if (ball.x > canvas.width) {
        ball.x = canvas.width;
        ball.x -= ball.width/2;
        ball.vx = -ball.vx;
    }

    
    if (ball.x < 0) {
        ball.x = 0;
        ball.x += ball.width/2;
        ball.vx = -ball.vx;
    }

    
    if (ball.y < 0) {
        ball.y = 0;
        ball.y += ball.height/2;
        ball.vy = -ball.vy;
    }

    
    if (ball.y > canvas.height) {
        ball.y = canvas.height;
        ball.y -= ball.height/2;
        ball.vy = -ball.vy;
    }

    ball.draw();
}