const MovingObject = require('./moving_object.js');
const Util = require('./utils.js');

function Ship (options = {}){
  options.color = Ship.COLOR;
  options.radius = Ship.RADIUS;
  options.vel = [0,0];
  options.pos = [400, 300];
  MovingObject.call(this, options);
}
Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function(){
  this.pos = this.game.randPos();
  this.vel = [0,0];
};

Ship.prototype.power = function(impulse){
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
};


Ship.COLOR = "#2200ff";
Ship.RADIUS = 10;

module.exports = Ship;
