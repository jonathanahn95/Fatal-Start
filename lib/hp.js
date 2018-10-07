class Hp {
  constructor(player){
    this.player = player;
  }

  draw(ctx) {
    ctx.fillText("HP: "+this.player.lives , 750, 40);
  }
}

export default Hp;
