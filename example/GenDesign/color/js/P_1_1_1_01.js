let stepX, stepY;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, width, height, 100);
    noStroke();
}

function draw() {
    stepX = mouseX;
    stepY = mouseY;

    stepX = constrain(stepX,2,10000);
    stepY = constrain(stepY,2,10000);
    for (let currentGridY = 0; currentGridY < height; currentGridY += stepY) {
        for (let currentGridX = 0; currentGridX < width; currentGridX += stepX) {
            fill(currentGridX, height -currentGridY, 100 );
            rect(currentGridX, currentGridY, stepX, stepY);
        }
    }

}

