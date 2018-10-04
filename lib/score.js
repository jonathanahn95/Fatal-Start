class Score {
  constructor(score){
    this.score = score;
  }

  draw(ctx) {

    ctx.fillText("dragonballs: "+this.score , 15, 40);
    ctx.font = "36px arial";
    ctx.fillStyle = "yellow";
  }
}

export default Score;
