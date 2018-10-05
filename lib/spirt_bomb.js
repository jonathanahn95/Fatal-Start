import DragonBall from './dragon_ball';
import MovingObject from './moving_object';
import * as Util  from "./util";


class SpirtBomb extends MovingObject {
    constructor(options){
      options.radius = 60;
      super(options);
      this.pos = options.pos;
      this.vel = options.vel;
      this.ctx = options.ctx;
      this.isWrappable = false;
      this.game = options.game;
      this.image = new Image();
      this.image.src = 'assets/blast.jpg';
      this.image.onload= () => {
        this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
      };
    }

    move(){
      this.pos[0] += this.vel[0];
      this.pos[1] += this.vel[1];
    }

    draw(ctx) {
      this.ctx.drawImage(this.image, this.sX, 0, 400, 400, this.pos[0] - 50 , this.pos[1] - 30 , 550, 250);
    }


}



export default SpirtBomb;