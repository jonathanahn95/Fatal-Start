class GameOver {
  constructor(options){
    this.goku = options.game.goku;
    this.points = options.game.score.points;
    this.dragonBalls = options.game.score.dragonBalls;

    this.image = new Image();
    this.image.src = 'assets/images/reg_goku.png';
    this.superGoku = new Image();
    this.superGoku.src = 'assets/images/supersaiyan-goku.png';

  }

  draw(ctx) {
    ctx.font = "36px Impact";
    ctx.fillStyle = "yellow";
    ctx.fillText("Dragon-Basdasdasdalls: "+this.dragonBalls , 325, 40);
    ctx.fillText("HP: "+this.goku.lives , 750, 40);
    ctx.fillText("Score: "+this.points ,15, 40);
    ctx.fillText("Press N to play again: ",400, 40);


    ctx.drawImage(this.superGoku, this.sX , 0, 800, 800, 350, 340 , 700, 700);

  }
}

export default GameOver;
