import MovingObject from './moving_object';

class Bullet extends MovingObject {
    constructor(options){
      options.radius = 5;
      super(options);
    }
}


export default Bullet;
