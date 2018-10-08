import DragonBall from './dragon_ball';
import MovingObject from './moving_object';
import * as Util  from "./util";
import Bullet from './bullet';


class SpirtBomb extends Bullet {
  constructor(options){
    options.radius = 50;
    super(options);
    this.pos = options.pos;
    this.vel = options.vel;
    this.ctx = options.ctx;
    this.isWrappable = false;
    this.game = options.game;
    this.image = new Image();
    this.image.src = './assets/images/spirit-bomb.jpg';
    this.image.onload= () => {
      this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
    };
  }

  draw(ctx) {
    this.ctx.drawImage(this.image, this.sX, 0, 1000, 1000, this.pos[0] - 50  , this.pos[1] - 70 , 650, 650);
  }
}



export default SpirtBomb;
