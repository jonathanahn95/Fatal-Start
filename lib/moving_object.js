import * as Util  from "./util";

const DEFAULTS = {
  COLOR: "#d1472b",
  RADIUS: 7,
  SPEED: 7
};

class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.pos || [-5,0];
    this.radius = options.radius || DEFAULTS.RADIUS;
    this.color = DEFAULTS.COLOR;
  }



  draw(ctx) {
    ctx.beginPath();
    ctx.arc( this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);
    ctx.fillStyle = "red";
    ctx.fill();
  }


  move(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }
}



export default MovingObject;
