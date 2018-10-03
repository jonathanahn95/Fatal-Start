import DragonBall from './dragon_ball';
import Bullet from './bullet';
import MovingObject from './moving_object';
import * as Util from './util';

class Enemy extends MovingObject {
  constructor(options) {
    options.radius = 60;
    options.vel = [0, 0.7];
    super(options);
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
  }

  move(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }

  draw(ctx) {
    this.ctx.drawImage(this.image, this.sX, 0, 1200, 1200, this.pos[0] - 125 , this.pos[1] - 90 , 650, 650);
  }

  remove(){
    this.game.remove(this);
  }


  collideWith(otherObj) {
    otherObj.remove();
  }



}




export default Enemy;
