import * as Util  from "./util";
import MovingObject from "./moving_object";

const DEFAULTS = {
  COLOR: "#505050",
  RADIUS: 25,
  SPEED: 4
};

class Character  {
  constructor(options){
    options = options;
    this.pos = options.pos;
    this.vel = Util.randomVec(DEFAULTS.SPEED);
    this.radius = options.radius || DEFAULTS.RADIUS;
    this.color = DEFAULTS.COLOR;
    this.game = options.game;
 //    this.sprite = new Image();
 //   this.sprite.src = 'assets/enemy.jpg';
 //   this.sprite.onload = () => {
 //     this.ctx.drawImage(this.sprite, this.pos[0], this.pos[1]);
 // };

  }

  draw(ctx) {
    // ctx.drawImage(this.sprite, this.pos[0], this.pos[1], 60, 60);
    ctx.beginPath();
    ctx.arc( this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);
    ctx.fillStyle = "blue";
    ctx.fill();
  }

  move(){
    // this.pos = this.game.wrap(this.pos);
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }

  // collideWith(otherObj) {
  //   // default do nothing
  // }
  //
  // // have collided with if distance between their center points is
  // // less then the sum of their radii
  // isCollidedWith(otherObj) {
  //   // debugger
  //   const centerDist = Util.dist(this.pos, otherObj.pos);
  //   return centerDist < (this.radius - otherObj.radius);
  // }
}

export default Character;
