var x, y, p;
var pa = [];

function setup(){
  createCanvas(640, 480);
  pa[0] = new Particle(width/2, height/2);
}

function draw() {
  background(100);

  for(var i = 0; i < pa.length; i++) {
    pa[i].move();
    pa[i].display();
  }
}

function mouseReleased() {
    println(p);
    pa[pa.length] = new Particle(mouseX, mouseY);
}

function Particle(tempX, tempY) {
  this.posX = tempX;
  this.posY = tempY;

  // var vx = 10;
  // var vy = -10;
  this.vx = random(-10, 10);
  this.vy = random(-15, 15);

  var particleSize = 10;
  var gravity = 1;

  this.move = function() {
    this.posX += this.vx;
    this.posY += this.vy;
    this.vy += gravity;

    if(this.posY > height) {
      this.vy *= -0.6;
      this.vx *= 0.75;
      this.posY = height - particleSize;
    }

  };

  this.display = function() {
    ellipse(this.posX, this.posY, particleSize);
  };

}
