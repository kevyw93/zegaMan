class Player {
  constructor(ctx){
    this.ctx = ctx;
    this.x = 0;
    this.y = 250;
  }

  draw() {
    let zeroImage = new Image();
    zeroImage.src = "./imgs/zerox4sheet.gif";
    this.ctx.drawImage(zeroImage, 50, 50, 100, 100);
    // this.ctx.fillStyle = "red";
    // this.ctx.fillRect(this.x,this.y,100,100);
  }

  moveLeft() {
    this.x -= 10;
  }

  moveRight() {
    this.x += 10;
  }

  dash() {
    this.x += 20;
  }

  jump() {
    this.y -= 10;
  }

}

module.exports = Player;
