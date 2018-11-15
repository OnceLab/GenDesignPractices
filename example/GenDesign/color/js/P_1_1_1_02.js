function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    background(255);
    angleMode(DEGREES);
    colorMode(HSB,360,100,100);
}

let segments ;
let radius ;

function draw() {
    background(255);
    segments = constrain(mouseY,3,720);
    radius = constrain(mouseX,100,500);

    let step = 360 / segments;
    push();
        translate(width/2, height/2)
        let color = 0;
        for (let i = 0; i < segments; i++) {
            color += step;
            fill(color,100,100);
            //console.log(color)
            beginShape();
            vertex(0, 0);
            vertex(radius, 0);
            vertex(radius * cos(step), radius * sin(step));
            rotate(step);
            endShape(CLOSE);
        }
    pop()
}