import Game from './game';
import GameView from './game_view';


document.addEventListener("DOMContentLoaded", () => {

  window.frames = 0;
  window.frames1 = 0;
  const canvasEl = document.getElementById('canvas');
  const ctx = canvasEl.getContext('2d');



  const game = new Game(ctx);
  new GameView(game, ctx).start();

});
