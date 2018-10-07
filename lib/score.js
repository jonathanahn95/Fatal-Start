class Score {
  constructor(score){
    this.score = score;
    this.points = 0;
  }

  draw(ctx) {
    ctx.fillText("Dragon-Balls: "+this.score , 325, 40);
    ctx.font = "36px Impact";
    ctx.fillStyle = "yellow";
    ctx.fillText("Score: "+this.points ,15, 40);
    this.points++;
  }
}

export default Score;
