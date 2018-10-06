
class GameView {
  constructor(game, ctx){
    this.game = game;
    this.ctx = ctx;
  }

  start() {
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
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
