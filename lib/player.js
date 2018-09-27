import Character from './character';

class Player extends Character {
  constructor(options) {
    options.radius = 100;
    super(options);
  }

  move() {
    
  }
}

export default Player;
