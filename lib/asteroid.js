const Util = require("./utils.js");
const MovingObject = require("./moving_object.js");
// const Game = require('./game.js');
const Ship = require("./ship.js");

function Asteroid(options){
  options.color = Asteroid.COLOR;
  options.radius = Asteroid.RADIUS;
  options.vel = Util.randomVec(10);
  // console.log(options)
  MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function(otherObject){
  if (otherObject instanceof Ship){
    otherObject.relocate();
  }
};

Asteroid.COLOR = "#ff0000";
Asteroid.RADIUS = 20;

module.exports = Asteroid;
