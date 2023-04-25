var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
var img = new Image();
img.src = "https://www.brainline.org/sites/all/modules/custom/bl_brain/images/brain-lateral.png";
var x = canvas.width / 2 - 75;
var y = canvas.height / 2 - 75;
var vx = (Math.random() * 6 - 2) * 10;
var vy = (Math.random() * 6 - 2) * 10;
var imgWidth = 175;
var imgHeight = 150;
var animationRunning = false;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (window.innerWidth <= 767) {
        const scale = Math.min(canvas.width / (imgWidth * 2), canvas.height / (imgHeight * 2));
        imgWidth = 175 * scale;
        imgHeight = 150 * scale;
    } else {
        imgWidth = 175;
        imgHeight = 150;
    }
}

function animate() {
    if (!animationRunning) {
        return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
        x += vx;
        y += vy;
    if (x < 0 || x + imgWidth > canvas.width) {
        vx = -vx * (Math.random() * 0.5 + 0.5);
    }
    if (y < 0 || y + imgHeight > canvas.height) {
        vy = -vy * (Math.random() * 0.5 + 0.5);
    }
        ctx.drawImage(img, x, y, imgWidth, imgHeight);
        setTimeout(animate, 0);
};

window.addEventListener('resize', resizeCanvas);

resizeCanvas();

function resetAnimation() {
    x = canvas.width / 2 - 75;
    y = canvas.height / 2 - 75;
    vx = (Math.random() * 6 - 2) * 10;
    vy = (Math.random() * 6 - 2) * 10;
    animationRunning = true;
    animate();
}

function isPointInImage(x, y, mouseX, mouseY) {
    return mouseX >= x && mouseX <= x + imgWidth && mouseY >= y && mouseY <= y + imgHeight;
}

canvas.addEventListener("click", function (event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    if (isPointInImage(x, y, mouseX, mouseY)) {
        vx = (Math.random() * 6 - 2) * 10;
        vy = (Math.random() * 6 - 2) * 10;
    }
});

var startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", function () {
    if (!animationRunning) {
        animationRunning = true;
        animate();
    }
});

var stopBtn = document.getElementById("stop-btn");
stopBtn.addEventListener("click", function() {
    animationRunning = false;
});

var resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", function () {
    if (!animationRunning) {
        resetAnimation();
    }
});