class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = 'assets/wall.jpg';
    this.image.onload = () => {
      ctx.drawImage(this.image, 0, 0, 600, 800);
    };
    this.scrollVal = 0;
  }

  draw(ctx) {

    if (this.scrollVal >= 600){
      this.scrollVal = 0;
    }
    this.scrollVal += 6;
    // ctx.drawImage(this.image, 0, -this.scrollVal, 600, 800);
    // ctx.drawImage(this.image,600, 600- this.scrollVal, 600, 800);
    ctx.drawImage(this.image,0, 0, 600, 800);

  }

}

export default Background;
