import { randomPosition, randomVec, scale, wrap } from "./util";
import MovingObject from './moving_object';
import Character from './character';
import Player from './player';
import Bullet from './bullet';
import Background from './background';

class Game {
  constructor(ctx){
    this.background = new Background(ctx);
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
    this.characters.push(new Player( {pos: [350, 250], game: this} ));
  }

  addCharacters() {
    for (var i = 0; i < this.NUM_CHAR; i++) {
      this.add(new Character( { pos: randomPosition(this.width, this.height) }) );
    }
  }

  add(obj){
    if (obj instanceof Character){
      this.characters.push(obj);
    } else if (obj instanceof Bullet){
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

export default Game;
