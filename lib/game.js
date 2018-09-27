import { randomPosition, randomVec, scale} from "./util";
import MovingObject from './moving_object';
import Character from './character';
import Player from './player';


class Game {
  constructor(ctx){
    this.characters = [];
    this.width = 800;
    this.height = 700;
    this.NUM_CHAR = 13;
    this.ctx = ctx;
    this.initialSetup();
  }

  initialSetup() {
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
    }
  }

  draw() {
    this.characters.forEach( char => {
      char.draw(this.ctx);
    });
  }

  step() {

    this.characters.forEach( char => {
      char.move();
    });
  }

}

export default Game;
