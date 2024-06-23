let size = 121;
let lineLength = 125;
let lineLength2 = 80;
let lineLength3 = 130;
let radius = 50;
let pic;
let secondImage;
let switchTime = 2000; // Time interval to switch backgrounds (in milliseconds)
let currentBackground = 0;

// Define shape objects
let circle, cross, diamond, fourCircles, plus, square, bottomSemicircle, topSemicircle;

function preload() {
  // Load the image to be displayed at the top-left corner
  pic = loadImage('crescendo.png');
  secondImage = loadImage('crescendo2.png');
}

function setup() {
  createCanvas(1280, 720);
  background(0);
  strokeWeight(5);
  noFill();

  // Initialize shape objects
  circle = new Circle(createVector(120, 35), 105);
  cross = new Cross(createVector(300, 0), createVector(400, 100));
  diamond = new Diamond(createVector(230, 150), 50, 50);
  fourCircles = new Four(createVector(350, 280), 25);
  plus = new Plus(createVector(-15, 350), 90);
  square = new Square(createVector(230, 350), 80);
  bottomSemicircle = new Semicircle(createVector(100, 200), 100, "bottom"); 
  topSemicircle = new Semicircle(createVector(100, 300), 100, "top"); 
}

function draw() {

  let currentTime = millis(); // Get the number of milliseconds since the program started

  // Switch background every switchTime milliseconds
  if (currentTime % (switchTime * 2) < switchTime) {
    currentBackground = 0;
  } else {
    currentBackground = 1;
  }

  if (currentBackground == 0) {
  background(0); // Set background to black
  // Draw the shapes with adjusted positions
  translate(width / 2, height / 2);
  drawRectWithCircle(-285, -280);  // Top left
  drawRectWithCircle(-285, 30);    // Bottom left
  drawLinesAndXShape(-310, -90);   // Top left
  drawLinesAndXShape(-310, 230);   // Bottom left

  rotate(-HALF_PI);
  rotate(-HALF_PI);

  drawLinesAndXShape(-230, 225);   // Top right
  drawLinesAndXShape(-230, -95);   // Bottom right
  drawRectWithCircle(-207, 40);    // Middle right
  drawRectWithCircle(-207, -280);  // Bottom right

  // Draw the arcs with adjusted positions
  drawShape(-121, 195);   // Top left
  drawShape(-121, -115);  // Bottom left curve
  rotate(-HALF_PI);
  rotate(-HALF_PI);
  drawShape(-200, -125);  // Middle right
  drawShape(-200, 195);   // Bottom right below

  // Draw the  squares with one side open
  drawOpenSquare(-170, -305);  // middle
  drawOpenSquare(-170, 10);    // Bottom middle
  
  // Draw the arc shapes at the bottom
  drawArcShape(-743, -237);      // bottom middle
  drawArcShape(-743, -555);      // middle

  // Draw the new squares with one side open
  drawSquare(-335, 8);  // Bottom middle
  drawSquare(-335, -310); // Top middle 

  // Draw the new arc shapes at the bottom
  drawArc(-613, -473);      //  middle
  drawArc(-613, -155);      //  bottom middle

  // Draw the line with adjusted position
  drawLine(-25, -53); // Example with no additional offset
  drawLine(-25, 265); // Example with no additional offset

  drawLine2(-155,-180);
  drawLine2(-155,135);

  drawC(-135,-65); //Top middle 
  drawC(-5,320); //middle 

  drawc(-200,500); //top middle 
  
  drawc(150,-180); // bottommiddle 

    stroke(255); // Set stroke color to white
    image(secondImage, -480, -595, 150, 150);

  } else if (currentBackground == 1) {
  background(255); // Set background to white
  translate(width / 3, height / 3);
  circle.drawCircle();
  cross.drawCross();
  diamond.drawDiamond();
  fourCircles.drawFour();
  plus.drawPlus();
  square.drawSquare();
  bottomSemicircle.drawSemicircle(); // Draw bottom semicircle
  topSemicircle.drawSemicircle(); // Draw top semicircle

    stroke(0); // Set stroke color to black
    image(pic, -455, -235, 250, 150);
  }

  
}


class Circle {
  constructor(position, diameter) {
    this.position = position;
    this.diameter = diameter;
  }

  drawCircle() {
    ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
  }
}

class Cross {
  constructor(startPos, endPos) {
    this.startPos = startPos;
    this.endPos = endPos;
  }

  drawCross() {
    line(this.startPos.x, this.startPos.y, this.endPos.x, this.endPos.y);
    line(this.endPos.x, this.startPos.y, this.startPos.x, this.endPos.y);
  }
}

class Diamond {
  constructor(position, w, h) {
    this.position = position;
    this.w = w;
    this.h = h;
  }

  drawDiamond() {
    beginShape();
    vertex(this.position.x, this.position.y - this.h);
    vertex(this.position.x + this.w, this.position.y);
    vertex(this.position.x, this.position.y + this.h);
    vertex(this.position.x - this.w, this.position.y);
    endShape(CLOSE);
  }
}

class Four {
  constructor(position, r) {
    this.position = position;
    this.r = r;
  }

  drawFour() {
    for (let i = -1; i <= 1; i += 2) {
      for (let j = -1; j <= 1; j += 2) {
        ellipse(this.position.x + i * this.r, this.position.y + j * this.r, this.r * 2, this.r * 2);
      }
    }
  }
}

class Plus {
  constructor(position, s) {
    this.position = position;
    this.s = s;
  }

  drawPlus() {
    line(this.position.x - this.s / 2, this.position.y, this.position.x + this.s / 2, this.position.y);
    line(this.position.x, this.position.y - this.s / 2, this.position.x, this.position.y + this.s / 2);
  }
}

class Square {
  constructor(position, size) {
    this.position = position;
    this.size = size;
  }

  drawSquare() {
    rect(this.position.x, this.position.y, this.size, this.size);
  }
}

class Semicircle {
  constructor(position, diameter, type) {
    this.position = position;
    this.diameter = diameter;
    this.type = type; // "top" or "bottom"
  }

  drawSemicircle() {
    if (this.type === "bottom") {
      arc(this.position.x, this.position.y, this.diameter, this.diameter, 0, PI, CHORD); // Bottom semicircle
    } else if (this.type === "top") {
      arc(this.position.x, this.position.y, this.diameter, this.diameter, -PI, 0, CHORD); // Top semicircle
    }
  }
}
function drawRectWithCircle(centerX, centerY) {
  rectMode(CENTER);
 
  let rectCenter = createVector(centerX, centerY);
  let rectWidth = 100;  // Adjusted rectangle width
  let rectHeight = 60;  // Adjusted rectangle height
  rect(rectCenter.x, rectCenter.y, rectWidth, rectHeight);

  fill(0);
  let circleOffsetX = 60;  // Adjusted circle offset
  let circleDiameter = 60; // Adjusted circle diameter
  let circleCenter = createVector(rectCenter.x + circleOffsetX, rectCenter.y);
  ellipse(circleCenter.x, circleCenter.y, circleDiameter, circleDiameter);
}

function drawLinesAndXShape(xOffset, yOffset) {
  let center = createVector(-50 + xOffset, -50 + yOffset);
  let rightEnd = createVector(lineLength - 50 + xOffset, -50 + yOffset);
  let bottomEnd = createVector(lineLength - 50 + xOffset, lineLength - 50 + yOffset);

  line(center.x, center.y, rightEnd.x, rightEnd.y);
  line(rightEnd.x, rightEnd.y, bottomEnd.x, bottomEnd.y);
  line(center.x, lineLength - 50 + yOffset, bottomEnd.x, bottomEnd.y);

  let xShapePosition = createVector(11 + xOffset, 10 + yOffset);
  drawXShape(xShapePosition, size);
}

function drawXShape(position, size) {
  let halfSize = 60;
  let topLeft = position.copy().sub(createVector(halfSize, halfSize));
  let bottomRight = position.copy().add(createVector(halfSize, halfSize));

  line(topLeft.x, topLeft.y, bottomRight.x, bottomRight.y);
  line(bottomRight.x, topLeft.y, topLeft.x, bottomRight.y);
}

function drawShape(xOffset, yOffset) {
  push();

  translate(width / 3 + xOffset, height / 34 + yOffset);
  rotate(-HALF_PI);
  rotate(HALF_PI);

  let center = createVector(-80, -50);
  let rightEnd = createVector(lineLength2 - 50, -50);
  let bottomEnd = createVector(lineLength2 - 50, lineLength2 - 50);

  line(center.x, center.y, rightEnd.x, rightEnd.y);
  line(rightEnd.x, rightEnd.y, bottomEnd.x, bottomEnd.y);
  line(center.x, lineLength2 - 50, bottomEnd.x, bottomEnd.y);

  rotate(-HALF_PI);
  let arcX = 10;
  let arcY = -75;
  let arcWidth = 80;
  let arcHeight = 80;
  let arcStartAngle = PI;
  let arcEndAngle = 0;

  arc(arcX, arcY, arcWidth, arcHeight, arcStartAngle, arcEndAngle);

  pop();
}

function drawOpenSquare(xOffset, yOffset) {
  let x1 = xOffset; // X coordinate of top-left corner
  let y1 = yOffset; // Y coordinate of top-left corner
  let size = 132;   

  // Draw the square with one side open
  line(x1, y1, x1 + size, y1);             // Top side
  line(x1 + size, y1, x1 + size, y1 + size); // Right side
  line(x1, y1 + size, x1, y1);             // Left side
}

function drawArcShape(offsetX, offsetY) {
  let centerX = width / 2 + offsetX;
  let centerY = height / 2 + offsetY;
  let radius =67;
  noFill();
  // Draw the original arc (0 to PI radians)
  arc(centerX, centerY, radius * 2, radius * 2, 0, PI);

  // Translate to the center of the arc
  push();
  translate(centerX, centerY);
  
  // Rotate by 180 degrees (PI radians)
  rotate(PI);
  
  // Draw the rotated arc (PI to 2*PI radians)
  arc(0, 0, radius * 2, radius * 2, PI, TWO_PI);
  pop();
}

function drawSquare(xOffset, yOffset) {
  push();
  translate(width / 3 + xOffset, height / 4 + yOffset);
  
  // Rotate to the right 
  rotate(HALF_PI); // Rotate by 90 degrees (right)
  
  // Draw lines from the center
  let center = createVector(0, 0);
  let rightEnd = createVector(lineLength3, 0);
  let bottomEnd = createVector(lineLength3, lineLength3);
  
  // Draw lines 
  line(center.x, center.y, rightEnd.x, rightEnd.y); // Right
  line(rightEnd.x, rightEnd.y, bottomEnd.x, bottomEnd.y); // Down
  line(center.x, lineLength3, bottomEnd.x, bottomEnd.y); // Bottom

  pop();
}

function drawArc(offsetX, offsetY) {
  push();
  let centerX = width / 2 + offsetX;
  let centerY = height / 2 + offsetY;
  let radius = 65;
  noFill();
  
  translate(centerX, centerY);
  rotate(-HALF_PI);
  rotate(-HALF_PI);
  // Draw the original arc (0 to PI radians)
  arc(0, 0, radius * 2, radius * 2, 0, PI);

  // Rotate by 180 degrees (PI radians)
  rotate(PI);
  
  // Draw the rotated arc (PI to 2*PI radians)
  arc(0, 0, radius * 2, radius * 2, PI, TWO_PI);
  rotate(HALF_PI); // Rotate by 90 degrees (right)
  rotate(HALF_PI); 
  
  
  pop();
}

function drawLine(offsetX, offsetY) {
  
  push();
  // Adjust the starting and ending coordinates for the line
  let startX = 50 + offsetX;  
  let startY = 50 + offsetY; 
  let endX = 50 + offsetX;    
  let endY = -120 + offsetY;  

  line(startX, startY, endX, endY); // Draw the line
  pop();
}
function drawLine2(offsetX, offsetY) {
  
  push();
  // Adjust the starting and ending coordinates for the line
  let startX = 50 + offsetX;  
  let startY = 50 + offsetY;  
  let endX = 50 + offsetX;    
  let endY = -120 + offsetY;  

  line(startX, startY, endX, endY); // Draw the line
  pop();
}

function drawC(posX, posY) {
  noFill();
  
  // Translate to the desired position
  translate(posX, posY);
  
  let radius = 55; 
  let startAngle = PI + HALF_PI; // Start angle (PI + 90 degrees)
  let endAngle = TWO_PI + HALF_PI; // End angle (360 degrees + 90 degrees)

  // Draw the arc
  arc(0, 0, radius * 2, radius * 2, startAngle, endAngle);
}

function drawc(centerX, centerY) {
  rotate(-HALF_PI);
  rotate(-HALF_PI);
  // Draw the "C" shape using arc()
  let radius = 60; 
  let startAngle = PI + HALF_PI; 
  let endAngle = TWO_PI + HALF_PI; 

  noFill();
  arc(centerX, centerY, radius * 2, radius * 2, startAngle, endAngle);
}


