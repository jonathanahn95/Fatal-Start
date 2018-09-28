// import MovingObject from './moving_object';
import Game from './game';
import GameView from './game_view';
// import Character from './character';


document.addEventListener("DOMContentLoaded", () => {

  window.frames = 0;
  const canvasEl = document.getElementById('canvas');
  const ctx = canvasEl.getContext('2d');


  // const game = new Game(ctx);
  // const char = new Character();
  // char.drawChar(ctx);

  const game = new Game(ctx);
  new GameView(game, ctx).start();

});




//   const mo = new MovingObject(  { pos: [280, 280], vel: [10, 10], radius: 5, color: "#00FF00"}
// );
//   mo.draw(ctx);
