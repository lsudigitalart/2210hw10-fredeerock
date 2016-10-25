var p = [];

function setup(){
  createCanvas(640, 480);
}

function draw() {
  background(0);
}

function Particle(tempX, tempY) {
  this.posX = tempX;
  this.posY = tempY;

  var vx = 10;
  var vy = -10;
  gravity = 1;

  this.move = function() {
    this.posX += vx;
    this.posY += vy;
    
  };

  this.display = function() {
    ellipse(this.posX, this.posY, 50);
  };

}
