function setup() {
     createCanvas(500,500);
     
}
function draw() {
     background(255,255,255);
     fill(255,222,173); //,first shape & inside color
     strokeWeight(2); //border weight
     stroke(255,204,100); //border
     ellipse(180, height/2, 60, 60); //location shape
     fill('#FCD12A');
     ellipse(width/2, height/2, 75, 80); // center of the flower
     
     fill('#CC7722');

     
    
     fill(255,222,173);
     ellipse(195,190,60,60);
     
     ellipse(255,176,60,60);
     
     ellipse(310,210,60,60);

     ellipse(310,210,60,60);

     ellipse(315,272,60,60);
     
     ellipse(205,309,60,60);

     ellipse(270,320,60,60); // CIRCLE

     stroke(255,255,255);
     fill('green');
     rect(235,350,20,65,55,88); //ROOT
     
     fill('brown')
     rect(170, 400, 155, 20);
     square(215,420, 60);
     
    
      
  /*  translate(190,-80);
    beginShape();
    stroke('#A99435');
    strokeWeight(2);
    fill("yellow");
    vertex(200,50);
    vertex(250,150);
    vertex(350,150);
    vertex(275,225);
    vertex(300,325);
    vertex(200,275);
    vertex(100,325);
    vertex(125,225);
    vertex(50,150);
    vertex(150,150);
    endShape(CLOSE);*/
  
    translate(158,385);
    triangle(30, 75, 58,115, 86, 75);

    translate(56,-0);
    triangle(30, 75, 58,115, 86, 75);
     
    translate(85,15);
    fill("purple");
    square(30, 20, 55, 20, 15, 10, 5);

    translate(-150,-160);
    stroke('#715c1b');
    strokeWeight(10);
    point(95, -15);
    point(110, -15);
    point(70, 20);
    point(80, 30);
    point(90, 35);
    point(100, 40);
    point(110, 40);
    point(120, 40);
    point(130, 20);
    point(125, 30);
    
    




}

