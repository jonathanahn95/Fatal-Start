import DragonBall from './dragon_ball';
import MovingObject from './moving_object';
import * as Util  from "./util";
import EnemyBullet from './enemy_bullet';


class FreizaBullet extends EnemyBullet {
  constructor(options){
    options.radius = 20;
    super(options);
    this.pos = options.pos;
    this.vel = options.vel;
    this.ctx = options.ctx;
    this.isWrappable = false;
    this.game = options.game;
    this.image = new Image();
    this.image.src = './assets/images/spirit-bomb.jpg';
    this.image.onload= () => {
      this.ctx.drawImage(this.image, this.pos[0], this.pos[1]);
    };

  }

  draw(ctx) {
    this.ctx.drawImage(this.image, this.sX, 0, 1200, 1200, this.pos[0] - 50 , this.pos[1] - 30 , 250, 250);
  }
}



export default FreizaBullet;
