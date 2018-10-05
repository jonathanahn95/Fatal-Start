class Score {
  constructor(score){
    this.score = score;
  }

  draw(ctx) {

    ctx.fillText("Dragon-Balls: "+this.score , 15, 40);
    ctx.font = "36px Impact";
    ctx.fillStyle = "yellow";
  }
}

export default Score;
