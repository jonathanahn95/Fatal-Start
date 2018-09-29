import * as Util  from "./util";

const DEFAULTS = {
  COLOR: "#505050",
  RADIUS: 25,
  // SPEED: 8
};

class Character  {
  constructor(options){
    this.pos = options.pos;
    this.vel = options.vel || [0, 3];
    this.radius = options.radius || DEFAULTS.RADIUS;
    this.color = DEFAULTS.COLOR;
    this.game = options.game;
    this.ctx = options.ctx;
    this.sX = 0;
    this.image = new Image();
    this.image.src = 'assets/dragonball2.png';
    this.image.onload= () => {
      this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
    };
  }

  draw(ctx) {
    this.ctx.drawImage(this.image, this.sX, 0, 1200, 1200, this.pos[0] - 30 , this.pos[1] - 10 , 230, 230);

  }

  collideWith(otherObj) {

    otherObj.remove();
  }

  move(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    window.frames += 30;

  }

  remove() {
    this.game.remove(this);
  }

  isCollidedWith(otherObj) {
     const centerDist = Util.dist(this.pos, otherObj.pos);
     return centerDist < this.radius + otherObj.radius;
   }
}

export default Character;
