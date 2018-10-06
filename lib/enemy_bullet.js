import DragonBall from './dragon_ball';
import MovingObject from './moving_object';
import * as Util  from "./util";


class EnemyBullet extends MovingObject {
    constructor(options){
      options.radius = 20;
      super(options);
      this.pos = options.pos;
      this.vel = options.vel;
      this.ctx = options.ctx;
      this.isWrappable = false;
      this.game = options.game;
      this.image = new Image();
      this.image.src = 'assets/enemy_bullet.png';
      this.image.onload= () => {
        this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
      };
    }

    move(){
      this.pos[0] += this.vel[0];
      this.pos[1] += Math.abs(this.vel[1]);
      if (this.game.isOutOfBounds(this.pos)) {
         debugger
         if (this.isWrappable) {
           debugger
           this.pos = this.game.wrap(this.pos);
         } else {
           debugger
           this.remove();
         }
       }

    }


    draw(ctx) {
      this.ctx.drawImage(this.image, this.sX, 0, 1200, 1200, this.pos[0] - 20 , this.pos[1] - 10 , 250, 250);
    }


}



export default EnemyBullet;
