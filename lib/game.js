const Player = require('./player');
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const newGame = new Game(ctx);
  newGame.draw();
  // const zeroImage = new Image();
  // zeroImage.src = "/imgs/zerox4sheet.gif";
  // ctx.drawImage(zeroImage, 0, 0, 100, 100);

});

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.player = new Player(ctx);
    this.movement = this.movement.bind(this);
    this.setup();
  }

  setup() {
    document.addEventListener("keydown", this.movement);
  }

  movement(e) {
    switch(e.keyCode) {
      case 37:
        this.player.moveLeft();
        break;
      case 39:
        this.player.moveRight();
        break;
      case 32:
        this.player.jump();
        break;
      case 40:
        this.player.dash();
        break;
    }
  }

  draw() {
    this.ctx.clearRect(0,0,450,350);
    this.player.draw();
  }
}
