class rectangle {
  constructor(x, y, w, h) {
    this.x = x; // right x + w
    this.y = y; // top
    this.w = w;
    this.h = h; // bottom y + h
    
  }

  display() {
    rect(this.x, this.y, this.w, this.h);
  }

  intersects(other) {
    return !(this.x + this.w < other.x ||
             this.x >= other.x + other.w ||
             this.y >= other.y + other.h ||
             this.y + this.h <= other.y);
  }
  
}


let img;
let img0;let img1;let img4;let img5;
let log;let log1;let log2;let log3;let frog1;
let froggy;
let score = 0; // Initialize score variable
let froglives = 5; // Number of lives for the frog
var frog;
var grid = 50;
var cars = [];
var logs = [];

function preload() {

  froggy = loadImage('f.png');
  frog1 = loadImage('image(frog)1.png'); 
  img0 = loadImage('image(car2)0.png'); 
  img1 = loadImage('image(car2)1.png'); 
  img = loadImage('image(car2)3.png'); 
  img4 = loadImage('image(car2)4.png'); 
  img5 = loadImage('image(car2)5.png'); 
  log = loadImage('image(turtle).png'); 
  log1 = loadImage('image(short log).png'); 
  log2 = loadImage('image(turtle)2.png'); 
  log3 = loadImage('image(log2).png'); 
  log4 = loadImage('image(log).png');

}

function resetGame() {
  frog = new Frog(width / 2 - grid, height - grid,45,frog1);
  loop(); // Restart the draw loop if it was stopped
}

function gameOver() {
  textSize(32);
  fill(255);
  textAlign(CENTER, CENTER);
  text("GAME OVER\nScore: ",score, width / 2, height / 2);
  noLoop();

  setTimeout(() => {
    resetGame();
     score = 0; // Reset score
    froglives = 5; // Reset lives
  }, 2000);
}

function setup() {
  createCanvas(1280, 720);
  resetGame();
 
  // row1 （speed is - mean is move left)
  for (let i = 0; i < 2; i++) {
    cars.push(new Car(i * 300, height - grid * 3, 100, 50, -4,img1));
  }
  // row2 
  for (let i = 0; i < 2; i++) {
    cars.push(new Car(i * 350, height - grid * 4, grid * 2, grid, 1.5, img));
  }
  // row3
  for (let i = 0; i < 4; i++) {
    cars.push(new Car(i * 300 + 150, height - grid * 5, grid, grid, -1.5,img0));
  }
  // row4
  for (let i = 0; i < 2; i++) {
    cars.push(new Car(i * 175, height - grid * 6, grid, grid, 2,img5));
  }

  // row5
  for (let i = 0; i < 2; i++) {
    cars.push(new Car(i * 350, height - grid * 7, grid*2, grid, -2.5,img4));
  }
 // row7 Logs
  for (let i = 0; i < 4; i++) {
    logs.push(new Log(i * 150, height - grid * 9, grid, grid, -0.5,log));
   }
  // row8 Logs
  for (let i = 0; i < 5; i++) {
    logs.push(new Log(i * 150, height - grid * 10, grid, grid, 0.5,log1));
  }
  // row9 Logs
  for (let i = 0; i < 5; i++) {
    logs.push(new Log(i * 150, height - grid * 11, grid, grid, -0.5,log2));
  }
   // row10 Logs
   for (let i = 0; i < 2; i++) {
    logs.push(new Log(i * 350, height - grid * 12, grid*5, grid, 2.5,log3));
  }
   // row11 Logs
   for (let i = 0; i < 3; i++) {
    logs.push(new Log(i * 350, height - grid * 13, grid*5, grid, -2.5,log4));
  }
}


function draw() {

  background(0);
  fill('#a7a7d5');
  // starting 
  rect(0, height - grid*2, width, grid);
  rect(0, height - grid * 8, width, grid);
  rect(0, 0, width, grid);
 
  displayfroglives();

    fill('#000056');
    rect(0, height - grid * 13, width, grid * 5); //Cover the background of the area where the log is located
  
  for (let car of cars) {
    car.update();
    car.show();
  }

  for (let log of logs) {
    log.update();
    log.show();
  }

  frog.update(); // Update frog position if attached to a log
  frog.show();

// Check for car collisions
  for (let car of cars) {
    if (frog.intersects(car)) {

      froglives--;
      if (froglives <= 0) {
        gameOver(); // End game if no lives left
        return; // Exit draw loop
      } else {
        resetGame(); // Reset frog position
      }
  }

  // Check for log interaction in row 7
  if (frog.y < height - grid * 8 && frog.y > grid * 1) {
    let onLog = false;
    for (let log of logs) {
      if (frog.intersects(log)) {
        onLog = true;
        frog.attachToLog(log); // Attach frog to log
        break;
      }
    }
 //   frog.show();
    if (!onLog) {
      resetGame();
       return;
    }
    }

   // Check if frog has reached the winning position
   if (frog.y < grid) {
    score++; // Increase score
    resetGame(); // Reset frog position
  }
   // Display score on the screen
   textSize(24);
   fill(255);
   text('Score: ' + score, 20, 30,);
 }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    frog.move(-1, 0, grid);
  } else if (keyCode === RIGHT_ARROW) {
    frog.move(1, 0, grid);
  } else if (keyCode === UP_ARROW) {
    frog.move(0, -1, grid);
  } else if (keyCode === DOWN_ARROW) {
    frog.move(0, 1, grid);
  }
}
function displayfroglives() {
  let ellipseSize = 65; // Diameter of each ellipse representing a life
  let spacing = 25; // Spacing between ellipses
  
    for (let i = 0; i < froglives; i++) {
      let x = 30 + i * spacing;
      let y = height - 10;
      image(froggy, x - ellipseSize / 2, y - ellipseSize / 2, ellipseSize, ellipseSize); // Draw froggy image in ellipse
    }
}
