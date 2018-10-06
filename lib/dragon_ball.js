import * as Util  from "./util";
import MovingObject from './moving_object';

const DEFAULTS = {
  COLOR: "#505050",
  RADIUS: 25,
};


class DragonBall extends MovingObject  {
  constructor(options){

    super(options);
    this.isWrappable = false;
    this.image = new Image();
    this.score = options.score;
    this.image.src = 'assets/pix-drag.png';
    this.image.onload= () => {
      this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
    };
  }

  draw(ctx) {
    this.ctx.drawImage(this.image, this.sX, 0, 1200, 1200, this.pos[0] - 50 , this.pos[1] - 30 , 120, 120);
  }

  collideWith(otherObj) {
    this.score.score++;
    otherObj.remove();
  }

  remove() {
    this.game.remove(this);
  }

  isCollidedWith(otherObj) {
     const centerDist = Util.dist(this.pos, otherObj.pos);
     return centerDist < this.radius + otherObj.radius;
   }
}

export default DragonBall;
