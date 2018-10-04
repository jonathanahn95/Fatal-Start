import { randomPosition, wrap } from "./util";
import MovingObject from './moving_object';
import DragonBall from './dragon_ball';
import Goku from './goku';
import Enemy from './enemy';
import Background from './background';
import Score from './score';
import Bullet from './bullet';
import EnemyBullet from './enemy_bullet';
import Hp from './hp';
import Instructions from './instructions';

class Game {
  constructor(ctx){
    this.ctx = ctx;
    this.background = new Background(ctx);
    this.instructions = new Instructions(ctx);
    this.players = [];
    this.enemies = [];
    this.dragonBalls = [];
    this.bullets = [];
    this.enemyBullets = [];
    this.width = 900;
    this.height = 600;
    this.NUM_DRAGON_BALLS = 4;
    this.NUM_ENEMIES = 2;
    this.goku = new Goku( {pos: [450,550], game: this, ctx: this.ctx} );
    this.hp = new Hp(this.goku);
    this.initialSetup();
    this.score = new Score(0);
    this.audio = new Audio();
    this.audio.src = './assets/rock_the_dragon.mp3';
    this.bindKeyHandlers();
  }

  bindKeyHandlers(){
    key('p', () => {
     if (this.audio.paused) {
       this.audio.play();
     } else {
       this.audio.pause();
     }
   });
  }

  initialSetup() {
    this.ctx.clearRect(0,0, 800, 800);
    this.instructions.draw(this.ctx);
    this.addDragonBalls();
    this.players.push(this.goku);
    this.addEnemies();
  }

  addDragonBalls() {
    for (var i = 0; i < this.NUM_DRAGON_BALLS; i++) {
      this.add(new DragonBall( { pos: randomPosition(this.width, this.height), game: this, ctx: this.ctx }) );
    }
  }

  addEnemies() {
    for (var i = 0; i < this.NUM_ENEMIES; i++) {
      this.add(new Enemy( { pos: randomPosition(this.width, 200), ctx: this.ctx, game: this, goku: this.goku, vel: [0.7,0.7] }) );
    }
  }

  addEnemiesLevelTwo() {
    debugger
    for (var i = 0; i < this.NUM_ENEMIES; i++) {
      this.add(new Enemy( { pos: randomPosition(this.width, 200), ctx: this.ctx, game: this, goku: this.goku, vel: [0.1,0.1] }) );
    }
  }
  addEnemiesLevelThree() {
    debugger
    for (var i = 0; i < this.NUM_ENEMIES; i++) {
      this.add(new Enemy( { pos: randomPosition(this.width, 200), ctx: this.ctx, game: this, goku: this.goku, vel: [2.1,2.1] }) );
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
        } else if (obj1 !== obj2 && obj1 instanceof Bullet && obj2 instanceof Enemy && obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
          obj2.collideWith(obj1);
        } else if (obj1 !== obj2 && obj1 instanceof Goku && obj2 instanceof EnemyBullet && obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
          obj2.collideWith(obj1);
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
    } else if (obj instanceof EnemyBullet){
      this.enemyBullets.push(obj);
    }
  }

  remove(obj) {
    if (obj instanceof DragonBall) {
      this.dragonBalls.splice(this.dragonBalls.indexOf(obj), 1);
      this.score.score += 1;
    } else if (obj instanceof Enemy) {
      this.enemies.splice(this.enemies.indexOf(obj), 1);
    } else if (obj instanceof Bullet) {
      this.bullets.splice(this.bullets.indexOf(obj), 1);
    } else if (obj.lives === 0 && obj instanceof Goku) {
      obj.lives = 0;
      this.players.splice(this.players.indexOf(obj), 1);
      alert('Game Over');
    } else if (obj instanceof EnemyBullet) {
      this.enemyBullets.splice(this.enemyBullets.indexOf(obj), 1);
    }
  }

  isOutOfBounds(pos) {
   return (pos[0] < 0) || (pos[1] < 0) ||
     (pos[0] > this.width) || (pos[1] > this.height);
 }

  allObjects() {
    return [].concat(this.players, this.dragonBalls, this.bullets, this.enemies, this.enemyBullets);
  }

  draw() {
    // this.ctx.clearRect(0,0, 800, 800);
    this.instructions.draw(this.ctx);
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
    } else {
      this.checkCollisions();
      this.spawnDragonBalls();
      this.spawnEnemiesLevelThree();
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

  wrap(pos) {
    return [
      wrap(pos[0], 900), wrap(pos[1], 800)
    ];
  }

}

export default Game;
