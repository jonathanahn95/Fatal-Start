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
      ctx.drawImage(this.image, 0, 0, 1000, 800);
    };
    this.frames = 0;
  }

  draw(ctx) {

    if (this.frames >= 1000){
      this.frames = 0;
    }
    this.frames += 6;
    // ctx.drawImage(this.image,0,  -this.frames,600, 800);
    // ctx.drawImage(this.image,0,600 - this.frames, 600, 800);

    ctx.drawImage(this.image,0, 0, 1000, 800);

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
/* harmony import */ var _dragon_ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragon_ball */ "./lib/dragon_ball.js");
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ "./lib/moving_object.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./lib/util.js");





class Bullet extends _moving_object__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(options){
      options.radius = 20;
      super(options);
      this.pos = options.pos;
      this.vel = options.vel;
      this.ctx = options.ctx;
      this.isWrappable = false;
      this.game = options.game;
      this.image = new Image();
      this.image.src = 'assets/blast1.jpg';
      this.image.onload= () => {
        this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
      };
    }


    move(){
      this.pos[0] += this.vel[0];
      this.pos[1] += this.vel[1];
      if (this.game.isOutOfBounds(this.pos)) {
         if (this.isWrappable) {
           this.pos = this.game.wrap(this.pos);
         } else {
           this.remove();
         }
       }

    }

    draw(ctx) {
      this.ctx.drawImage(this.image, this.sX, 0, 1200, 1200, this.pos[0] - 20 , this.pos[1] - 30 , 250, 250);
    }


}



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
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ "./lib/moving_object.js");



const DEFAULTS = {
  COLOR: "#505050",
  RADIUS: 25,
};


class DragonBall extends _moving_object__WEBPACK_IMPORTED_MODULE_1__["default"]  {
  constructor(options){

    super(options);
    this.isWrappable = false;
    this.image = new Image();
    this.image.src = 'assets/pix-drag.png';
    this.image.onload= () => {
      this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
    };
  }

  draw(ctx) {
    this.ctx.drawImage(this.image, this.sX, 0, 1200, 1200, this.pos[0] - 50 , this.pos[1] - 30 , 120, 120);
  }



  collideWith(otherObj) {
    otherObj.remove();
  }

  remove() {
    this.game.remove(this);
  }

  isCollidedWith(otherObj) {
     const centerDist = _util__WEBPACK_IMPORTED_MODULE_0__["dist"](this.pos, otherObj.pos);
     return centerDist < this.radius + otherObj.radius;
   }
}

/* harmony default export */ __webpack_exports__["default"] = (DragonBall);


/***/ }),

/***/ "./lib/dragon_page.js":
/*!****************************!*\
  !*** ./lib/dragon_page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

class DragonPage {
  constructor(options){
    this.ctx = options.ctx;
    this.goku = options.goku;

    this.image = new Image();
    this.image.src = 'assets/super_goku.png';
    this.image.onload= () => {
      this.ctx.drawImage(this.image, this.goku.pos[0], this.goku.pos[1]);
    };
      
  }

  draw(ctx) {
        
      ctx.clearRect(0,0, 900, 600);
      this.ctx.drawImage(this.image, 350, 350,100, 100);
      ctx.fillText("WOULD YOU LIKE TO TURN SUPER SAIYAN?" , 80, 60);
      ctx.fillText("PRESS Y" , 80, 140);
      ctx.font = "36px arial";
      ctx.fillStyle = "yellow";
      this.ctx.drawImage(this.image, this.sX, 0, 1200, 1200, this.goku.pos[0] - 125 , this.goku.pos[1] - 90 , 950, 1150);

  }




}

/* harmony default export */ __webpack_exports__["default"] = (DragonPage);


/***/ }),

/***/ "./lib/enemy.js":
/*!**********************!*\
  !*** ./lib/enemy.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dragon_ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragon_ball */ "./lib/dragon_ball.js");
/* harmony import */ var _enemy_bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy_bullet */ "./lib/enemy_bullet.js");
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moving_object */ "./lib/moving_object.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./lib/util.js");
/* harmony import */ var _sensu_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sensu_bean */ "./lib/sensu_bean.js");






class Enemy extends _moving_object__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(options) {
    options.radius = 30;
    super(options);
    this.vel = options.vel;
    this.ctx = options.ctx;
    this.pos = options.pos;
    this.sX = 0;
    this.game = options.game;
    this.image = new Image();
    this.image.src = 'assets/vegeta.png';
    this.image.onload= () => {
      this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
    };
    this.game = options.game;
    this.goku = options.goku;
    this.bindKeyHandlers();
    this.sX = 0;
  }

  bindKeyHandlers() {
    key('l', () => {
      this.fireBullet();
    });
  }


  move(){
    if (this.goku.pos[0] > this.pos[0]) {
      this.pos[0] += this.vel[0];
    }
    else if (this.goku.pos[0] < this.pos[0]) {
      this.pos[0] -= this.vel[0];
    }
     if (this.goku.pos[1] > this.pos[1]) {
      this.pos[1] += this.vel[1];
    }
    else if (this.goku.pos[1] < this.pos[1]) {
      this.pos[1] -= this.vel[1];
    }

    this.pos = this.game.wrap(this.pos);
    window.frames1 += 1;
  }

  fireBullet() {
    const bullet = new _enemy_bullet__WEBPACK_IMPORTED_MODULE_1__["default"]( {pos: this.pos, vel: [0,3], ctx: this.ctx, game: this.game } );
    this.game.add(bullet);
  }

  draw(ctx) {
    switch(window.frames1) {
      case 170:
      this.fireBullet();
      break;
      default:
      break;
    }
    if (window.frames1 > 170){
      window.frames1 = 0;
    }
    this.ctx.drawImage(this.image, this.sX, 0, 800, 800, this.pos[0] - 55 , this.pos[1] - 60 , 500, 500);
  }

  remove(){

    this.game.remove(this);
    this.sensuBean = new _sensu_bean__WEBPACK_IMPORTED_MODULE_4__["default"]( { pos: this.pos, vel: [0,-5], ctx: this.ctx, game: this.game} );

    this.game.add(this.sensuBean);

    // this.sensuBean.draw(this.ctx);
  }




}




/* harmony default export */ __webpack_exports__["default"] = (Enemy);


/***/ }),

/***/ "./lib/enemy_bullet.js":
/*!*****************************!*\
  !*** ./lib/enemy_bullet.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dragon_ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragon_ball */ "./lib/dragon_ball.js");
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ "./lib/moving_object.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./lib/util.js");





class EnemyBullet extends _moving_object__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(options){
      options.radius = 20;
      super(options);
      this.pos = options.pos;
      this.vel = options.vel;
      this.ctx = options.ctx;
      this.isWrappable = false;
      this.game = options.game;
      this.image = new Image();
      this.image.src = 'assets/enemy_bullet.png';
      this.image.onload= () => {
        this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
      };
    }

    move(){
      this.pos[0] += this.vel[0];
      this.pos[1] += Math.abs(this.vel[1]);
      if (this.game.isOutOfBounds(this.pos)) {
         if (this.isWrappable) {
           this.pos = this.game.wrap(this.pos);
         } else {
           this.remove();
         }
       }

    }


    draw(ctx) {
      this.ctx.drawImage(this.image, this.sX, 0, 1200, 1200, this.pos[0] - 20 , this.pos[1] - 10 , 250, 250);
    }


}



/* harmony default export */ __webpack_exports__["default"] = (EnemyBullet);


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




document.addEventListener("DOMContentLoaded", () => {


  window.intro = false;

  const startGame = () => {
    window.frames = 0;
    window.frames1 = 0;
    const canvasEl = document.getElementById('canvas');
    const ctx = canvasEl.getContext('2d');

    const game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
    new _game_view__WEBPACK_IMPORTED_MODULE_1__["default"](game, ctx).start();
  };

  var modal = document.getElementById('myModal');
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user open browser, open the modal
  window.onload = function() {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };

  span.onclick = function(event) {
      modal.style.display = 'none';
      window.intro = true;
    if ( window.intro === true) {
        startGame();
      }
  };





});


/***/ }),

/***/ "./lib/freiza.js":
/*!***********************!*\
  !*** ./lib/freiza.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dragon_ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragon_ball */ "./lib/dragon_ball.js");
/* harmony import */ var _freiza_bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./freiza_bullet */ "./lib/freiza_bullet.js");
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moving_object */ "./lib/moving_object.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./lib/util.js");
/* harmony import */ var _sensu_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sensu_bean */ "./lib/sensu_bean.js");






class Freiza extends _moving_object__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(options) {
    options.radius = 25;
    super(options);
    this.vel = options.vel;
    this.ctx = options.ctx;
    this.pos = options.pos;
    this.sX = 0;
    this.game = options.game;
    this.image = new Image();
    this.image.src = 'assets/frieza.jpg';
    this.image.onload= () => {
      this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
    };
    this.game = options.game;
    this.goku = options.goku;
    this.bindKeyHandlers();
    this.sX = 0;
  }

  bindKeyHandlers() {
    key('l', () => {
      this.fireBullet();
    });
  }


  move(){
    if (this.goku.pos[0] > this.pos[0]) {
      this.pos[0] += this.vel[0];
    }
    else if (this.goku.pos[0] < this.pos[0]) {
      this.pos[0] -= this.vel[0];
    }
     if (this.goku.pos[1] > this.pos[1]) {
      this.pos[1] += this.vel[1];
    }
    else if (this.goku.pos[1] < this.pos[1]) {
      this.pos[1] -= this.vel[1];
    }

    this.pos = this.game.wrap(this.pos);
    window.frames1 += 1;
  }

  fireBullet() {
    const bullet = new _freiza_bullet__WEBPACK_IMPORTED_MODULE_1__["default"]( {pos: this.pos, vel: [0,3], ctx: this.ctx, game: this.game } );
    this.game.add(bullet);
  }

  draw(ctx) {
    switch(window.frames1) {
      case 170:
      this.fireBullet();
      break;
      default:
      break;
    }
    if (window.frames1 > 170){
      window.frames1 = 0;
    }
    this.ctx.drawImage(this.image, this.sX, 0, 1200, 1200, this.pos[0] - 45 , this.pos[1] - 130 , 950, 1150);
  }

  remove(){
    this.game.remove(this);
    this.sensuBean = new _sensu_bean__WEBPACK_IMPORTED_MODULE_4__["default"]( { pos: this.pos, vel: [0,-5], ctx: this.ctx, game: this.game} );

    this.game.add(this.sensuBean);

    // this.sensuBean.draw(this.ctx);
  }




}




/* harmony default export */ __webpack_exports__["default"] = (Freiza);


/***/ }),

/***/ "./lib/freiza_bullet.js":
/*!******************************!*\
  !*** ./lib/freiza_bullet.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dragon_ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragon_ball */ "./lib/dragon_ball.js");
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ "./lib/moving_object.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./lib/util.js");





class FreizaBullet extends _moving_object__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(options){
      options.radius = 20;
      super(options);
      this.pos = options.pos;
      this.vel = options.vel;
      this.ctx = options.ctx;
      this.isWrappable = false;
      this.game = options.game;
      this.image = new Image();
      this.image.src = './assets/spirit-bomb.jpg';
      this.image.onload= () => {
        this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
      };

    }

    move(){
      this.pos[0] += this.vel[0];
      this.pos[1] += Math.abs(this.vel[1]);
      if (this.game.isOutOfBounds(this.pos)) {
         if (this.isWrappable) {
           this.pos = this.game.wrap(this.pos);
         } else {
           this.remove();
         }
       }

    }


    draw(ctx) {
      this.ctx.drawImage(this.image, this.sX, 0, 1200, 1200, this.pos[0] - 50 , this.pos[1] - 30 , 250, 250);

    }


}



/* harmony default export */ __webpack_exports__["default"] = (FreizaBullet);


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
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enemy */ "./lib/enemy.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./background */ "./lib/background.js");
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./score */ "./lib/score.js");
/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bullet */ "./lib/bullet.js");
/* harmony import */ var _enemy_bullet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./enemy_bullet */ "./lib/enemy_bullet.js");
/* harmony import */ var _hp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hp */ "./lib/hp.js");
/* harmony import */ var _sensu_bean__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sensu_bean */ "./lib/sensu_bean.js");
/* harmony import */ var _instructions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./instructions */ "./lib/instructions.js");
/* harmony import */ var _spirt_bomb__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./spirt_bomb */ "./lib/spirt_bomb.js");
/* harmony import */ var _krillin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./krillin */ "./lib/krillin.js");
/* harmony import */ var _majin_bu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./majin_bu */ "./lib/majin_bu.js");
/* harmony import */ var _freiza__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./freiza */ "./lib/freiza.js");
/* harmony import */ var _krillin_bullet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./krillin_bullet */ "./lib/krillin_bullet.js");
/* harmony import */ var _freiza_bullet__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./freiza_bullet */ "./lib/freiza_bullet.js");
/* harmony import */ var _dragon_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dragon_page */ "./lib/dragon_page.js");





















class Game {
  constructor(ctx){
    this.ctx = ctx;
    this.background = new _background__WEBPACK_IMPORTED_MODULE_5__["default"](ctx);
    this.players = [];
    this.enemies = [];
    this.dragonBalls = [];
    this.bullets = [];
    this.enemyBullets = [];
    this.sensuBeans = [];
    this.width = 900;
    this.height = 600;
    this.NUM_DRAGON_BALLS = 4;
    this.score = new _score__WEBPACK_IMPORTED_MODULE_6__["default"](0);
    this.NUM_ENEMIES = 2;
    this.goku = new _goku__WEBPACK_IMPORTED_MODULE_3__["default"]( {pos: [450,450], game: this, ctx: this.ctx , score: this.score} );
    this.hp = new _hp__WEBPACK_IMPORTED_MODULE_9__["default"](this.goku);
    this.instructions = new _instructions__WEBPACK_IMPORTED_MODULE_11__["default"]({ ctx: this.ctx, goku: this.goku });
    this.dragonPage = new _dragon_page__WEBPACK_IMPORTED_MODULE_18__["default"]({ ctx: this.ctx, goku: this.goku });
    this.initialSetup();
    this.audio = new Audio();
    this.audio.src = './assets/rock_the_dragon.mp3';
    this.bindKeyHandlers();
    this.intro = true;
    this.dragon = false;
    this.introScore = 0;
  }

  bindKeyHandlers(){
    key('m', () => {
     if (this.audio.paused) {
       this.audio.play();
     } else {
       this.audio.pause();
     }
   });

   key('p', () => {
     this.introScore ++;
   }) ;

   key('y', () => {
     this.score.score += 1;
   }) ;
  }

  initialSetup() {
    this.ctx.clearRect(0,0, 800, 800);
    this.addDragonBalls();
    this.players.push(this.goku);
    this.addEnemies();
  }

  setUp() {
    if (this.introScore === 0){
      this.instructions.draw(this.ctx);
    }
  }

  addDragonBalls() {
    for (var i = 0; i < this.NUM_DRAGON_BALLS; i++) {
      this.add(new _dragon_ball__WEBPACK_IMPORTED_MODULE_2__["default"]( { pos: Object(_util__WEBPACK_IMPORTED_MODULE_0__["randomPosition"])(this.width, this.height), game: this, ctx: this.ctx , score: this.score}) );
    }
  }

  addEnemies() {
    for (var i = 0; i < this.NUM_ENEMIES; i++) {
      this.add(new _enemy__WEBPACK_IMPORTED_MODULE_4__["default"]( { pos: Object(_util__WEBPACK_IMPORTED_MODULE_0__["randomPosition"])(this.width, 200), ctx: this.ctx, game: this, goku: this.goku, vel: [0.7,0.7] }) );
    }
  }

  addEnemiesLevelTwo() {
    for (var i = 0; i < this.NUM_ENEMIES; i++) {
      this.add(new _krillin__WEBPACK_IMPORTED_MODULE_13__["default"]( { pos: Object(_util__WEBPACK_IMPORTED_MODULE_0__["randomPosition"])(this.width, 200), ctx: this.ctx, game: this, goku: this.goku, vel: [1.1,1.1] }) );
    }
  }

  addEnemiesLevelThree() {
    for (var i = 0; i < this.NUM_ENEMIES; i++) {
      this.add(new _majin_bu__WEBPACK_IMPORTED_MODULE_14__["default"]( { pos: Object(_util__WEBPACK_IMPORTED_MODULE_0__["randomPosition"])(this.width, 200), ctx: this.ctx, game: this, goku: this.goku, vel: [1.3,1.3] }) );

    }
  }

  addEnemiesLevelFour() {
    for (var i = 0; i < this.NUM_ENEMIES; i++) {
      this.add(new _freiza__WEBPACK_IMPORTED_MODULE_15__["default"]( { pos: Object(_util__WEBPACK_IMPORTED_MODULE_0__["randomPosition"])(this.width, 200), ctx: this.ctx, game: this, goku: this.goku, vel: [1.5,1.5] }) );
    }
  }





  checkCollisions() {
    const allObj = this.allObjects();
      for (var i = 0; i < allObj.length; i++) {
      for (let j = 0; j < allObj.length; j++) {
        const obj1 = allObj[i];
        const obj2 = allObj[j];
        if (obj1 !== obj2 && obj1 instanceof _goku__WEBPACK_IMPORTED_MODULE_3__["default"] && obj2 instanceof _dragon_ball__WEBPACK_IMPORTED_MODULE_2__["default"] && obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
          return;
        } else if (obj1 !== obj2 && (obj1 instanceof _bullet__WEBPACK_IMPORTED_MODULE_7__["default"] || obj1 instanceof _spirt_bomb__WEBPACK_IMPORTED_MODULE_12__["default"]) && obj2 instanceof _enemy__WEBPACK_IMPORTED_MODULE_4__["default"] && obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
          obj2.collideWith(obj1);
        } else if (obj1 !== obj2 && (obj1 instanceof _bullet__WEBPACK_IMPORTED_MODULE_7__["default"] || obj1 instanceof _spirt_bomb__WEBPACK_IMPORTED_MODULE_12__["default"]) && obj2 instanceof _freiza__WEBPACK_IMPORTED_MODULE_15__["default"] && obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
          obj2.collideWith(obj1);
        } else if (obj1 !== obj2 && (obj1 instanceof _bullet__WEBPACK_IMPORTED_MODULE_7__["default"] || obj1 instanceof _spirt_bomb__WEBPACK_IMPORTED_MODULE_12__["default"]) && obj2 instanceof _majin_bu__WEBPACK_IMPORTED_MODULE_14__["default"] && obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
          obj2.collideWith(obj1);
        } else if (obj1 !== obj2 && (obj1 instanceof _bullet__WEBPACK_IMPORTED_MODULE_7__["default"] || obj1 instanceof _spirt_bomb__WEBPACK_IMPORTED_MODULE_12__["default"]) && obj2 instanceof _krillin__WEBPACK_IMPORTED_MODULE_13__["default"] && obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
          obj2.collideWith(obj1);
        } else if (obj1 !== obj2 && obj1 instanceof _goku__WEBPACK_IMPORTED_MODULE_3__["default"] && obj2 instanceof _enemy_bullet__WEBPACK_IMPORTED_MODULE_8__["default"] && obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
          obj2.collideWith(obj1);
        } else if (obj1 !== obj2 && obj1 instanceof _goku__WEBPACK_IMPORTED_MODULE_3__["default"] && obj2 instanceof _krillin_bullet__WEBPACK_IMPORTED_MODULE_16__["default"] && obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
          obj2.collideWith(obj1);
        } else if (obj1 !== obj2 && obj1 instanceof _goku__WEBPACK_IMPORTED_MODULE_3__["default"] && obj2 instanceof _freiza_bullet__WEBPACK_IMPORTED_MODULE_17__["default"] && obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
          obj2.collideWith(obj1);
        } else if (obj1 !== obj2 && obj1 instanceof _goku__WEBPACK_IMPORTED_MODULE_3__["default"] && obj2 instanceof _sensu_bean__WEBPACK_IMPORTED_MODULE_10__["default"] && obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
        }
      }
    }
  }

  add(obj){
    if(obj instanceof _enemy__WEBPACK_IMPORTED_MODULE_4__["default"] || obj instanceof _krillin__WEBPACK_IMPORTED_MODULE_13__["default"] || obj instanceof _majin_bu__WEBPACK_IMPORTED_MODULE_14__["default"] || obj instanceof _freiza__WEBPACK_IMPORTED_MODULE_15__["default"]){
      this.enemies.push(obj);
    } else if (obj instanceof _bullet__WEBPACK_IMPORTED_MODULE_7__["default"] || obj instanceof _spirt_bomb__WEBPACK_IMPORTED_MODULE_12__["default"]){
      this.bullets.push(obj);
    } else if (obj instanceof _dragon_ball__WEBPACK_IMPORTED_MODULE_2__["default"]){
      this.dragonBalls.push(obj);
    } else if (obj instanceof _enemy_bullet__WEBPACK_IMPORTED_MODULE_8__["default"] || obj instanceof _krillin_bullet__WEBPACK_IMPORTED_MODULE_16__["default"] || obj instanceof _freiza_bullet__WEBPACK_IMPORTED_MODULE_17__["default"]){
      this.enemyBullets.push(obj);
    } else if (obj instanceof _sensu_bean__WEBPACK_IMPORTED_MODULE_10__["default"]){
      this.sensuBeans.push(obj);
    }
  }

  remove(obj) {
    if (obj instanceof _dragon_ball__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      this.dragonBalls.splice(this.dragonBalls.indexOf(obj), 1);
    } else if (obj instanceof _enemy__WEBPACK_IMPORTED_MODULE_4__["default"] || obj instanceof _krillin__WEBPACK_IMPORTED_MODULE_13__["default"] || obj instanceof _majin_bu__WEBPACK_IMPORTED_MODULE_14__["default"] || obj instanceof _freiza__WEBPACK_IMPORTED_MODULE_15__["default"]) {
      this.enemies.splice(this.enemies.indexOf(obj), 1);
      debugger
    } else if (obj instanceof _bullet__WEBPACK_IMPORTED_MODULE_7__["default"] || obj instanceof _spirt_bomb__WEBPACK_IMPORTED_MODULE_12__["default"]) {
      this.bullets.splice(this.bullets.indexOf(obj), 1);
    } else if (obj.lives === 0 && obj instanceof _goku__WEBPACK_IMPORTED_MODULE_3__["default"]) {
      obj.lives = 0;
      this.players.splice(this.players.indexOf(obj), 1);
      alert('Game Over');
    } else if (obj instanceof _enemy_bullet__WEBPACK_IMPORTED_MODULE_8__["default"] || obj instanceof _krillin_bullet__WEBPACK_IMPORTED_MODULE_16__["default"] || obj instanceof _freiza_bullet__WEBPACK_IMPORTED_MODULE_17__["default"] ) {
      this.enemyBullets.splice(this.enemyBullets.indexOf(obj), 1);
    } else if (obj instanceof _sensu_bean__WEBPACK_IMPORTED_MODULE_10__["default"]) {
      this.sensuBeans.splice(this.sensuBeans.indexOf(obj),1);
    }
  }

  isOutOfBounds(pos) {
   return (pos[0] < 0) || (pos[1] < 0) ||
     (pos[0] > this.width) || (pos[1] > this.height);
 }

  allObjects() {
    return [].concat(this.players, this.dragonBalls, this.bullets, this.enemies, this.enemyBullets, this.sensuBeans);
  }

  draw() {
    this.background.draw(this.ctx);
    this.hp.draw(this.ctx);
    this.score.draw(this.ctx);

    this.allObjects().forEach( obj => {
      obj.draw(this.ctx);
    });

  }

  step() {
    if (this.score.score <= 5) {
      this.checkCollisions();
      this.spawnDragonBalls();
      this.spawnEnemies();
      this.allObjects().forEach( obj => {
        obj.move();
      });
    } else if (this.score.score <= 10) {
        this.checkCollisions();
        this.spawnDragonBalls();
        this.spawnEnemiesLevelTwo();
        this.allObjects().forEach( obj => {
          obj.move();
      });
    } else if (this.score.score <= 15) {
      this.checkCollisions();
      this.spawnDragonBalls();
      this.spawnEnemiesLevelThree();
      this.allObjects().forEach( obj => {
        obj.move();
      });
    } else {
      this.checkCollisions();
      this.spawnDragonBalls();
      this.spawnEnemiesLevelFour();
      this.allObjects().forEach( obj => {
        obj.move();
      });
    }
  }


  spawnDragonBalls() {
    if ( this.dragonBalls.length <= 0 ) {
      this.addDragonBalls();
    }
  }

  spawnEnemies() {
    if (this.enemies.length <= 0) {
      this.addEnemies();
    }
  }

  spawnEnemiesLevelTwo() {
    if (this.enemies.length <= 0 ) {
      this.addEnemiesLevelTwo();
    }
  }

  spawnEnemiesLevelThree() {
    if (this.enemies.length <= 0 ) {
      this.addEnemiesLevelThree();
    }
  }

  spawnEnemiesLevelFour () {
    if (this.enemies.length <= 0 ) {
      this.addEnemiesLevelFour ();
    }
  }

  wrap(pos) {
    return [
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["wrap"])(pos[0], 900), Object(_util__WEBPACK_IMPORTED_MODULE_0__["wrap"])(pos[1], 800)
    ];
  }

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

//setTimeout example
// import Instructions from './Instructions';
//
//
// class GameView {
//   constructor(game, ctx){
//     this.game = game;
//     this.ctx = ctx;
//     this.instructions = new Instructions(this.ctx);
//   }
//
//   start() {
//     this.startInstructions(this.ctx);
//
//     setTimeout(() => {
//       this.lastTime = 0;
//       requestAnimationFrame(this.animate.bind(this));
//     }, 3000);
//   }
//
//   startInstructions(){
//     this.instructions.draw(this.ctx);
//   }
//
//
//   // setTimeout() {
//   //  setTimeout(() => {
//   //  const timeDelta = time - this.lastTime;
//   //  this.game.step(timeDelta);
//   //  this.game.draw(this.ctx);
//   //  this.lastTime = time;
//   //  // every call to animate requests causes another call to animate
//   //  requestAnimationFrame(this.animate.bind(this));
//   //  }, 20000);
//   // }
//
//
// }
//
//
//
// export default GameView;


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
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moving_object */ "./lib/moving_object.js");
/* harmony import */ var _enemy_bullet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enemy_bullet */ "./lib/enemy_bullet.js");
/* harmony import */ var _sensu_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sensu_bean */ "./lib/sensu_bean.js");
/* harmony import */ var _spirt_bomb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spirt_bomb */ "./lib/spirt_bomb.js");
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./score */ "./lib/score.js");
/* harmony import */ var _krillin_bullet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./krillin_bullet */ "./lib/krillin_bullet.js");
/* harmony import */ var _freiza_bullet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./freiza_bullet */ "./lib/freiza_bullet.js");











class Goku extends _moving_object__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(options) {
    options.radius = 30;
    options.vel = [0,0];
    super(options);
    this.ctx = options.ctx;
    this.sX = 0;
    this.score = options.score;
    this.isWrappable = false;
    this.game = options.game;
    this.image = new Image();
    this.image.src = 'assets/reg_goku.png';
    this.superGoku = new Image();
    this.superGoku.src = 'assets/supersaiyan-goku.png';
    this.game = options.game;
    this.bindKeyHandlers();
    this.lives = 3;
  }

  bindKeyHandlers() {

    key('w', () => {
      this.vel = [0, -6];
      // this.pos[1] -= 40;
      this.move();
    });

    key('s', () => {
      this.vel = [0, 6];
      // this.pos[1] += 40;
      this.move();
    });

    key('a', () => {
      this.vel = [-6, 0];
      // this.pos[0] -= 40;
      this.move();
    });

    key('d', () => {
      this.vel = [6, 0];
      // this.pos[0] += 40;

      this.move();
    });

    key('j', () => {
      this.fireBullet();
    });

    key('space', () => {
      this.fireSpirtBomb();
    });
  }

  move(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    window.frames += 30;
    this.pos = this.game.wrap(this.pos);
  }

  draw() {

    // switch(window.frames) {
    //   case 0:
    //   this.sX = 0;
    //   break;
    //   case 600:
    //   this.sX = 1200;
    //   break;
    //   case 1200:
    //   this.sX = 0;
    //   window.frames = 0;
    //   break;
    //   default:
    //   break;
    // }
    // if (window.frames > 1200){
    //   window.frames = 0;
    // }
    if (this.score.score >= 12) {
      this.ctx.drawImage(this.superGoku, this.sX , 0, 800, 800, this.pos[0] - 50, this.pos[1] -40 , 700, 700);
    } else {
      this.ctx.drawImage(this.image, this.sX , 0, 800, 800, this.pos[0] - 50, this.pos[1] -70 , 700, 700);

    }

  }


  isCollidedWith(otherObj) {
     const centerDist = _util__WEBPACK_IMPORTED_MODULE_2__["dist"](this.pos, otherObj.pos);
     return centerDist < this.radius + otherObj.radius;
   }



  fireBullet() {
    if (this.score.score >= 12){
      const spirtBomb = new _spirt_bomb__WEBPACK_IMPORTED_MODULE_6__["default"]( {pos: this.pos, vel: [0,-6], ctx: this.ctx, game: this.game } );
      this.game.add(spirtBomb);
    } else {
      const bullet = new _bullet__WEBPACK_IMPORTED_MODULE_1__["default"]( {pos: this.pos, vel: [0,-6], ctx: this.ctx, game: this.game } );
      this.game.add(bullet);
    }
  

  }

  // fireSpirtBomb() {
  //   const spirtBomb = new SpirtBomb( {pos: this.pos, vel: [0,-6], ctx: this.ctx, game: this.game } );
  //
  //   if (this.score.score !== 0 && this.score.score % 7 === 0){
  //     this.game.add(spirtBomb);
  //   }
  // }





  collideWith(otherObj) {

    if (otherObj instanceof _enemy_bullet__WEBPACK_IMPORTED_MODULE_4__["default"] || otherObj instanceof _krillin_bullet__WEBPACK_IMPORTED_MODULE_8__["default"] || otherObj instanceof _freiza_bullet__WEBPACK_IMPORTED_MODULE_9__["default"]){
      this.lives-= 1;
    } else if (otherObj instanceof _sensu_bean__WEBPACK_IMPORTED_MODULE_5__["default"] && this.lives <= 2){
      this.lives++;
    } else if (otherObj instanceof _dragon_ball__WEBPACK_IMPORTED_MODULE_0__["default"]){
      this.score.score += 1;
    }
    otherObj.remove();
  }

}




/* harmony default export */ __webpack_exports__["default"] = (Goku);


/***/ }),

/***/ "./lib/hp.js":
/*!*******************!*\
  !*** ./lib/hp.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Hp {
  constructor(player){
    this.player = player;
  }

  draw(ctx) {

    // if (this.player.lives === 1) {
        ctx.fillText("HP: "+this.player.lives , 750, 40);
    //   ctx.fillRect(770,20,150,100);
    // } else {
    //   ctx.fillText("HP: "+this.player.lives , 750, 40);
    //   ctx.fillRect(770,20,100,100);
    // }

    // ctx.strokeStyle="red";
    // ctx.font = "36px Saiyan Sans";
    // ctx.fillStyle = "yellow";
    // ctx.stroke();

  }
}

/* harmony default export */ __webpack_exports__["default"] = (Hp);


/***/ }),

/***/ "./lib/instructions.js":
/*!*****************************!*\
  !*** ./lib/instructions.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

class Instructions {
  constructor(options){
    this.ctx = options.ctx;
    this.goku = options.goku;
    this.image = new Image();
    this.image.src = 'assets/aura_goku.png';
    this.text = new Image();
    this.text.src = 'assets/intro_text.png';
    // this.image = new Image();
    // this.image.src = 'assets/super_goku.png';
    // this.image.onload= () => {
    //   this.ctx.drawImage(this.image, this.goku.pos[0], this.goku.pos[1]);
    // };


  }

  draw(ctx) {
      ctx.clearRect(0,0, 900, 600);
      // this.ctx.drawImage(this.image, 350, 350,100, 100);
      // ctx.fillText("WOULD YOU LIKE TO TURN SUPER SAIYAN?" , 80, 60);
      // ctx.fillText("PRESS Y" , 80, 140);
      // ctx.font = "36px arial";
      // ctx.fillStyle = "yellow";

      // ctx.clearRect(0,0, 900, 600);
      ctx.fillStyle = 'yellow';
      // ctx.fillText('Welcome To Fatal Start', 300,60);
      // ctx.strokeText('asasdsad', 300, 100);
      this.ctx.fillRect(0,0,900,600);
      this.ctx.drawImage(this.text, -15, 10);
      this.ctx.drawImage(this.image, 310, 10);

  }




}

/* harmony default export */ __webpack_exports__["default"] = (Instructions);


/***/ }),

/***/ "./lib/krillin.js":
/*!************************!*\
  !*** ./lib/krillin.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dragon_ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragon_ball */ "./lib/dragon_ball.js");
/* harmony import */ var _krillin_bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./krillin_bullet */ "./lib/krillin_bullet.js");
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moving_object */ "./lib/moving_object.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./lib/util.js");
/* harmony import */ var _sensu_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sensu_bean */ "./lib/sensu_bean.js");






class Krillin extends _moving_object__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(options) {
    options.radius = 30;
    super(options);
    this.vel = options.vel;
    this.ctx = options.ctx;
    this.pos = options.pos;
    this.sX = 0;
    this.game = options.game;
    this.image = new Image();
    this.image.src = 'assets/krillin.png';
    this.image.onload= () => {
      this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
    };
    this.game = options.game;
    this.goku = options.goku;
    this.bindKeyHandlers();
    this.sX = 0;
  }

  bindKeyHandlers() {
    key('l', () => {
      this.fireBullet();
    });
  }


  move(){
    if (this.goku.pos[0] > this.pos[0]) {
      this.pos[0] += this.vel[0];
    }
    else if (this.goku.pos[0] < this.pos[0]) {
      this.pos[0] -= this.vel[0];
    }
     if (this.goku.pos[1] > this.pos[1]) {
      this.pos[1] += this.vel[1];
    }
    else if (this.goku.pos[1] < this.pos[1]) {
      this.pos[1] -= this.vel[1];
    }

    this.pos = this.game.wrap(this.pos);
    window.frames1 += 1;
  }

  fireBullet() {
    const bullet = new _krillin_bullet__WEBPACK_IMPORTED_MODULE_1__["default"]( {pos: this.pos, vel: [0,3], ctx: this.ctx, game: this.game } );
    this.game.add(bullet);
  }

  draw(ctx) {
    switch(window.frames1) {
      case 170:
      this.fireBullet();
      break;
      default:
      break;
    }
    if (window.frames1 > 170){
      window.frames1 = 0;
    }
    this.ctx.drawImage(this.image, this.sX, 0, 800, 800, this.pos[0] -35  , this.pos[1] - 60 , 450, 450);
  }

  remove(){
    this.game.remove(this);
    this.sensuBean = new _sensu_bean__WEBPACK_IMPORTED_MODULE_4__["default"]( { pos: this.pos, vel: [0,-5], ctx: this.ctx, game: this.game} );

    this.game.add(this.sensuBean);

    // this.sensuBean.draw(this.ctx);
  }




}




/* harmony default export */ __webpack_exports__["default"] = (Krillin);


/***/ }),

/***/ "./lib/krillin_bullet.js":
/*!*******************************!*\
  !*** ./lib/krillin_bullet.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dragon_ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragon_ball */ "./lib/dragon_ball.js");
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ "./lib/moving_object.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./lib/util.js");





class KrillinBullet extends _moving_object__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(options){
      options.radius = 40;
      super(options);
      this.pos = options.pos;
      this.vel = options.vel;
      this.ctx = options.ctx;
      this.isWrappable = false;
      this.game = options.game;
      this.image = new Image();
      this.image.src = 'assets/krillen_bullet.png';
      this.image.onload= () => {
        this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
      };

    }

    move(){
      this.pos[0] += this.vel[0];
      this.pos[1] += Math.abs(this.vel[1]);
      if (this.game.isOutOfBounds(this.pos)) {
         if (this.isWrappable) {
           this.pos = this.game.wrap(this.pos);
         } else {
           this.remove();
         }
       }

    }


    draw(ctx) {
      this.ctx.drawImage(this.image, this.sX, 0, 1200, 1200, this.pos[0] - 50 , this.pos[1] - 30 , 850, 950);

    }


}



/* harmony default export */ __webpack_exports__["default"] = (KrillinBullet);


/***/ }),

/***/ "./lib/majin_bu.js":
/*!*************************!*\
  !*** ./lib/majin_bu.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dragon_ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragon_ball */ "./lib/dragon_ball.js");
/* harmony import */ var _enemy_bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy_bullet */ "./lib/enemy_bullet.js");
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moving_object */ "./lib/moving_object.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./lib/util.js");
/* harmony import */ var _sensu_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sensu_bean */ "./lib/sensu_bean.js");






class MajinBu extends _moving_object__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(options) {
    options.radius = 25;
    super(options);
    this.vel = options.vel;
    this.ctx = options.ctx;
    this.pos = options.pos;
    this.sX = 0;
    this.game = options.game;
    this.image = new Image();
    this.image.src = 'assets/buu.png';
    this.image.onload= () => {
      this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
    };
    this.game = options.game;
    this.goku = options.goku;
    this.bindKeyHandlers();
    this.sX = 0;
  }

  bindKeyHandlers() {
    key('l', () => {
      this.fireBullet();
    });
  }


  move(){
    if (this.goku.pos[0] > this.pos[0]) {
      this.pos[0] += this.vel[0];
    }
    else if (this.goku.pos[0] < this.pos[0]) {
      this.pos[0] -= this.vel[0];
    }
     if (this.goku.pos[1] > this.pos[1]) {
      this.pos[1] += this.vel[1];
    }
    else if (this.goku.pos[1] < this.pos[1]) {
      this.pos[1] -= this.vel[1];
    }

    this.pos = this.game.wrap(this.pos);
    window.frames1 += 1;
  }

  fireBullet() {
    const bullet = new _enemy_bullet__WEBPACK_IMPORTED_MODULE_1__["default"]( {pos: this.pos, vel: [0,3], ctx: this.ctx, game: this.game } );
    this.game.add(bullet);
  }

  draw(ctx) {
    switch(window.frames1) {
      case 170:
      this.fireBullet();
      break;
      default:
      break;
    }
    if (window.frames1 > 170){
      window.frames1 = 0;
    }
    this.ctx.drawImage(this.image, this.sX, 0, 1000, 1000, this.pos[0] -30 , this.pos[1] - 70 , 650, 850);
  }

  remove(){
    this.game.remove(this);
    this.sensuBean = new _sensu_bean__WEBPACK_IMPORTED_MODULE_4__["default"]( { pos: this.pos, vel: [0,-5], ctx: this.ctx, game: this.game} );

    this.game.add(this.sensuBean);

    // this.sensuBean.draw(this.ctx);
  }




}




/* harmony default export */ __webpack_exports__["default"] = (MajinBu);


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
  COLOR: "#505050",
  RADIUS: 25,
};


class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel || _util__WEBPACK_IMPORTED_MODULE_0__["randomVec"](2);
    this.radius = options.radius || DEFAULTS.RADIUS;
    this.color = DEFAULTS.COLOR;
    this.game = options.game;
    this.ctx = options.ctx;
    this.sX = 0;
    this.isWrappable = true;
  }

  draw(ctx) {

  }

  move(){
    this.pos[0] += this.vel[0];
    this.pos[1] += Math.abs(this.vel[1]);
    if (this.game.isOutOfBounds(this.pos)) {
       if (this.isWrappable) {
         this.pos = this.game.wrap(this.pos);
       } else {
         this.remove();
       }
     }

  }

  isCollidedWith(otherObj) {
     const centerDist = _util__WEBPACK_IMPORTED_MODULE_0__["dist"](this.pos, otherObj.pos);
     return centerDist < this.radius + otherObj.radius;
   }

   collideWith(otherObj) {
     otherObj.remove();
   }

   remove(){
     this.game.remove(this);
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

    ctx.fillText("Dragon-Balls: "+this.score , 15, 40);
    ctx.font = "36px Impact";
    ctx.fillStyle = "yellow";
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Score);


/***/ }),

/***/ "./lib/sensu_bean.js":
/*!***************************!*\
  !*** ./lib/sensu_bean.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ "./lib/moving_object.js");

class SensuBean extends _moving_object__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options){
    super(options);
    this.pos = options.pos;
    this.vel = options.vel;
    this.isWrappable = false;
    this.image = new Image();
    this.image.src = 'assets/sensju.jpg';
    this.image.onload= () => {
      this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
    };  }

  draw(ctx) {
    this.ctx.drawImage(this.image, this.sX, 0, 1200, 1200, this.pos[0] - 50 , this.pos[1] - 30 , 250, 250);

  }
}

/* harmony default export */ __webpack_exports__["default"] = (SensuBean);


/***/ }),

/***/ "./lib/spirt_bomb.js":
/*!***************************!*\
  !*** ./lib/spirt_bomb.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dragon_ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragon_ball */ "./lib/dragon_ball.js");
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ "./lib/moving_object.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./lib/util.js");





class SpirtBomb extends _moving_object__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(options){
      options.radius = 50;
      super(options);
      this.pos = options.pos;
      this.vel = options.vel;
      this.ctx = options.ctx;
      this.isWrappable = false;
      this.game = options.game;
      this.image = new Image();
      this.image.src = './assets/spirit-bomb.jpg';
      this.image.onload= () => {
        this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
      };
    }

    move(){
      this.pos[0] += this.vel[0];
      this.pos[1] += this.vel[1];
      if (this.game.isOutOfBounds(this.pos)) {
         if (this.isWrappable) {
           this.pos = this.game.wrap(this.pos);
         } else {
           this.remove();
         }
       }

    }

    draw(ctx) {
      this.ctx.drawImage(this.image, this.sX, 0, 1000, 1000, this.pos[0] - 50  , this.pos[1] - 70 , 650, 650);


    }


}



/* harmony default export */ __webpack_exports__["default"] = (SpirtBomb);


/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! exports provided: randomVec, scale, randomPosition, wrap, dist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomVec", function() { return randomVec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomPosition", function() { return randomPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });

/// in charge of giving direction
const randomVec = (length) => {
  const deg = 2 * Math.PI * Math.random();
  return scale([Math.sin(deg), Math.cos(deg)], length);
};
//
// export const test = function() {
//   console.log("Hello");
// };
//
const scale = (vec, m) => {
  return [vec[0] * m, vec[1] * m];
};
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
  //
  const x = maxX * Math.random();
  const y = maxY * 0.5 * Math.random();
  return [x, y];
};

// export const randomPosition = (maxX, maxY) => {
//   const x = (maxX * 2 * Math.random()) - maxX;
//   const y = (maxY * Math.random()) - maxY * 0.5;
//   return [x, y];
// };

const wrap = (coord, max) => {
  if (coord < 0){
    return 900;
  } else if (coord > max) {
    return coord % max;
  } else {
    return coord;
  }
};
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