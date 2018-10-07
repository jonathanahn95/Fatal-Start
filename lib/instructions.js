
class Instructions {
  constructor(options){
    this.ctx = options.ctx;
    this.goku = options.goku;
    this.image = new Image();
    this.image.src = 'assets/images/aura_goku.png';
    this.text = new Image();
    this.text.src = 'assets/images/intro_text.png';
  }

  draw(ctx) {
      ctx.clearRect(0,0, 900, 600);
      ctx.fillStyle = 'yellow';
      this.ctx.fillRect(0,0,900,600);
      this.ctx.drawImage(this.text, 10, 10);
      this.ctx.drawImage(this.image, 300, 10);
  }




}

export default Instructions;
