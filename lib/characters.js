const Util = require("./util");
const MovingObject = require("./moving_object");

const DEFAULTS = {
  COLOR: "#505050",
  RADIUS: 25,
  SPEED: 4
};

const MAIN_CHAR = {
  pos: [150,200],
  vel: [30, 40],
  radius: DEFAULTS.radius,
  color: DEFAULTS.color
};

class Character  {
  constructor(options){
    options = options || MAIN_CHAR;
    this.pos = options.pos;
    this.vel = Util.randomVec(DEFAULTS.speed);
    this.radius = DEFAULTS.radius;
    this.color = DEFAULTS.color;
    this.spriteImage = new Image();
    this.spriteImage.src = "assets/player.jpg";
  }



  randomPosition(){
    const x = 700 * Math.random();
    const y = 500 * Math.random();
    return [x, y];
  }

  draw(ctx) {
     ctx.clearRect(0, 0, 800, 300);
     const sprite = this.spriteImage;
     ctx.drawImage(
       sprite,
       0,
       0,
       150,
       150
     );
   }

  drawChar(ctx) {
    // ctx.fillStyle = 'green';
    // ctx.fillRect(10, 10, 100, 100);
    const canvasEl = document.getElementById('canvas');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let x = 150;
    let y = 550;
    let dx = 2;
    let dy = -2;
    ctx.beginPath();
    ctx.arc( x, y, 20, 0, 2*Math.PI, true);
    // ctx.strokeStyle = "green";
    // ctx.lineWidth = 5;
    // ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fill();
    x += dx;
    y += dy;
  }
}

module.exports = Character;
