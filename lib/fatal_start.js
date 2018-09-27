const MovingObject = require('./moving_object');
const Game = require('./game');

const Character = require('./characters');


document.addEventListener("DOMContentLoaded", () => {

  window.MovingObject = MovingObject;
  const canvasEl = document.getElementById('canvas');
  const ctx = canvasEl.getContext('2d');


  const game = new Game(ctx);
//   const mo = new MovingObject(  { pos: [280, 280], vel: [10, 10], radius: 5, color: "#00FF00"}
// );
//   mo.draw(ctx);
  const char = new Character();
  char.drawChar(ctx);

});
