class Log extends Car{

     
     constructor(x, y, w,h,speed,log=null) {
          super(x, y, w, h,speed) ;
          this.speed = speed;
          this.log=log;

          
}
update() {
  this.x += this.speed;
  if (this.speed > 0 && this.x > width + grid) {
    this.x = -this.w - grid;
  } else if (this.speed < 0 && this.x < -grid) {
    this.x = width + grid;
  }
}
show() {
  if (this.log) {
    image(this.log, this.x, this.y, this.w, this.h);
  } else {
    rect(this.x, this.y, this.w, this.h);
  }
}
} 
