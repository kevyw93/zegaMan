class Player {
  constructor(ctx){
    this.ctx = ctx;
    this.x = 0;
    this.y = 150;
    this.srcX = 0;
    this.zeroImage = new Image();
    this.zeroImage.src = "./imgs/zerox4sheet.gif";
    this.frameIndex = 1;
    this.tickCount = 0;
    this.jumpingIndex = 1;
    // this.ticksPerFrame = 2;
  }

  updatePlayer(srcY, which) {
    if (which === 'run') {
      this.frameIndex = this.frameIndex % 8;
      this.srcX = this.frameIndex * 52.5;
      this.srcY = srcY;
    }else if (which === 'jump'){
      this.jumpingIndex = this.jumpingIndex % 8;
      this.srcX = this.jumpingIndex * 52.5;
      this.srcY = srcY;

    }

  }

  draw() {
    // this.tickCount += 1;
    // if (this.tickCount > this.ticksPerFrame) {
    //   this.tickCount = 0;
    // }
    // this.ctx.drawImage(zeroImage, 50, 250, 50, 50);
    // this.ctx.fillStyle = "red";

  }
  runningForward(){
    this.updatePlayer(311, 'run');
    this.ctx.drawImage(this.zeroImage, this.srcX, this.srcY, 55, 60, this.x, this.y, 50, 60);
    this.frameIndex += 1;
  }

  jumping() {
    this.updatePlayer(160, 'jump');
    this.ctx.drawImage(this.zeroImage, this.srcX, this.srcY, 55,60,this.x,this.y,50,60);
    this.jumpingIndex += 1;
  }
  // figure out whats a better method clearing that whole canvas or just that one piece

  moveLeft() {
    this.ctx.clearRect(this.x, this.y, 100,100);
    this.x -= 15;
    this.draw();
  }

  moveRight() {
    this.ctx.clearRect(this.x, this.y, 100,100);
    this.x += 15;
    this.runningForward();
  }

  dash() {
    this.ctx.clearRect(this.x, this.y, 100,100);
    this.x += 30;
    this.runningForward();
  }

  jump() {
    this.ctx.clearRect(this.x, this.y, 100,100);
    this.y -= 15;
    this.jumping();
  }

}

module.exports = Player;
