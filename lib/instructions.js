
class Instructions {
  constructor(options){
    this.ctx = options.ctx;
    this.goku = options.goku;
    this.image = new Image();
    this.image.src = 'assets/aura_goku.png';
    this.text = new Image();
    this.text.src = 'assets/intro_text.png';
    // this.image = new Image();
    // this.image.src = 'assets/super_goku.png';
    // this.image.onload= () => {
    //   this.ctx.drawImage(this.image, this.goku.pos[0], this.goku.pos[1]);
    // };

    debugger
  }

  draw(ctx) {
      ctx.clearRect(0,0, 900, 600);
      // this.ctx.drawImage(this.image, 350, 350,100, 100);
      // ctx.fillText("WOULD YOU LIKE TO TURN SUPER SAIYAN?" , 80, 60);
      // ctx.fillText("PRESS Y" , 80, 140);
      // ctx.font = "36px arial";
      // ctx.fillStyle = "yellow";

      // ctx.clearRect(0,0, 900, 600);
      ctx.fillStyle = 'yellow';
      // ctx.fillText('Welcome To Fatal Start', 300,60);
      // ctx.strokeText('asasdsad', 300, 100);
      this.ctx.fillRect(0,0,900,600);
      this.ctx.drawImage(this.text, -15, 10);
      this.ctx.drawImage(this.image, 310, 10);

  }




}

export default Instructions;
