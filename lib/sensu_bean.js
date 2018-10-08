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
}

export default SensuBean;
