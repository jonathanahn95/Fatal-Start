import { randomPosition, randomVec, scale, wrap } from "./util";
import MovingObject from './moving_object';
import Character from './character';
import Player from './player';
import Bullet from './bullet';

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
    this.characters.push(new Player( {pos: [350, 250]} ));
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
    const player = new Player({
        pos: [50, 175],
        radius: 55,
        game: this
      });

    this.characters.push(player);
    return player;
  }


  wrap(pos) {
    return [
      wrap(pos[0], 800), wrap(pos[1], 700)
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

export default Game;
