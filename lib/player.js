class Player {
  constructor(options) {
         this.image = new Image();
         this.image.src = "assets/player.jpg";
         this.width = 32.5;
         this.height = 55;
         this.X = 30;
         this.Y = 525;
         this.isWalking = false;
         this.jumpVel = 0;
         this.fallVel = 0;
     }

     setPos(x, y) {
       this.X = x;
       this.Y = y;
       }

       draw(ctx) {

   ctx.drawImage(this.image, this.X, this.Y, this.width, this.height);
   }


}
module.exports = Player;
