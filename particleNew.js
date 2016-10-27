var pa = [];

function setup() {
  createCanvas(640, 480);
  pa[0] = new Particle(width/2, height/2);
}

function draw() {
  background(0);
  for(var i = 0; i < pa.length; i++){
    pa[i].display();
    pa[i].move();
  }
}

function mouseReleased(){

}

function Particle(tempX, tempY){
  this.posX = tempX;
  this.posY = tempY;
  var particleSize = 10;

  this.vx = random(-10, 10);
  this.vy = random(-15, 15);
  var gravity = 1;

  this.move = function() {
    this.posX += this.vx;
    this.posY += this.vy;

  };

  this.display = function() {
    ellipse(this.posX, this.posY, particleSize);
  };

}
