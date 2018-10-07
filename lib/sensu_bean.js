import MovingObject from './moving_object';
class SensuBean extends MovingObject {
  constructor(options){
    super(options);
    this.pos = options.pos;
    this.vel = options.vel;
    this.isWrappable = false;
    this.image = new Image();
    this.game = options.game;
    this.image.src = 'assets/images/sensju.jpg';


  }

  draw(ctx) {
    this.ctx.drawImage(this.image, this.sX, 0, 1200, 1200, this.pos[0] - 50 , this.pos[1] - 30 , 250, 250);
  }


  move(){
    this.pos[0] += this.vel[0];
    this.pos[1] += Math.abs(this.vel[1]);

    if (this.game.isOutOfBounds(this.pos)) {
       if (this.isWrappable) {
         this.pos = this.game.wrap(this.pos);
       } else {
         this.remove();
       }
     }

  }
}

export default SensuBean;
