import DragonBall from './dragon_ball';
import EnemyBullet from './enemy_bullet';
import MovingObject from './moving_object';
import * as Util from './util';
import Enemy from './enemy';
import SensuBean from './sensu_bean';

class MajinBu extends Enemy {
  constructor(options) {
    options.radius = 25;
    super(options);
    this.vel = options.vel;
    this.ctx = options.ctx;
    this.pos = options.pos;
    this.sX = 0;
    this.game = options.game;
    this.image = new Image();
    this.image.src = 'assets/images/buu.png';
    this.image.onload= () => {
      this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
    };
    this.game = options.game;
    this.goku = options.goku;
    this.sX = 0;
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
    this.ctx.drawImage(this.image, this.sX, 0, 1000, 1000, this.pos[0] -30 , this.pos[1] - 70 , 650, 850);
  }
}

export default MajinBu;
