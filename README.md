# Fatal-Start  
[Live!](http://fatal-start.jonahn.io/)

![alt text](https://github.com/jonathanahn95/Fatal-Start/blob/master/assets/images/git_pic.png "Logo Title Text 1")

Fatal-Start is a side-scroller browser game inspired by the classic tv series Dragon Ball Z. The objective of the game is to help Goku defeat the enemies and survive as long as possible.

## Technologies Used
Fatal-Start is built using ES6 syntax JavaScript and HTML5 canvas to render elements onto the screen. At every requestAnimationFrame, the canvas is cleared of all elements on the screen and re-draws them based on their new coordinates.


## Features
### Enemy Movements
Enemy movements are calculated by incrementing or decrementing the current enemies `position` by its own `velocity` depending on Goku's `position`.

```javascript
  move(){
    if (this.goku.pos[0] > this.pos[0]) {
      this.pos[0] += this.vel[0];
    }
    else if (this.goku.pos[0] < this.pos[0]) {
      this.pos[0] -= this.vel[0];
    }
     if (this.goku.pos[1] > this.pos[1]) {
      this.pos[1] += this.vel[1];
    }
    else if (this.goku.pos[1] < this.pos[1]) {
      this.pos[1] -= this.vel[1];
    }

    this.pos = this.game.wrap(this.pos);
    window.frames1 += 1;
  }
```
### Goku
Bullets are calculated by decrementing the `score` by one any time a player fires a `bullet`. Depending on whether Goku is in normal form or super-saiyan will determine the type of `bullets` that will shoot.
``` javascript
  fireBullet() {
    if (this.score.score != 0){
      if (this.score.points >= 1750){
        const spirtBomb = new SpirtBomb( {pos: this.pos, vel: [0,-6], ctx: this.ctx, game: this.game } );
        this.game.add(spirtBomb);
      } else {
        const bullet = new Bullet( {pos: this.pos, vel: [0,-6], ctx: this.ctx, game: this.game } );
        this.game.add(bullet);
      }
      this.score.score -= 1;
    }
  }
  ```
  
 ### Key Handlers
 Fatal-Start uses Keymaster, which is a simple micro-library for defining and dispatching keyboard shortcuts in web applications. It stores a global master `key` on the window and allows it to be called inside `bindKeyHandlers` so whenever a specfic `key` is pressed, the callback occurs.


 ```javascript
   bindKeyHandlers() {
    key('w', () => {
      this.vel = [0, -6];
      this.move();
    });

    key('s', () => {
      this.vel = [0, 6];
      this.move();
    });

    key('a', () => {
      this.vel = [-6, 0];
      this.move();
    });

    key('d', () => {
      this.vel = [6, 0];
      this.move();
    });

    key('j', () => {
      this.fireBullet();
    });
  }
```
  
 

## Future Implementation

### Sprites
Add sprite animations for when objects collide and smoother transition for Goku turning super-saiyan.

### High Score
Implement Google Firebase to keep track of highest scores.

### Additional Features
Increase number of enemies from tv-series and add more abilities for Goku.
