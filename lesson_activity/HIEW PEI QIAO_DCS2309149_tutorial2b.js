
let position;
     x = 100;
     y = 100;
     Xspeed = 5;
     Yspeed = 5;


function setup(){
     createCanvas(640,480);
     background(0);
     stroke(0);
     fill(127);
  

}

function draw(){
    
//variable for position and speed of ball


//move theball according to its speed
x = x + Xspeed;
y = y + Yspeed;

//check for bouncing
if (x > width || x < 0){
     Xspeed = Xspeed * -1;
}

if(y > height || y < 0){
    Yspeed = Yspeed * -1;
}

//draw the ball at the position 
background(0);
circle(x,y,48);
}