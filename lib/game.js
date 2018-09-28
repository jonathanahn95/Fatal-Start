import { randomPosition, randomVec, scale, wrap } from "./util";
import MovingObject from './moving_object';
import Character from './character';
import Player from './player';
import Bullet from './bullet';
import Background from './background';

class Game {
  constructor(ctx){
    this.background = new Background(ctx);
    this.players = [];
    this.characters = [];
    this.bullets = [];
    this.width = 600;
    this.height = 800;
    this.NUM_CHAR = 4;
    // this.NUM_BULLETS = 13;
    this.ctx = ctx;
    this.initialSetup();
  }

  initialSetup() {
    this.ctx.clearRect(0,0, 800, 800);
    this.addCharacters();
    this.players.push(new Player( {pos: [100, 450], game: this, ctx: this.ctx} ));
    // this.addBullets();
  }

  addCharacters() {
    for (var i = 0; i < this.NUM_CHAR; i++) {
      this.add(new Character( { pos: randomPosition(this.width, this.height), game: this }) );
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
    if (obj instanceof Character){
      this.characters.push(obj);
    } else if (obj instanceof Bullet){
      this.bullets.push(obj);
    }
  }

  remove(obj) {
    debugger
    if (obj instanceof Character) {
      this.characters.splice(this.characters.indexOf(obj), 1);
    }
  }

  allObjects() {
    return [].concat(this.players, this.characters);
  }

  draw() {
    this.ctx.clearRect(0,0, 800, 800);
    this.background.draw(this.ctx);
    this.allObjects().forEach( obj => {
      obj.draw(this.ctx);
    });
  }

  step() {
    this.checkCollisions();
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
