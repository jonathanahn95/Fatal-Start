import Character from './character';
import Bullet from './bullet';
import * as Util from './util';

class Player extends Character {
  constructor(options) {
    options.radius = 60;
    options.vel = [0,0];
    super(options);
    this.ctx = options.ctx;
    this.sX = 0;
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
      this.vel = [0, -3];
      // this.pos[1] -= 10;
      this.move();
    });

    key('s', () => {
      this.vel = [0, 3];
      // this.pos[1] += 10;
      this.move();
    });

    key('a', () => {
      this.vel = [-3, 0];
      // this.pos[0] -= 10;
      this.move();
    });

    key('d', () => {
      this.vel = [3, 0];
      // this.pos[0] += 10;

      this.move();
    });

    // key('j', () => {
    //   this.fireBullet();
    // });
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



  // fireBullet() {
  //   // const norm = Util.norm(this.vel);
  //   //
  //   // if (norm === 0){
  //   //   return;
  //   // }
  //   // const relVel = Util.dir(this.vel);
  //   const relVel = Util.scale(
  //     (Util.dir(this.vel), 4)
  //   );
  //   Util.test();
  //
  //
  //   const bulletVel = [
  //     relVel[0] + this.vel[0], relVel[1] + this.vel[1]
  //   ];
  //   const bullet = new Bullet( {pos: this.pos, vel: bulletVel} );
  //   this.game.add(bullet);
  // }
  //
  // move(){
  //   this.pos[0] += this.vel[0];
  //   this.pos[1] += this.vel[1];
  // }

}




export default Player;
