class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = 'assets/wall.jpg';
    this.image.onload = () => {
      ctx.drawImage(this.image, 0, 0, 1000, 800);
    };
    this.frames = 0;
  }

  draw(ctx) {

    if (this.frames >= 1000){
      this.frames = 0;
    }
    this.frames += 6;
    // ctx.drawImage(this.image,0,  -this.frames,600, 800);
    // ctx.drawImage(this.image,0,600 - this.frames, 600, 800);

    ctx.drawImage(this.image,0, 0, 1000, 800);

  }

}

export default Background;
