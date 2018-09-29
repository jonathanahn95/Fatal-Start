import MovingObject from './moving_object';
import Goku from './goku';

class Bullet extends MovingObject {
    constructor(options){
      options.radius = 4;

      super(options);
    }

    move(){
      this.pos[0] += this.vel[0];
      this.pos[1] += this.vel[1];
    }

    // draw(ctx) {
    //   ctx.beginPath();
    //   ctx.arc( this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);
    //   ctx.fillStyle = "red";
    //   ctx.fill();
    // }


}


// Bullet.SPEED = 10;

export default Bullet;
