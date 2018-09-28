import * as Util  from "./util";

const DEFAULTS = {
  COLOR: "#505050",
  RADIUS: 25,
  SPEED: 2
};

class Character  {
  constructor(options){
    this.pos = options.pos;
    this.vel = options.vel || [0, 5];
    this.radius = options.radius || DEFAULTS.RADIUS;
    this.color = DEFAULTS.COLOR;
    this.game = options.game;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc( this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);
    ctx.fillStyle = "blue";
    ctx.fill();
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
