const Game = require("./game.js");

function MovingObject(options){
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
}

MovingObject.prototype.draw = function(ctx){
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

MovingObject.prototype.move = function(){
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  if (this.pos[0] < 0 || this.pos[0] > this.game.constructor.DIM_X || this.pos[1] < 0 || this.pos[1] > this.game.constructor.DIM_Y){
    this.pos = this.game.wrap(this.pos);
  }
};

MovingObject.prototype.isCollidedWith = function(otherObject){
  let distance = Math.sqrt(Math.pow((this.pos[0] - otherObject.pos[0]), 2)
                + Math.pow((this.pos[1] - otherObject.pos[1]), 2));
  return (distance < (this.radius + otherObject.radius));
};

// MovingObject.prototype.collideWith = function(otherObject) {
//   // this.game.remove(otherObject);
//   // this.game.remove(this);
// };




module.exports = MovingObject;
