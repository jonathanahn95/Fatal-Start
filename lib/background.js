class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = 'assets/road.jpg';
    this.image.onload = () => {
      ctx.drawImage(this.image, 0, 0, 600, 800);
    };

  }

  draw(ctx) {
    ctx.drawImage(this.image,0, 0, 600, 800);
  }

}

export default Background;
