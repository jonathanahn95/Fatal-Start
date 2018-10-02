import DragonBall from './dragon_ball';

class Bullet extends DragonBall {
    constructor(options){
      options.radius = 60;
      super(options);
      this.pos = options.pos;
      this.vel = options.vel;
      this.ctx = options.ctx;
      this.game = options.ctx;
    }

    move(){
      this.pos[0] += this.vel[0];
      this.pos[1] += this.vel[1];
    }

    draw(ctx) {
      ctx.save();
      ctx.beginPath();
      ctx.arc( this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.restore();
    }

    remove(){
      debugger
      this.game.remove(this);
    }

    collideWith(otherObj) {
      debugger
      otherObj.remove();
    }
}



export default Bullet;
