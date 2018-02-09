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
        this.draw();
        break;
      case 39:
        this.player.moveRight();
        this.draw();
        break;
      case 32:
        this.player.jump();
        this.draw();
        break;
      case 40:
        this.player.dash();
        this.draw();
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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map