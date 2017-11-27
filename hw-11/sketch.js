let bubbles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    let b = new Bubble(width/2, height/2, 10);
    bubbles.push(b);
}

function mouseDragged() {
    let r = random(10, 50);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
}

function draw() {
    background( random(125, 175), random(25, 75), random(75, 125) );
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x + random(-8, 8);
        this.y = this.y + random(-8, 8);
    }

    show() {
        stroke(random (117, 127), random(183, 193), random(27, 43));
        strokeWeight(8);
        fill( random(256), random(256), random(256) );
        ellipse(this.x, this.y, this.r * 2);
    }
}
