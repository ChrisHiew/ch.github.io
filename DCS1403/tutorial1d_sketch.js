function setup() {
     createCanvas(500, 500);
     drawGrid();
}
 
function drawGrid() {
    stroke(200);
    fill(120);

    for (let x=0; x < width; x+=40) {
      console.log(x);
      line(x,0,x,height);
      text(x,x+1,12);
    }
    for (let y=0; y < height; y+=40)
    {
      line(0,y,width,y);
      text(y,1,y+12);
    }
}
function draw(){
    fill(200);
    ellipse(100,100,50,50);
}
