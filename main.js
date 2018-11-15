let canvas;
let points = [];

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index','-10000');
    for (let i = 0; i < constrain(windowWidth/20,50, 200); i++) {
        let dot = new point();
        points.push(dot)
    }
    rectMode(CENTER);


}

function draw() {
    background(255);
    points.forEach(po => {
        po.move();
        points.forEach(po1 => {
            if (dist(po1.location.x, po1.location.y, po.location.x, po.location.y) < 50) {
                stroke(100, 150, 200);
                line(po1.location.x, po1.location.y, po.location.x, po.location.y)
            }
        })
        po.render();
    })
}

class point {
    constructor() {
        this.location = createVector(random(width), random(height));
        this.velocity = createVector(random(-1,1),random(-1, 1));
        this.shape = random(1);
        this.mic = new p5.AudioIn();
    }

    move(){
        this.location.add(this.velocity);
        if (this.location.x > width || this.location.x < 0 || this.location.y > height || this.location.y < 0) {
            this.velocity.mult(-1);
        }
    }

    render(){
        // this.mic.start();
        // let vol = this.mic.getLevel();
        fill(100,150,150);
        if (this.shape < 0.5) {
            noStroke();
            rect(this.location.x, this.location.y, 5, 5);
        } else{
            noStroke();
            ellipse(this.location.x, this.location.y, 5, 5)
        }

    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

}