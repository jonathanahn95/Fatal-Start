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
    this.NUM_DRAGON_BALLS = 5;
    this.score = new Score(0);
    this.goku = new Goku( {pos: [450,450], game: this, ctx: this.ctx , score: this.score} );
    this.hp = new Hp(this.goku);
    this.timer = 1;
    this.initialSetup();
    this.audio = new Audio();
    this.audio.src = './assets/audio/rock_the_dragon.mp3';
    this.audio.play();
    this.gameOver = false;
    this.bindKeyHandlers();
    this.keepTime = this.keepTime.bind(this);
  }

  bindKeyHandlers(){
    key('m', () => {
     if (this.audio.paused) {
       this.audio.play();
     } else {
       this.audio.pause();
     }
   });
  }

  initialSetup() {
    this.timer = 1;
    this.ctx.clearRect(0,0, 800, 800);
    this.addDragonBalls();
    this.players.push(this.goku);
    this.addEnemies();
    this.keepTime();
  }

  keepTime(){
    let timer = setInterval(() => {
      this.timer++;
      if (this.timer % 3 === 0){
        this.enemies.forEach( enemy => {
          enemy.fireBullet();
        });
      }
    }, 1000);
  }

  addSensuBean() {
    if ( this.score.dragonBalls !== 0 && this.sensuBeans.length >= 0 && this.sensuBeans.length < 1 && this.score.dragonBalls % 5 === 0){
      const sensuBean = new SensuBean( { pos: randomPosition(this.width, this.height), vel: [0,-5], ctx: this.ctx, game: this} );
      setInterval(function(){
        sensuBean.game.add(sensuBean);
      }, 5000);
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
        } else if (obj1 !== obj2 && obj1 instanceof Goku && obj2 instanceof Enemy && obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
        } else if (obj1 !== obj2 && obj1 instanceof Goku && obj2 instanceof SensuBean && obj1.isCollidedWith(obj2)){
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
    } else if (obj instanceof EnemyBullet){
      this.enemyBullets.push(obj);
    } else if (this.sensuBeans.length === 0 && obj instanceof SensuBean){
      this.sensuBeans.push(obj);
    }
  }

  remove(obj) {
    if (obj instanceof DragonBall) {
      this.dragonBalls.splice(this.dragonBalls.indexOf(obj), 1);
    } else if (this.goku.lives === 0) {
      this.players.splice(this.players.indexOf(obj), 1);
      alert('Game Over');
    } else if (obj instanceof Enemy) {
      this.enemies.splice(this.enemies.indexOf(obj), 1);
    } else if (obj instanceof Bullet) {
      this.bullets.splice(this.bullets.indexOf(obj), 1);
    } else if (obj instanceof EnemyBullet) {
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
    this.background.draw(this.ctx);
    this.hp.draw(this.ctx);
    this.score.draw(this.ctx);
    this.allObjects().forEach( obj => {
      obj.draw(this.ctx);
    });
  }

  addDragonBalls() {
    for (var i = 0; i < this.NUM_DRAGON_BALLS; i++) {
      this.add(new DragonBall( { pos: randomPosition(this.width, this.height), game: this, ctx: this.ctx , score: this.score}) );
    }
  }

  addEnemies() {
    const score = this.score.points;
    if (score <= 500){
      for (var i = 0; i < 2; i++) {
        this.add(new Enemy( { pos: randomPosition(this.width, 200), ctx: this.ctx, game: this, goku: this.goku, vel: [0.5,0.5] }) );
      }
      return;
    } else if ( score <= 1000){
      for (var j = 0; j < 4; j++) {
        this.add(new Krillin( { pos: randomPosition(this.width, 200), ctx: this.ctx, game: this, goku: this.goku, vel: [0.6,0.6] }) );
      }
      return;
    } else if ( score <= 1500){
      for (var k = 0; k < 3; k++) {
        this.add(new MajinBu( { pos: randomPosition(this.width, 200), ctx: this.ctx, game: this, goku: this.goku, vel: [0.6,0.6] }) );
      }
      return;
    } else  {
      for (var l = 0; l < 3; l++) {
        this.add(new Freiza( { pos: randomPosition(this.width, 200), ctx: this.ctx, game: this, goku: this.goku, vel: [0.8,0.8] }) );
      }
    }
  }

  step() {
    this.checkCollisions();
    this.spawnDragonBalls();
    this.addSensuBean();
    this.spawnEnemies();
    this.allObjects().forEach( obj => {
      obj.move();
    });
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

  wrap(pos) {
    return [
      wrap(pos[0], 900), wrap(pos[1], 800)
    ];
  }

}

export default Game;
