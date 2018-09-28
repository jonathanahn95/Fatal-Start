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

/***/ "./lib/bullet.js":
/*!***********************!*\
  !*** ./lib/bullet.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ "./lib/moving_object.js");
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_moving_object__WEBPACK_IMPORTED_MODULE_0__);


class Bullet extends _moving_object__WEBPACK_IMPORTED_MODULE_0___default.a {
    constructor(options){
      options.radius = 5;
      super(options);
    }
}


/* harmony default export */ __webpack_exports__["default"] = (Bullet);


/***/ }),

/***/ "./lib/character.js":
/*!**************************!*\
  !*** ./lib/character.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./lib/util.js");
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ "./lib/moving_object.js");
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_moving_object__WEBPACK_IMPORTED_MODULE_1__);



const DEFAULTS = {
  COLOR: "#505050",
  RADIUS: 25,
  SPEED: 4
};

class Character  {
  constructor(options){
    options = options;
    this.pos = options.pos;
    this.vel = _util__WEBPACK_IMPORTED_MODULE_0__["randomVec"](DEFAULTS.SPEED);
    this.radius = options.radius || DEFAULTS.RADIUS;
    this.color = DEFAULTS.COLOR;
    this.game = options.game;
 //    this.sprite = new Image();
 //   this.sprite.src = 'assets/enemy.jpg';
 //   this.sprite.onload = () => {
 //     this.ctx.drawImage(this.sprite, this.pos[0], this.pos[1]);
 // };

  }

  draw(ctx) {
    // ctx.drawImage(this.sprite, this.pos[0], this.pos[1], 60, 60);
    ctx.beginPath();
    ctx.arc( this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);
    ctx.fillStyle = "blue";
    ctx.fill();
  }

  move(){
    // this.pos = this.game.wrap(this.pos);
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }

  // collideWith(otherObj) {
  //   // default do nothing
  // }
  //
  // // have collided with if distance between their center points is
  // // less then the sum of their radii
  // isCollidedWith(otherObj) {
  //   // debugger
  //   const centerDist = Util.dist(this.pos, otherObj.pos);
  //   return centerDist < (this.radius - otherObj.radius);
  // }
}

/* harmony default export */ __webpack_exports__["default"] = (Character);


/***/ }),

/***/ "./lib/fatal_start.js":
/*!****************************!*\
  !*** ./lib/fatal_start.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ "./lib/moving_object.js");
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_moving_object__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./lib/game.js");
/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_view */ "./lib/game_view.js");
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./character */ "./lib/character.js");






document.addEventListener("DOMContentLoaded", () => {

  window.MovingObject = _moving_object__WEBPACK_IMPORTED_MODULE_0___default.a;
  const canvasEl = document.getElementById('canvas');
  const ctx = canvasEl.getContext('2d');


  // const game = new Game(ctx);
  // const char = new Character();
  // char.drawChar(ctx);

  const game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);
  new _game_view__WEBPACK_IMPORTED_MODULE_2__["default"](game, ctx).start();

});




//   const mo = new MovingObject(  { pos: [280, 280], vel: [10, 10], radius: 5, color: "#00FF00"}
// );
//   mo.draw(ctx);


/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./lib/util.js");
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ "./lib/moving_object.js");
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_moving_object__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./character */ "./lib/character.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./lib/player.js");
/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bullet */ "./lib/bullet.js");






class Game {
  constructor(ctx){
    this.characters = [];
    this.bullets = [];
    this.width = 800;
    this.height = 700;
    this.NUM_CHAR = 4;
    this.ctx = ctx;
    this.initialSetup();
  }

  initialSetup() {
    this.ctx.clearRect(0,0, 800, 700);
    this.addCharacters();
    this.characters.push(new _player__WEBPACK_IMPORTED_MODULE_3__["default"]( {pos: [350, 250]} ));
  }

  addCharacters() {
    for (var i = 0; i < this.NUM_CHAR; i++) {
      this.add(new _character__WEBPACK_IMPORTED_MODULE_2__["default"]( { pos: Object(_util__WEBPACK_IMPORTED_MODULE_0__["randomPosition"])(this.width, this.height) }) );
    }
  }

  add(obj){
    if (obj instanceof _character__WEBPACK_IMPORTED_MODULE_2__["default"]){
      this.characters.push(obj);
    } else if (obj instanceof _bullet__WEBPACK_IMPORTED_MODULE_4__["default"]){
      this.bullets.push(obj);
    }
  }

  draw() {
    this.ctx.clearRect(0,0, 800, 700);
    this.characters.forEach( char => {
      char.draw(this.ctx);
    });
  }

  step() {
    this.characters.forEach( char => {
      char.move();
    });
    // this.checkCollisions();
  }

  addPlayer() {
    const player = new _player__WEBPACK_IMPORTED_MODULE_3__["default"]({
        pos: [50, 175],
        radius: 55,
        game: this
      });

    this.characters.push(player);
    return player;
  }


  wrap(pos) {
    return [
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["wrap"])(pos[0], 800), Object(_util__WEBPACK_IMPORTED_MODULE_0__["wrap"])(pos[1], 700)
    ];
  }

  // checkCollisions() {
  //   const allCharacters = this.characters;
  //   debugger
  //   for (let i = 0; i < allCharacters.length; i++) {
  //     for (let j = 0; j < allCharacters.length; j++) {
  //       const obj1 = allCharacters[i];
  //       const obj2 = allCharacters[j];
  //
  //       if (obj1.isCollidedWith(obj2)) {
  //
  //        const collision = obj1.collideWith(obj2);
  //        if (collision) return;
  //       }
  //     }
  //   }
  // }
  //
  // remove(char) {
  //   if (char instanceof Character){
  //     this.characters.splice(this.characters.indexOf(char), 1);
  //   }
  // }

}

/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./lib/game_view.js":
/*!**************************!*\
  !*** ./lib/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class GameView {
  constructor(game, ctx){
    this.game = game;
    this.ctx = ctx;
  }

  start() {
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
   const timeDelta = time - this.lastTime;
   this.game.step(timeDelta);
   this.game.draw(this.ctx);
   this.lastTime = time;

   // every call to animate requests causes another call to animate
   requestAnimationFrame(this.animate.bind(this));
   }
}



/* harmony default export */ __webpack_exports__["default"] = (GameView);


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

/***/ "./lib/player.js":
/*!***********************!*\
  !*** ./lib/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ "./lib/character.js");

class Player extends _character__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    options.radius = 100;
    super(options);

    this.sprite = new Image();

    this.bindKeyHandlers();
  }

 bindKeyHandlers() {
  key('up', () => {
    this.vel = [0, -3];
    this.move();
  });

  key('down', () => {
    this.vel = [0, 3];
    this.move();
  });

  key('left', () => {
    this.vel = [-3, 0];
    this.move();
  });

  key('right', () => {
    this.vel = [3, 0];
    this.move();
  });
}

}




/* harmony default export */ __webpack_exports__["default"] = (Player);


/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! exports provided: randomVec, randomPosition, wrap, dist, bindKeyHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomVec", function() { return randomVec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomPosition", function() { return randomPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindKeyHandlers", function() { return bindKeyHandlers; });

/// in charge of giving direction
const randomVec = (length) => {
  const deg = 2 * Math.PI * Math.random();
  return scale([Math.sin(deg), Math.cos(deg)], length);
};


const  scale = (vec, m) => {
  return [vec[0] * m, vec[1] * m];
};


const randomPosition = (maxX, maxY) => {
  const x = maxX * Math.random();
  const y = maxY * Math.random();
  return [x, y];
};

const wrap = (coord, max) => {
  if (coord < 0){
    return max - (coord % max);
  } else if (coord > max) {
    return coord % max;
  } else {
    return coord;
  }
};

/// finds the distance between two objects
const dist = (pos1, pos2) => {
  return Math.sqrt(
    Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
    // doing the same thing as
    // let dx = pos1[0] - pos2[0]
    // let dy = pos1[1] - pos2[1]
    //
    // Math.sqrt((dx * dx) + (dy * dy))
  );
};

const bindKeyHandlers = game => {
  document.addEventListener('keydown', keyDownHandler, false);
  document.addEventListener('keyup', keyUpHandler, false);
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map