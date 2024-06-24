
    var ball;
function setup() {
    createCanvas(900, 600);
    background(173,249,171);
   
    ball = new Ball();
    
    
}
function draw() {
    
   ball.drawball();
   ball.move();
   ball.handleedge();
    
}

class Ball{

    constructor(){
        this.location = new createVector(0,height/2);
        this.velocity = new createVector(0,0);//let ball move horizontal
        this.acceleration = new createVector(0.03,0);
        this.maxVelocity = 10;
    }
    drawball(){
        background(173,249,171);
        fill(125);
        ellipse(this.location.x,this.location.y,40,40);
    }

    move(){
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxVelocity);
        this.location.add(this.velocity);
    }
 handleedge(){
    if (this.location.x<0)  this.location.x=width;
    else if (this.location.x>width) this.location.x = 0 ; 
 }
  
}