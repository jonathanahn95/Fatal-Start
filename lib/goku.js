import DragonBall from './dragon_ball';
import Bullet from './bullet';
import * as Util from './util';
import MovingObject from './moving_object';
import EnemyBullet from './enemy_bullet';
import SensuBean from './sensu_bean';
import SpirtBomb from './spirt_bomb';
import Score from './score';
import KrillinBullet from './krillin_bullet';
import FreizaBullet from './freiza_bullet';
import Enemy from './enemy';

class Goku extends MovingObject {
  constructor(options) {
    options.radius = 30;
    options.vel = [0,0];
    super(options);
    this.ctx = options.ctx;
    this.sX = 0;
    this.score = options.score;
    this.isWrappable = false;
    this.game = options.game;
    this.image = new Image();
    this.image.src = 'assets/images/reg_goku.png';
    this.superGoku = new Image();
    this.superGoku.src = 'assets/images/supersaiyan-goku.png';
    this.game = options.game;
    this.bindKeyHandlers();
    this.lives = 3;
  }

  bindKeyHandlers() {
    key('w', () => {
      this.vel = [0, -6];
      // this.pos[1] -= 40;
      this.move();
    });

    key('s', () => {
      this.vel = [0, 6];
      // this.pos[1] += 40;
      this.move();
    });

    key('a', () => {
      this.vel = [-6, 0];
      // this.pos[0] -= 40;
      this.move();
    });

    key('d', () => {
      this.vel = [6, 0];
      // this.pos[0] += 40;

      this.move();
    });

    key('j', () => {
      this.fireBullet();
    });
  }

  move(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    window.frames += 30;
    this.pos = this.game.wrap(this.pos);
  }

  draw() {

    // switch(window.frames) {
    //   case 0:
    //   this.sX = 0;
    //   break;
    //   case 600:
    //   this.sX = 1200;
    //   break;
    //   case 1200:
    //   this.sX = 0;
    //   window.frames = 0;
    //   break;
    //   default:
    //   break;
    // }
    // if (window.frames > 1200){
    //   window.frames = 0;
    // }
    if (this.score.points >= 1750) {
      this.ctx.drawImage(this.superGoku, this.sX , 0, 800, 800, this.pos[0] - 50, this.pos[1] -40 , 700, 700);
    } else {
      this.ctx.drawImage(this.image, this.sX , 0, 800, 800, this.pos[0] - 50, this.pos[1] -70 , 700, 700);
    }
  }

  isCollidedWith(otherObj) {
     const centerDist = Util.dist(this.pos, otherObj.pos);
     return centerDist < this.radius + otherObj.radius;
   }

  fireBullet() {
    if (this.score.dragonBalls != 0){
      if (this.score.points >= 1750){
        const spirtBomb = new SpirtBomb( {pos: this.pos, vel: [0,-6], ctx: this.ctx, game: this.game } );
        this.game.add(spirtBomb);
      } else {
        const bullet = new Bullet( {pos: this.pos, vel: [0,-6], ctx: this.ctx, game: this.game } );
        this.game.add(bullet);
      }
      this.score.dragonBalls -= 1;
    }
  }

  collideWith(otherObj) {
    if (otherObj instanceof EnemyBullet || otherObj instanceof Enemy){

      this.lives-= 1;
    } else if (otherObj instanceof SensuBean && this.lives <= 2){
      this.lives++;
    } else if (otherObj instanceof DragonBall){
      this.score.dragonBalls += 1;
    }
    otherObj.remove();
  }

}




export default Goku;
