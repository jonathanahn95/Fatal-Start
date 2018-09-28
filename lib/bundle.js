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

/***/ "./lib/background.js":
/*!***************************!*\
  !*** ./lib/background.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = 'assets/fatal_start.jpg';
    this.image.onload = () => {
      ctx.drawImage(this.image, 0, 0, 800, 600);
    };

  }

  draw(ctx) {
    ctx.drawImage(this.image,0, 0, 800, 600);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Background);


/***/ }),

/***/ "./lib/bullet.js":
/*!***********************!*\
  !*** ./lib/bullet.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ "./lib/moving_object.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./lib/player.js");



class Bullet extends _moving_object__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options){
      options.radius = 344;
      // options.vel = Player.vel;
      super(options);
    }

    move(){
      this.pos[0] += this.vel[0];
      this.pos[1] += this.vel[1];
    }
    // draw(ctx) {
    //   ctx.beginPath();
    //   ctx.arc( this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);
    //   ctx.fillStyle = "red";
    //   ctx.fill();
    // }


}


Bullet.SPEED = 10;

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


const DEFAULTS = {
  COLOR: "#505050",
  RADIUS: 25,
  SPEED: 4
};

class Character  {
  constructor(options){
    this.pos = options.pos;
    this.vel = _util__WEBPACK_IMPORTED_MODULE_0__["randomVec"](DEFAULTS.SPEED);
    this.radius = options.radius || DEFAULTS.RADIUS;
    this.color = DEFAULTS.COLOR;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc( this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);
    ctx.fillStyle = "blue";
    ctx.fill();
  }

  move(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }
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
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./lib/game.js");
/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_view */ "./lib/game_view.js");
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./character */ "./lib/character.js");






document.addEventListener("DOMContentLoaded", () => {

  window.MovingObject = _moving_object__WEBPACK_IMPORTED_MODULE_0__["default"];
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
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./character */ "./lib/character.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./lib/player.js");
/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bullet */ "./lib/bullet.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./background */ "./lib/background.js");







class Game {
  constructor(ctx){
    this.background = new _background__WEBPACK_IMPORTED_MODULE_5__["default"](ctx);
    this.characters = [];
    this.bullets = [];
    this.width = 800;
    this.height = 800;
    this.NUM_CHAR = 4;
    this.ctx = ctx;
    this.initialSetup();
//
  }

  initialSetup() {
    this.ctx.clearRect(0,0, 800, 800);
    this.addCharacters();
    this.characters.push(new _player__WEBPACK_IMPORTED_MODULE_3__["default"]( {pos: [350, 250], game: this} ));
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
    debugger
  }

  allObjects() {
    return [].concat(this.characters, this.bullets);
  }

  draw() {
    this.ctx.clearRect(0,0, 800, 800);
    this.background.draw(this.ctx);
    this.allObjects().forEach( obj => {
      obj.draw(this.ctx);
    });
  }

  step() {
    this.allObjects().forEach( obj => {
      obj.move();
    });
  }

  // wrap(pos) {
  //   return [
  //     wrap(pos[0], 800), wrap(pos[1], 800)
  //   ];
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./lib/util.js");


const DEFAULTS = {
  COLOR: "#d1472b",
  RADIUS: 7,
  SPEED: 7
};

class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = _util__WEBPACK_IMPORTED_MODULE_0__["randomVec"](DEFAULTS.SPEED);
    this.radius = options.radius || DEFAULTS.RADIUS;
    this.color = DEFAULTS.COLOR;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc( this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);
    ctx.fillStyle = "red";
    ctx.fill();
  }


  move(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }
}



/* harmony default export */ __webpack_exports__["default"] = (MovingObject);


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
/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bullet */ "./lib/bullet.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./lib/util.js");




class Player extends _character__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    options.radius = 100;
    super(options);
    this.game = options.game;
    this.bindKeyHandlers();
  }

  bindKeyHandlers() {
    key('w', () => {
      this.vel = [0, -3];
      this.move();
    });

    key('s', () => {
      this.vel = [0, 3];
      this.move();
    });

    key('a', () => {
      this.vel = [-3, 0];
      this.move();
    });

    key('d', () => {
      this.vel = [3, 0];
      this.move();
    });

    key('j', () => {
      this.fireBullet();
    });
  }

  fireBullet() {

    const relVel = _util__WEBPACK_IMPORTED_MODULE_2__["scale"](
      _util__WEBPACK_IMPORTED_MODULE_2__["dir"](this.vel),
      _bullet__WEBPACK_IMPORTED_MODULE_1__["default"].SPEED
    );

    const bulletVel = [
      relVel[0] + this.vel[0], relVel[1] + this.vel[1]
    ];
    debugger
    const bullet = new _bullet__WEBPACK_IMPORTED_MODULE_1__["default"]( {pos: this.pos, vel: bulletVel} );
    this.game.add(bullet);
  }

}




/* harmony default export */ __webpack_exports__["default"] = (Player);


/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! exports provided: randomVec, scale, dir, norm, randomPosition, wrap, dist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomVec", function() { return randomVec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dir", function() { return dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "norm", function() { return norm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomPosition", function() { return randomPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });

/// in charge of giving direction
const randomVec = (length) => {
  const deg = 2 * Math.PI * Math.random();
  return scale([Math.sin(deg), Math.cos(deg)], length);
};


const scale = (vec, m) => {
  return [vec[0] * m, vec[1] * m];
};

// Normalize the length of the vector to 1, maintaining direction.
const dir = vec => {
  const normVec = norm(vec);
  return scale(vec, 1 / normVec);
};


// Find the length of the vector.
const norm = vec => {
  return dist([0,0], vec);
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


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map