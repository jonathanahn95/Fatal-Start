const Util = require("./util");
const MovingObject = require('./moving_object');
const Character = require('./characters');


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
