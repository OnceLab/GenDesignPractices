function setup() {
    createCanvas(windowWidth, windowHeight);
    //noCursor();

    colorMode(HSB, 360, 100, 100);
    rectMode(CENTER);
    noStroke();
}

function draw() {
    background(mouseY/height * 360, 100, 100);

    fill(360 - mouseY/height * 360, 100, 100);

    rect(width / 2,height / 2,mouseX, mouseX);
}
