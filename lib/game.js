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
import SensuBean from './sensu_bean';
import Instructions from './instructions';
import SpirtBomb from './spirt_bomb';
import Krillin from './krillin';
import MajinBu from './majin_bu';
import Freiza from './freiza';
import KrillinBullet from './krillin_bullet';
import FreizaBullet from './freiza_bullet';
import DragonPage from './dragon_page';


class Game {
  constructor(ctx){
    this.ctx = ctx;
    this.background = new Background(ctx);
    this.players = [];
    this.enemies = [];
    this.dragonBalls = [];
    this.bullets = [];
    this.enemyBullets = [];
    this.sensuBeans = [];
    this.width = 900;
    this.height = 600;
    this.NUM_DRAGON_BALLS = 4;
    this.score = new Score(0);
    this.NUM_ENEMIES = 2;
    this.goku = new Goku( {pos: [450,550], game: this, ctx: this.ctx , score: this.score} );
    this.hp = new Hp(this.goku);
    this.instructions = new Instructions({ ctx: this.ctx, goku: this.goku });
    this.dragonPage = new DragonPage({ ctx: this.ctx, goku: this.goku });
    this.initialSetup();
    this.audio = new Audio();
    this.audio.src = './assets/rock_the_dragon.mp3';
    this.bindKeyHandlers();
    this.intro = true;
    this.dragon = true;
  }

  bindKeyHandlers(){
    key('m', () => {
     if (this.audio.paused) {
       this.audio.play();
     } else {
       this.audio.pause();
     }
   });

   key('n', () => {
     this.intro = false;
   }) ;

   key('y', () => {
     this.dragon = false;
   }) ;
  }

  initialSetup() {
    this.ctx.clearRect(0,0, 800, 800);
    this.addDragonBalls();
    this.players.push(this.goku);
    this.addEnemies();
  }

  addDragonBalls() {
    for (var i = 0; i < this.NUM_DRAGON_BALLS; i++) {
      this.add(new DragonBall( { pos: randomPosition(this.width, this.height), game: this, ctx: this.ctx , score: this.score}) );
    }
  }

  addEnemies() {
    for (var i = 0; i < this.NUM_ENEMIES; i++) {
      this.add(new Enemy( { pos: randomPosition(this.width, 200), ctx: this.ctx, game: this, goku: this.goku, vel: [0.7,0.7] }) );
    }
  }

  addEnemiesLevelTwo() {
    for (var i = 0; i < this.NUM_ENEMIES; i++) {
      this.add(new Krillin( { pos: randomPosition(this.width, 200), ctx: this.ctx, game: this, goku: this.goku, vel: [1.1,1.1] }) );
    }
  }

  addEnemiesLevelThree() {
    for (var i = 0; i < this.NUM_ENEMIES; i++) {
      this.add(new MajinBu( { pos: randomPosition(this.width, 200), ctx: this.ctx, game: this, goku: this.goku, vel: [2.1,2.1] }) );
    }
  }

  addEnemiesLevelFour() {
    for (var i = 0; i < this.NUM_ENEMIES; i++) {
      this.add(new Freiza( { pos: randomPosition(this.width, 200), ctx: this.ctx, game: this, goku: this.goku, vel: [4.1,4.1] }) );
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
        } else if (obj1 !== obj2 && (obj1 instanceof Bullet || obj1 instanceof SpirtBomb) && obj2 instanceof Enemy && obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
          obj2.collideWith(obj1);
        } else if (obj1 !== obj2 && (obj1 instanceof Bullet || obj1 instanceof SpirtBomb) && obj2 instanceof Freiza && obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
          obj2.collideWith(obj1);
        } else if (obj1 !== obj2 && (obj1 instanceof Bullet || obj1 instanceof SpirtBomb) && obj2 instanceof MajinBu && obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
          obj2.collideWith(obj1);
        } else if (obj1 !== obj2 && (obj1 instanceof Bullet || obj1 instanceof SpirtBomb) && obj2 instanceof Krillin && obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
          obj2.collideWith(obj1);
        } else if (obj1 !== obj2 && obj1 instanceof Goku && obj2 instanceof EnemyBullet && obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
          obj2.collideWith(obj1);
        } else if (obj1 !== obj2 && obj1 instanceof Goku && obj2 instanceof KrillinBullet && obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
          obj2.collideWith(obj1);
        } else if (obj1 !== obj2 && obj1 instanceof Goku && obj2 instanceof FreizaBullet && obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
          obj2.collideWith(obj1);
        } else if (obj1 !== obj2 && obj1 instanceof Goku && obj2 instanceof SensuBean && obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
        }
      }
    }
  }

  add(obj){
    if(obj instanceof Enemy || obj instanceof Krillin || obj instanceof MajinBu || obj instanceof Freiza){
      this.enemies.push(obj);
    } else if (obj instanceof Bullet || obj instanceof SpirtBomb){
      this.bullets.push(obj);
    } else if (obj instanceof DragonBall){
      this.dragonBalls.push(obj);
    } else if (obj instanceof EnemyBullet || obj instanceof KrillinBullet || obj instanceof FreizaBullet){
      this.enemyBullets.push(obj);
    } else if (obj instanceof SensuBean){
      this.sensuBeans.push(obj);
    }
  }

  remove(obj) {
    if (obj instanceof DragonBall) {
      this.dragonBalls.splice(this.dragonBalls.indexOf(obj), 1);
    } else if (obj instanceof Enemy || obj instanceof Krillin || obj instanceof MajinBu || obj instanceof Freiza) {
      this.enemies.splice(this.enemies.indexOf(obj), 1);
    } else if (obj instanceof Bullet) {
      this.bullets.splice(this.bullets.indexOf(obj), 1);
    } else if (obj.lives === 0 && obj instanceof Goku) {
      obj.lives = 0;
      this.players.splice(this.players.indexOf(obj), 1);
      alert('Game Over');
    } else if (obj instanceof EnemyBullet || obj instanceof KrillinBullet || obj instanceof FreizaBullet) {
      this.enemyBullets.splice(this.enemyBullets.indexOf(obj), 1);
    } else if (obj instanceof SensuBean) {
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
    if (this.intro) {
      this.instructions.draw(this.ctx);
    }  else if (this.score.score === 20){
      this.dragonPage.draw(this.ctx);
    } else {
      this.background.draw(this.ctx);
      this.hp.draw(this.ctx);
      this.score.draw(this.ctx);

      this.allObjects().forEach( obj => {
        obj.draw(this.ctx);
      });
    }
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
      wrap(pos[0], 900), wrap(pos[1], 800)
    ];
  }

}

export default Game;
