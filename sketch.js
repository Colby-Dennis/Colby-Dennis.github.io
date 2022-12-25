function setup() {
    createCanvas(400,400);
}

function draw() {
    background(220);
    let x = mouseX;
    let y = mouseY;
    ellipse(x,y,80,80);
}