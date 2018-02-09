/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Player = __webpack_require__(1);
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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map