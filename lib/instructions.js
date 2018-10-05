
class Instructions {
  constructor(options){
    this.ctx = options.ctx;
    this.goku = options.goku;
    this.image = new Image();
    this.image.src = 'assets/super_goku.png';
    this.image.onload= () => {
      this.ctx.drawImage(this.image, this.goku.pos[0], this.goku.pos[1]);
    };
    debugger
  }

  draw(ctx) {
    debugger
    // console.log("ASD")
      ctx.clearRect(0,0, 900, 600);
      // this.ctx.drawImage(this.image, 0,0,800, 600);
      ctx.fillText("WOULD YOU LIKE TO TURN SUPER SAIYAN?" , 80, 60);
      ctx.fillText("PRESS Y" , 80, 140);
      ctx.font = "36px arial";
      ctx.fillStyle = "yellow";
      ctx.drawImage(this.image, 400, 400);

  }




}

export default Instructions;
