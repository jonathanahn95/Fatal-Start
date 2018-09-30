import { randomPosition } from "./util";
import MovingObject from './moving_object';
import DragonBall from './dragon_ball';
import Goku from './goku';
// import Bullet from './bullet';
import Background from './background';
import Score from './score';

class Game {
  constructor(ctx){
    this.background = new Background(ctx);
    this.players = [];
    this.dragonBalls = [];
    this.bullets = [];
    this.width = 600;
    this.height = 800;
    this.NUM_DRAGON_BALLS = 4;
    // this.NUM_BULLETS = 13;
    this.ctx = ctx;
    this.initialSetup();
    this.score = new Score(0);
  }


  initialSetup() {
    this.ctx.clearRect(0,0, 800, 800);
    this.addDragonBalls();
    this.players.push(new Goku( {pos: [300,600], game: this, ctx: this.ctx} ));
    // this.addBullets();
  }

  addDragonBalls() {
    for (var i = 0; i < this.NUM_DRAGON_BALLS; i++) {
      this.add(new DragonBall( { pos: randomPosition(this.width, 200), game: this, ctx: this.ctx }) );
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
    if (obj instanceof DragonBall){
      this.dragonBalls.push(obj);
    }
  }

  remove(obj) {
    if (obj instanceof DragonBall) {
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

export default Game;
