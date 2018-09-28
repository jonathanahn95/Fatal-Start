class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = 'assets/fatal_start.jpg';
    this.image.onload = () => {
      ctx.drawImage(this.image, 0, 0, 800, 600);
    };

  }

  draw(ctx) {
    ctx.drawImage(this.image,0, 0, 800, 600);
  }

}

export default Background;
