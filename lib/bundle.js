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
    this.image.src = 'assets/wall.jpg';
    this.image.onload = () => {
      ctx.drawImage(this.image, 0, 0, 600, 800);
    };
    this.frames = 0;
  }

  draw(ctx) {

    if (this.frames >= 600){
      this.frames = 0;
    }
    this.frames += 6;
    // ctx.drawImage(this.image,0,  -this.frames,600, 800);
    // ctx.drawImage(this.image,0,600 - this.frames, 600, 800);

    ctx.drawImage(this.image,0, 0, 600, 800);

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
/* harmony import */ var _goku__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goku */ "./lib/goku.js");



class Bullet extends _moving_object__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options){
      options.radius = 4;

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


// Bullet.SPEED = 10;

/* harmony default export */ __webpack_exports__["default"] = (Bullet);


/***/ }),

/***/ "./lib/dragon_ball.js":
/*!****************************!*\
  !*** ./lib/dragon_ball.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./lib/util.js");


const DEFAULTS = {
  COLOR: "#505050",
  RADIUS: 25,
  // SPEED: 8
};

class Character  {
  constructor(options){
    this.pos = options.pos;
    this.vel = options.vel || [0, 3];
    this.radius = options.radius || DEFAULTS.RADIUS;
    this.color = DEFAULTS.COLOR;
    this.game = options.game;
    this.ctx = options.ctx;
    this.sX = 0;
    this.image = new Image();
    this.image.src = 'assets/dragonball2.png';
    this.image.onload= () => {
      this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
    };
  }

  draw(ctx) {
    this.ctx.drawImage(this.image, this.sX, 0, 1200, 1200, this.pos[0] - 30 , this.pos[1] - 10 , 230, 230);

  }

  collideWith(otherObj) {

    otherObj.remove();
  }

  move(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    window.frames += 30;

  }

  remove() {
    this.game.remove(this);
  }

  isCollidedWith(otherObj) {
     const centerDist = _util__WEBPACK_IMPORTED_MODULE_0__["dist"](this.pos, otherObj.pos);
     return centerDist < this.radius + otherObj.radius;
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
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./lib/game.js");
/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ "./lib/game_view.js");
// import MovingObject from './moving_object';


// import Character from './character';


document.addEventListener("DOMContentLoaded", () => {

  window.frames = 0;
  const canvasEl = document.getElementById('canvas');
  const ctx = canvasEl.getContext('2d');


  // const game = new Game(ctx);
  // const char = new Character();
  // char.drawChar(ctx);

  const game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
  new _game_view__WEBPACK_IMPORTED_MODULE_1__["default"](game, ctx).start();

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
/* harmony import */ var _dragon_ball__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dragon_ball */ "./lib/dragon_ball.js");
/* harmony import */ var _goku__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goku */ "./lib/goku.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./background */ "./lib/background.js");
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./score */ "./lib/score.js");




// import Bullet from './bullet';



class Game {
  constructor(ctx){
    this.background = new _background__WEBPACK_IMPORTED_MODULE_4__["default"](ctx);
    this.players = [];
    this.dragonBalls = [];
    this.bullets = [];
    this.width = 600;
    this.height = 800;
    this.NUM_DRAGON_BALLS = 4;
    // this.NUM_BULLETS = 13;
    this.ctx = ctx;
    this.initialSetup();
    this.score = new _score__WEBPACK_IMPORTED_MODULE_5__["default"](0);
  }


  initialSetup() {
    this.ctx.clearRect(0,0, 800, 800);
    this.addDragonBalls();
    this.players.push(new _goku__WEBPACK_IMPORTED_MODULE_3__["default"]( {pos: [300,600], game: this, ctx: this.ctx} ));
    // this.addBullets();
  }

  addDragonBalls() {
    for (var i = 0; i < this.NUM_DRAGON_BALLS; i++) {
      this.add(new _dragon_ball__WEBPACK_IMPORTED_MODULE_2__["default"]( { pos: Object(_util__WEBPACK_IMPORTED_MODULE_0__["randomPosition"])(this.width, 200), game: this, ctx: this.ctx }) );
    }
  }

  // addBullets() {
  //   for (var i = 0; i < this.NUM_BULLETS; i++) {
  //     this.add(new Bullet( { pos: [120, 470] }));
  //   }
  // }

  checkCollisions() {
    const allObj = this.allObjects();
      for (let j = 1; j < allObj.length; j++) {
        const obj1 = allObj[0];
        const obj2 = allObj[j];
        if (obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
          return;
      }
    }
  }

  add(obj){
    if (obj instanceof _dragon_ball__WEBPACK_IMPORTED_MODULE_2__["default"]){
      this.dragonBalls.push(obj);
    }
  }

  remove(obj) {
    if (obj instanceof _dragon_ball__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      this.dragonBalls.splice(this.dragonBalls.indexOf(obj), 1);
      this.score.score += 1;
    }
  }

  allObjects() {
    return [].concat(this.players, this.dragonBalls);
  }

  draw() {
    this.ctx.clearRect(0,0, 800, 800);
    this.background.draw(this.ctx);
    this.score.draw(this.ctx);
    this.allObjects().forEach( obj => {
      obj.draw(this.ctx);
    });
  }

  step() {
    this.checkCollisions();
    this.spawnDragonBalls();
    this.allObjects().forEach( obj => {
      obj.move();
    });
  }


  spawnDragonBalls() {
    if ( this.dragonBalls.length <= 3) {
      this.addDragonBalls();
    }
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

/***/ "./lib/goku.js":
/*!*********************!*\
  !*** ./lib/goku.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dragon_ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragon_ball */ "./lib/dragon_ball.js");
/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bullet */ "./lib/bullet.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./lib/util.js");




class Player extends _dragon_ball__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    options.radius = 60;
    options.vel = [0,0];
    super(options);
    this.ctx = options.ctx;
    this.sX = 0;
    this.image = new Image();
    this.image.src = 'assets/flying_goku.png';
    this.image.onload= () => {
      this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
    };
    this.game = options.game;
    this.bindKeyHandlers();
  }

  bindKeyHandlers() {
    key('w', () => {
      this.vel = [0, -6];
      // this.pos[1] -= 10;
      this.move();
    });

    key('s', () => {
      this.vel = [0, 6];
      // this.pos[1] += 10;
      this.move();
    });

    key('a', () => {
      this.vel = [-6, 0];
      // this.pos[0] -= 10;
      this.move();
    });

    key('d', () => {
      this.vel = [6, 0];
      // this.pos[0] += 10;

      this.move();
    });

    // key('j', () => {
    //   this.fireBullet();
    // });
  }

  draw() {

    switch(window.frames) {
      case 0:
      this.sX = 0;
      break;
      case 600:
      this.sX = 1200;
      break;
      case 1200:
      this.sX = 0;
      window.frames = 0;
      break;
      default:
      break;
    }
    if (window.frames > 1200){
      window.frames = 0;
    }

    this.ctx.drawImage(this.image, this.sX, 0, 1200, 1200, this.pos[0] - 125 , this.pos[1] - 90 , 250, 250);
  }



  // fireBullet() {
  //   // const norm = Util.norm(this.vel);
  //   //
  //   // if (norm === 0){
  //   //   return;
  //   // }
  //   // const relVel = Util.dir(this.vel);
  //   const relVel = Util.scale(
  //     (Util.dir(this.vel), 4)
  //   );
  //   Util.test();
  //
  //
  //   const bulletVel = [
  //     relVel[0] + this.vel[0], relVel[1] + this.vel[1]
  //   ];
  //   const bullet = new Bullet( {pos: this.pos, vel: bulletVel} );
  //   this.game.add(bullet);
  // }
  //
  // move(){
  //   this.pos[0] += this.vel[0];
  //   this.pos[1] += this.vel[1];
  // }

}




/* harmony default export */ __webpack_exports__["default"] = (Player);


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
    this.vel = options.pos || [-5,0];
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

/***/ "./lib/score.js":
/*!**********************!*\
  !*** ./lib/score.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Score {
  constructor(score){
    this.score = score;
  }

  draw(ctx) {

    ctx.fillText("dragonballs: "+this.score , 15, 40);
    ctx.font = "36px Saiyan Sans";
    ctx.fillStyle = "yellow";
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Score);


/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! exports provided: randomPosition, dist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomPosition", function() { return randomPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });

/// in charge of giving direction
// export const randomVec = (length) => {
//   const deg = 2 * Math.PI * Math.random();
//   return scale([Math.sin(deg), Math.cos(deg)], length);
// };
//
// export const test = function() {
//   console.log("Hello");
// };
//
// export const scale = (vec, m) => {
//   return [vec[0] * m, vec[1] * m];
// };
//
// // Normalize the length of the vector to 1, maintaining direction.
// export const dir = vec => {
//   const normVec = norm(vec);
//   return scale(vec, 1 / normVec);
// };
//
//
// // Find the length of the vector.
// export const norm = vec => {
//   return dist([0,0], vec);
// };
//
//

const randomPosition = (maxX, maxY) => {
  const x = maxX * Math.random();
  const y = maxY * Math.random();
  return [x, y];
};

// export const wrap = (coord, max) => {
//   if (coord < 0){
//     return max - (coord % max);
//   } else if (coord > max) {
//     return coord % max;
//   } else {
//     return coord;
//   }
// };
//
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