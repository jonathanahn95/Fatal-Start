import DragonBall from './dragon_ball';
import EnemyBullet from './enemy_bullet';
import MovingObject from './moving_object';
import * as Util from './util';

class Enemy extends MovingObject {
  constructor(options) {
    options.radius = 60;
    super(options);
    this.vel = options.vel;
    this.ctx = options.ctx;
    this.pos = options.pos;
    this.sX = 0;
    this.game = options.game;
    this.image = new Image();
    this.image.src = 'assets/buu.jpg';
    this.image.onload= () => {
      this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
    };
    this.game = options.game;
    this.goku = options.goku;
    this.bindKeyHandlers();
    this.sX = 0;
    debugger
  }

  bindKeyHandlers() {
    key('l', () => {
      this.fireBullet();
    });
  }


  move(){
    if (this.goku.pos[0] > this.pos[0]) {
      this.pos[0] += this.vel[0];
    }
    else if (this.goku.pos[0] < this.pos[0]) {
      this.pos[0] -= this.vel[0];
    }
     if (this.goku.pos[1] > this.pos[1]) {
      this.pos[1] += this.vel[1];
    }
    else if (this.goku.pos[1] < this.pos[1]) {
      this.pos[1] -= this.vel[1];
    }

    this.pos = this.game.wrap(this.pos);
    window.frames1 += 1;
  }

  fireBullet() {
    const bullet = new EnemyBullet( {pos: this.pos, vel: [0,3], ctx: this.ctx, game: this.game } );
    this.game.add(bullet);
  }







  draw(ctx) {
    switch(window.frames1) {
      case 170:
      this.fireBullet();
      break;
      default:
      break;
    }
    if (window.frames1 > 170){
      window.frames1 = 0;
    }
    this.ctx.drawImage(this.image, this.sX, 0, 1200, 1200, this.pos[0] - 125 , this.pos[1] - 90 , 650, 650);

  }




}




export default Enemy;
