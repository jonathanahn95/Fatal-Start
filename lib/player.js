import Character from './character';
import Bullet from './bullet';
import * as Util from './util';

class Player extends Character {
  constructor(options) {
    options.radius = 100;
    super(options);
    this.game = options.game;
    this.bindKeyHandlers();
  }

  bindKeyHandlers() {
    key('w', () => {
      this.vel = [0, -3];
      this.move();
    });

    key('s', () => {
      this.vel = [0, 3];
      this.move();
    });

    key('a', () => {
      this.vel = [-3, 0];
      this.move();
    });

    key('d', () => {
      this.vel = [3, 0];
      this.move();
    });

    key('j', () => {
      this.fireBullet();
    });
  }

  fireBullet() {

    const relVel = Util.scale(
      Util.dir(this.vel),
      Bullet.SPEED
    );

    const bulletVel = [
      relVel[0] + this.vel[0], relVel[1] + this.vel[1]
    ];
    debugger
    const bullet = new Bullet( {pos: this.pos, vel: bulletVel} );
    this.game.add(bullet);
  }

}




export default Player;
