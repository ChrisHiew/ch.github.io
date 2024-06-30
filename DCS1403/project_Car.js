class Car extends rectangle{
     constructor(x, y, w,h,speed,img=null) {
          super(x, y, w, h);
          this.speed = speed;
          this.img=img;
     }
update(){
     this.x = this.x + this.speed;

     if (this.speed > 0 && this.x > width+grid){
          this.x = -this.w - grid;
     }
     else if (this.speed < 0 && this.x < -grid){
      this.x = width + grid;
     }
}
show() {
     if (this.img) {
       image(this.img, this.x, this.y, this.w, this.h);
     } else {
       rect(this.x, this.y, this.w, this.h);
     }
   }
}
 
