import * as Util  from "./util";

const DEFAULTS = {
  COLOR: "#505050",
  RADIUS: 25,
};


class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel || Util.randomVec(2);
    this.radius = options.radius || DEFAULTS.RADIUS;
    this.color = DEFAULTS.COLOR;
    this.game = options.game;
    this.ctx = options.ctx;
    this.sX = 0;
    this.isWrappable = true;
  }

  draw(ctx) {

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

  isCollidedWith(otherObj) {
     const centerDist = Util.dist(this.pos, otherObj.pos);
     return centerDist < this.radius + otherObj.radius;
   }

   collideWith(otherObj) {
     otherObj.remove();
   }

}



export default MovingObject;
