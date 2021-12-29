let r, g, b;

function setup() {
  let canvas = createCanvas(230, 52);
  canvas.parent('canvas-container');
  frameRate(60);
}

function draw() {
  // background(220);
  let pos = random(0, 400);
  let offset = random(-30, 30);
  r = random(100, 200);
  fill(255);

  push();
  strokeWeight(random(width / 80, width / 40));
  stroke(r, 10, 0);
  line(pos, 0, pos + offset, 200);
  pop();
}
