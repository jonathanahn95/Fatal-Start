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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/fatal_start.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/characters.js":
/*!***************************!*\
  !*** ./lib/characters.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Util = __webpack_require__(/*! ./util */ "./lib/util.js");
const MovingObject = __webpack_require__(/*! ./moving_object */ "./lib/moving_object.js");

const DEFAULTS = {
  COLOR: "#505050",
  RADIUS: 25,
  SPEED: 4
};

const MAIN_CHAR = {
  pos: [150,200],
  vel: [30, 40],
  radius: DEFAULTS.radius,
  color: DEFAULTS.color
};

class Character  {
  constructor(options){
    options = options || MAIN_CHAR;
    this.pos = options.pos;
    this.vel = Util.randomVec(DEFAULTS.speed);
    this.radius = DEFAULTS.radius;
    this.color = DEFAULTS.color;
    this.spriteImage = new Image();
    this.spriteImage.src = "assets/player.jpg";
  }



  randomPosition(){
    const x = 700 * Math.random();
    const y = 500 * Math.random();
    return [x, y];
  }

  draw(ctx) {
     ctx.clearRect(0, 0, 800, 300);
     const sprite = this.spriteImage;
     ctx.drawImage(
       sprite,
       0,
       0,
       150,
       150
     );
   }

  drawChar(ctx) {
    // ctx.fillStyle = 'green';
    // ctx.fillRect(10, 10, 100, 100);
    const canvasEl = document.getElementById('canvas');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let x = 150;
    let y = 550;
    let dx = 2;
    let dy = -2;
    ctx.beginPath();
    ctx.arc( x, y, 20, 0, 2*Math.PI, true);
    // ctx.strokeStyle = "green";
    // ctx.lineWidth = 5;
    // ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fill();
    x += dx;
    y += dy;
  }
}

module.exports = Character;


/***/ }),

/***/ "./lib/fatal_start.js":
/*!****************************!*\
  !*** ./lib/fatal_start.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(/*! ./moving_object */ "./lib/moving_object.js");
const Game = __webpack_require__(/*! ./game */ "./lib/game.js");

const Character = __webpack_require__(/*! ./characters */ "./lib/characters.js");


document.addEventListener("DOMContentLoaded", () => {

  window.MovingObject = MovingObject;
  const canvasEl = document.getElementById('canvas');
  const ctx = canvasEl.getContext('2d');


  const game = new Game(ctx);
//   const mo = new MovingObject(  { pos: [280, 280], vel: [10, 10], radius: 5, color: "#00FF00"}
// );
//   mo.draw(ctx);
  const char = new Character();
  char.drawChar(ctx);

});


/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Util = __webpack_require__(/*! ./util */ "./lib/util.js");
const MovingObject = __webpack_require__(/*! ./moving_object */ "./lib/moving_object.js");
const Character = __webpack_require__(/*! ./characters */ "./lib/characters.js");


class Game {
  constructor(ctx){
    this.characters = [];
    this.bullets = [];
    this.helicopters = [];
    this.NUM_CHAR = 13;
    this.ctx = ctx;
    this.addCharacters();
    // this.initialSetup();
  }

  // initialSetup() {
  //   this.background = new Image();
  //   this.background.src = 'assets/fatal_start.jpg';
  // }

  addCharacters() {
    for (var i = 0; i < this.NUM_CHAR; i++) {
      this.add(new Character());
    }
    this.drawChar();
  }

  drawChar() {
    this.characters.forEach( char => {
      char.draw(this.ctx);
    });
  }

  add(obj){
    if (obj instanceof Character){
      this.characters.push(obj);
    } else if (obj instanceof Bullet) {
      this.bullets.push(obj);
    } else if (obj instanceof Helicopter) {
      this.helicopters.push(obj);
    }
  }
  //
  // moveObjects() {
  //   this.characters.forEach( char => {
  //     char.move();
  //   });
  // }


  //
  // draw(ctx){
  //   ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  // }
}


module.exports = Game;


/***/ }),

/***/ "./lib/moving_object.js":
/*!******************************!*\
  !*** ./lib/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.arc(
      this.pos[0], this.pos[1],this.radius, 0, 2 * Math.PI, true
    );
    ctx.fill();
    // ctx.closePath();
  }

  move(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }
}



module.exports = MovingObject;


/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

const Util = {
  inherits(childClass, parentClass) {
    childClass.prototype = Object.create(parentClass.prototype);
    childClass.prototype.constructor = childClass;
  },
  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }

};


module.exports = Util;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map