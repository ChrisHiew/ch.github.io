var car= new Car("Cool car")
var car2 = new Car ("Hilux");
var car3 = new Car ("City");
var car4 = new Car ("Proton");

function setup() {
     createCanvas(900, 600);
     background(255);
 }
 
 function draw() {
     text (car.getName(),50,50);
 } 
