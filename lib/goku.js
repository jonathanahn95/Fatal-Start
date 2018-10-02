import DragonBall from './dragon_ball';
import Bullet from './bullet';
import * as Util from './util';
import MovingObject from './moving_object';


class Goku extends DragonBall {
  constructor(options) {
    options.radius = 60;
    options.vel = [0,0];
    super(options);
    this.ctx = options.ctx;
    this.sX = 0;
    this.game = options.game;
    this.image = new Image();
    this.image.src = 'assets/flying_goku.png';
    this.image.onload= () => {
      this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
    };
    this.game = options.game;
    this.bindKeyHandlers();
  }

  bindKeyHandlers() {
    key('w', () => {
      this.vel = [0, -6];
      // this.pos[1] -= 10;
      this.move();
    });

    key('s', () => {
      this.vel = [0, 6];
      // this.pos[1] += 10;
      this.move();
    });

    key('a', () => {
      this.vel = [-6, 0];
      // this.pos[0] -= 10;
      this.move();
    });

    key('d', () => {
      this.vel = [6, 0];
      // this.pos[0] += 10;

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

    switch(window.frames) {
      case 0:
      this.sX = 0;
      break;
      case 600:
      this.sX = 1200;
      break;
      case 1200:
      this.sX = 0;
      window.frames = 0;
      break;
      default:
      break;
    }
    if (window.frames > 1200){
      window.frames = 0;
    }

    this.ctx.drawImage(this.image, this.sX, 0, 1200, 1200, this.pos[0] - 125 , this.pos[1] - 90 , 250, 250);
  }



  fireBullet() {

    const bullet = new Bullet( {pos: this.pos, vel: [0,-6], ctx: this.ctx, game: this.game } );
    this.game.add(bullet);
  }


}




export default Goku;
