import DragonBall from './dragon_ball';
import Bullet from './bullet';
import * as Util from './util';

class Enemy extends DragonBall {
  constructor(options) {
    options.radius = 60;
    options.vel = [0, 0.7];
    super(options);
    this.ctx = options.ctx;
    this.pos = options.pos
    this.sX = 0;
    this.game = options.game;
    this.image = new Image();
    this.image.src = 'assets/freeza.jpg';
    this.image.onload= () => {
      this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
    };
    this.game = options.game;
  }

  move(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }

  draw() {
    this.ctx.drawImage(this.image, this.sX, 0, 1200, 1200, this.pos[0] - 125 , this.pos[1] - 90 , 250, 250);
  }

  remove(){
    this.game.remove(this);
  }

  isCollidedWith(otherObj) {
     debugger
     const centerDist = Util.dist(this.pos, otherObj.pos);
     return centerDist < this.radius + otherObj.radius;
   }

  collideWith(otherObj) {
    debugger
    if (otherObj instanceof Bullet){
      this.remove();
      otherObj.remove();
    }
  }



}




export default Enemy;
