function setup() {
     createCanvas(500, 500);
     background(200);
 }
 
 function draw() {
     
    
    fill("yellow");
    beginShape();
    vertex (30,20);
    bezierVertex(80,0,80,75,30,75);
    bezierVertex(50,80,60,25,30,20);
    endShape();

    
    fill("pink");
    beginShape();
    curveVertex(184,191);
    curveVertex(184,191);
    curveVertex(168,119);
    curveVertex(121,117);
    curveVertex(173,173);
    curveVertex(173,173);
    endShape(CLOSE);
     
 }
