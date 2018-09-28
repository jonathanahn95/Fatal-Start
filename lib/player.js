import Character from './character';
class Player extends Character {
  constructor(options) {
    options.radius = 100;
    super(options);

    this.sprite = new Image();

    // this.keyDownHandler();
    this.bindKeyHandlers();
  }
  move() {

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


Player.MOVES = {
  w: [0, -1],
  a: [-1, 0],
  s: [0, 1],
  d: [1, 0],
};


// document.addEventListener('keydown', keyDownHandler, false);
// document.addEventListener('keyup', keyUpHandler, false);
//
//
// function keyDownHandler(e) {
//   if(e.keyCode == 39) {
//       window.rightPressed = true;
//   }
//   else if(e.keyCode == 37) {
//       window.leftPressed = true;
//   }
// }
//
// function keyUpHandler(e) {
//   if(e.keyCode == 39) {
//       window.rightPressed = false;
//   }
//   else if(e.keyCode == 37) {
//       window.leftPressed = false;
//   }
// }
export default Player;
