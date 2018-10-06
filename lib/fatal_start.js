import Game from './game';
import GameView from './game_view';


document.addEventListener("DOMContentLoaded", () => {


  window.intro = false;

  const startGame = () => {
    window.frames = 0;
    window.frames1 = 0;
    const canvasEl = document.getElementById('canvas');
    const ctx = canvasEl.getContext('2d');

    const game = new Game(ctx);
    new GameView(game, ctx).start();
  };

  var modal = document.getElementById('myModal');
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user open browser, open the modal
  window.onload = function() {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };

  span.onclick = function(event) {
      modal.style.display = 'none';
      window.intro = true;
    if ( window.intro === true) {
        startGame();
      }
  };





});
