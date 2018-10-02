import { randomPosition, wrap } from "./util";
import MovingObject from './moving_object';
import DragonBall from './dragon_ball';
import Goku from './goku';
import Enemy from './enemy';
import Background from './background';
import Score from './score';
import Bullet from './bullet';

class Game {
  constructor(ctx){
    this.background = new Background(ctx);
    this.players = [];
    this.enemies = [];
    this.dragonBalls = [];
    this.bullets = [];
    this.width = 600;
    this.height = 800;
    this.NUM_DRAGON_BALLS = 4;
    this.NUM_ENEMIES = 2;
    // this.NUM_BULLETS = 13;
    this.ctx = ctx;
    this.initialSetup();
    this.score = new Score(0);
  }


  initialSetup() {
    this.ctx.clearRect(0,0, 800, 800);
    this.addDragonBalls();
    this.players.push(new Goku( {pos: [300,600], game: this, ctx: this.ctx} ));
    this.addEnemies();
  }

  addDragonBalls() {
    for (var i = 0; i < this.NUM_DRAGON_BALLS; i++) {
      this.add(new DragonBall( { pos: randomPosition(this.width, this.height), game: this, ctx: this.ctx }) );
    }
  }

  addEnemies() {
    for (var i = 0; i < this.NUM_ENEMIES; i++) {
      this.add(new Enemy( { pos: randomPosition(this.width, 200), ctx: this.ctx, game: this }) );
    }
  }


  checkCollisions() {
    const allObj = this.allObjects();
      for (var i = 0; i < allObj.length; i++) {
      for (let j = 0; j < allObj.length; j++) {
        const obj1 = allObj[i];
        const obj2 = allObj[j];
        if (obj1 !== obj2 && obj1 instanceof Goku && obj2 instanceof DragonBall && obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
          return;
        } else if ((obj1 !== obj2 && obj1 instanceof Bullet && obj2 instanceof Enemy || obj1 instanceof Enemy && obj2 instanceof Bullet) && obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
        }
      }
    }
  }

  add(obj){
    if(obj instanceof Enemy){
      this.enemies.push(obj);
    } else if (obj instanceof Bullet){
      this.bullets.push(obj);
    } else if (obj instanceof DragonBall){
      this.dragonBalls.push(obj);
    }
  }

  remove(obj) {
    debugger
    if (obj instanceof DragonBall) {
      this.dragonBalls.splice(this.dragonBalls.indexOf(obj), 1);
      this.score.score += 1;
    } else if (obj instanceof Enemy) {
      debugger
      this.enemies.splice(this.enemies.indexOf(obj), 1);
      debugger
    } else if (obj instanceof Bullet) {
      debugger
      this.bullets.splice(this.bullets.indexOf(obj), 1);
      debugger

    }
  }

  allObjects() {
    return [].concat(this.players, this.dragonBalls, this.bullets, this.enemies);
  }

  draw() {
    this.ctx.clearRect(0,0, 800, 800);
    this.background.draw(this.ctx);
    this.score.draw(this.ctx);
    console.log(this.allObjects());

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
    if ( this.dragonBalls.length <= 2 ) {
      this.addDragonBalls();
    }
  }

  wrap(pos) {
    return [
      wrap(pos[0], 600), wrap(pos[1], 800)
    ];
  }

}

export default Game;
