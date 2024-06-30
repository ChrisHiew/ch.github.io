

class Frog extends rectangle{
     constructor(x, y, w,frog1) {
          super(x, y, w, w);     
          this.attachedLog = null; // Track the log the frog is attached to
          this.frog1=frog1;
     }
     update() {
      if (this.attachedLog) {
        this.x += this.attachedLog.speed;
        
      }
    }
     show(){

        if (this.frog1) {
          console.log('in this.frog1');
          image(this.frog1, this.x, this.y, this.w, this.w); // Display frog1 image
        } else {
          console.log('in else');
          rect(this.x, this.y, this.w, this.w); // Display a rectangle if frog1 is not provided
        }
}

      move(xdir, ydir, grid) {
        let newX = this.x + xdir * grid;
        let newY = this.y + ydir * grid;
                
      // Check boundaries
      if (newX >= 0 && newX <= width - this.w) {
          this.x = newX;
       }
      if (newY >= 0 && newY <= height - this.h) {
          this.y = newY;
       }
      // this.attachedLog = null; // Detach from log when moving
          this.detachFromLog();
        }
                  
        attachToLog(log) {
          this.attachedLog = log;
        }

        detachFromLog() {
          this.attachedLog = null;
        }  
}
