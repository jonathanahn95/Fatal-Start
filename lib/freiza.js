import DragonBall from './dragon_ball';
import FreizaBullet from './freiza_bullet';
import MovingObject from './moving_object';
import * as Util from './util';
import SensuBean from './sensu_bean';
import Enemy from './enemy';


class Freiza extends Enemy {
  constructor(options) {
    options.radius = 25;
    super(options);
    this.vel = options.vel;
    this.ctx = options.ctx;
    this.pos = options.pos;
    this.sX = 0;
    this.game = options.game;
    this.image = new Image();
    this.image.src = 'assets/images/frieza.jpg';
    this.image.onload= () => {
      this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
    };
    this.game = options.game;
    this.goku = options.goku;
    this.sX = 0;
  }

  fireBullet() {
    const bullet = new FreizaBullet( {pos: this.pos, vel: [0,3], ctx: this.ctx, game: this.game } );
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
    this.ctx.drawImage(this.image, this.sX, 0, 1200, 1200, this.pos[0] - 45 , this.pos[1] - 130 , 950, 1150);
  }
}

export default Freiza;
