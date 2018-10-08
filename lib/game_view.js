
class GameView {
  constructor(game, ctx){
    this.game = game;
    this.goku = game.goku;
    this.ctx = ctx;
    this.play = true;
    this.bindKeyHandlers();
  }


  bindKeyHandlers(){
    key('p', () => {
      this.changePlayBoolean();
   });

    key('n', () => {
      this.restartGame();
   });
  }

  changePlayBoolean(){
    if (this.play === true){
      this.play = false;
    } else {
      this.play = true;
      this.animate();
    }
  }

  start() {
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }


  animate(time) {
    if (this.play === true && this.goku.lives > 0){
      this.animateFrames(time);
    }
   }

   animateFrames(time) {
     const timeDelta = time - this.lastTime;
     this.game.step(timeDelta);
     this.game.draw(this.ctx);
     this.lastTime = time;
     // every call to animate requests causes another call to animate
     requestAnimationFrame(this.animate.bind(this));
   }
}



export default GameView;

//setTimeout example
// import Instructions from './Instructions';
//
//
// class GameView {
//   constructor(game, ctx){
//     this.game = game;
//     this.ctx = ctx;
//     this.instructions = new Instructions(this.ctx);
//   }
//
//   start() {
//     this.startInstructions(this.ctx);
//
//     setTimeout(() => {
//       this.lastTime = 0;
//       requestAnimationFrame(this.animate.bind(this));
//     }, 3000);
//   }
//
//   startInstructions(){
//     this.instructions.draw(this.ctx);
//   }
//
//
//   // setTimeout() {
//   //  setTimeout(() => {
//   //  const timeDelta = time - this.lastTime;
//   //  this.game.step(timeDelta);
//   //  this.game.draw(this.ctx);
//   //  this.lastTime = time;
//   //  // every call to animate requests causes another call to animate
//   //  requestAnimationFrame(this.animate.bind(this));
//   //  }, 20000);
//   // }
//
//
// }
//
//
//
// export default GameView;
