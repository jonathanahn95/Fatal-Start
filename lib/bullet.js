import DragonBall from './dragon_ball';
import MovingObject from './moving_object';
import * as Util  from "./util";

class Bullet extends MovingObject {
  constructor(options){
    options.radius = 20;
    super(options);
    this.pos = options.pos;
    this.vel = options.vel;
    this.ctx = options.ctx;
    this.isWrappable = false;
    this.game = options.game;
    this.image = new Image();
    this.image.src = 'assets/images/blast1.jpg';
    this.image.onload= () => {
      this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
    };
  }

  move(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    if (this.game.isOutOfBounds(this.pos)) {
       if (this.isWrappable) {
         this.pos = this.game.wrap(this.pos);
       } else {
         this.remove();
       }
     }
  }

  draw(ctx) {
    this.ctx.drawImage(this.image, this.sX, 0, 1200, 1200, this.pos[0] - 20 , this.pos[1] - 30 , 250, 250);
  }


}



export default Bullet;
