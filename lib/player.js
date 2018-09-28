import Character from './character';
class Player extends Character {
  constructor(options) {
    options.radius = 100;
    super(options);

    this.sprite = new Image();

    this.bindKeyHandlers();
  }

 bindKeyHandlers() {
  key('up', () => {
    this.vel = [0, -3];
    this.move();
  });

  key('down', () => {
    this.vel = [0, 3];
    this.move();
  });

  key('left', () => {
    this.vel = [-3, 0];
    this.move();
  });

  key('right', () => {
    this.vel = [3, 0];
    this.move();
  });
}

}




export default Player;
