const MovingObject = require('./moving_object');
const Util = require('./utils.js');


function Bullet(options){
  // this.vel
  options.radius = Bullet.RADIUS;
  options.color = Bullet.COLOR;

  MovingObject.call(this, options);
}

Bullet.RADIUS = 2;
Bullet.COLOR = "#02010b";

Util.inherits(Bullet, MovingObject);
