var x = [-20, 20];

function setup() {
  createCanvas(320, 240);
  println(x);
}

function draw() {
  background(0);
  
  x[0]++;
  x[1]++;

  ellipse(x[0], 20, 20);
  ellipse(x[1], 50, 20);
}
