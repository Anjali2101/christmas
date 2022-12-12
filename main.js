function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 50, 50, 550, 400);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(40, 40, 80);
    circle(600, 40, 80);
    circle(40, 440, 80);
    circle(600, 440, 80);
    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(80, 30, 480, 20);
    rect(80, 430, 480, 20);
    rect(30, 80, 20, 320);
    rect(590, 80, 20, 320);
}

function take_snapshot(){
    save('anjali.png');
}

