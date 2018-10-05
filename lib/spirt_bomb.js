import DragonBall from './dragon_ball';
import MovingObject from './moving_object';
import * as Util  from "./util";


class SpirtBomb extends MovingObject {
    constructor(options){
      options.radius = 20;
      super(options);
      this.pos = options.pos;
      this.vel = options.vel;
      this.ctx = options.ctx;
      this.isWrappable = false;
      this.game = options.game;
      this.image = new Image();
      this.image.src = './assets/spirit-bomb.jpg';
      this.image.onload= () => {
        this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
      };
    }

    move(){
      this.pos[0] += this.vel[0];
      this.pos[1] += this.vel[1];
    }

    draw(ctx) {
      this.ctx.drawImage(this.image, this.sX, 0, 400, 400, this.pos[0] - 50 , this.pos[1] + 120 , 550, 250);
      this.ctx.arc(410,270,5,-130,2*Math.PI);
      this.ctx.stroke();
    }


}



export default SpirtBomb;
