class Hp {
  constructor(player){
    this.player = player;
  }

  draw(ctx) {

    // if (this.player.lives === 1) {
      ctx.fillText("HP: "+this.player.lives , 750, 40);
    //   ctx.fillRect(770,20,150,100);
    // } else {
    //   ctx.fillText("HP: "+this.player.lives , 750, 40);
    //   ctx.fillRect(770,20,100,100);
    // }

    // ctx.strokeStyle="red";
    // ctx.font = "36px Saiyan Sans";
    // ctx.fillStyle = "yellow";
    // ctx.stroke();

  }
}

export default Hp;
