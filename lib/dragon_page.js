
class DragonPage {
  constructor(options){
    this.ctx = options.ctx;
    this.goku = options.goku;

    this.image = new Image();
    this.image.src = 'assets/super_goku.png';
    this.image.onload= () => {
      this.ctx.drawImage(this.image, this.goku.pos[0], this.goku.pos[1]);
    };
  }

  draw(ctx) {
      ctx.clearRect(0,0, 900, 600);
      this.ctx.drawImage(this.image, 350, 350,100, 100);
      ctx.fillText("WOULD YOU LIKE TO TURN SUPER SAIYAN?" , 80, 60);
      ctx.fillText("PRESS Y" , 80, 140);
      ctx.font = "36px arial";
      ctx.fillStyle = "yellow";
      this.ctx.drawImage(this.image, this.sX, 0, 1200, 1200, this.pos[0] - 125 , this.pos[1] - 90 , 950, 1150);

  }




}

export default DragonPage;
