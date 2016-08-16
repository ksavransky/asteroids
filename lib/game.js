const Asteroid = require('./asteroid');
const Ship = require('./ship');

function Game() {
  this.asteroids = [];
  this.addAsteroids();
  this.ship = new Ship({game: this});
}

Game.DIM_X = 800;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 10;

Game.prototype.addAsteroids = function() {
  while (this.asteroids.length < Game.NUM_ASTEROIDS){
    this.asteroids.push(new Asteroid({pos: this.randPos(), game: this}));
  }
};

Game.prototype.allObjects = function(){
  return this.asteroids.concat([this.ship]);
};

Game.prototype.randPos = function(){
  let x = Game.DIM_X * Math.random();
  let y = Game.DIM_Y * Math.random();
  return [x, y];
};

Game.prototype.draw = function(ctx){
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  this.allObjects().forEach( asteroid => asteroid.draw(ctx));
};

Game.prototype.moveObjects = function(){
  this.allObjects().forEach( asteroid => asteroid.move());
};

Game.prototype.checkCollisions = function(){
  this.allObjects().forEach(asteroid => {
    this.allObjects().forEach(otherAsteroid => {
        if (asteroid.isCollidedWith(otherAsteroid) && asteroid !== otherAsteroid){
          asteroid.collideWith(otherAsteroid);
        }
    });
  });
};

Game.prototype.wrap = function(pos){
  let x = pos[0];
  let y = pos[1];

  if(pos[0] < 0){
    x = Game.DIM_X;
  }
  else if (pos[0] > Game.DIM_X){
    x = 0;
  }

  if(pos[1] < 0){
    y = Game.DIM_Y;
  }
  else if(pos[1] > Game.DIM_Y){
    y = 0;
  }
  return [x, y];
};

Game.prototype.step = function(){
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.remove = function(asteroid){
    this.asteroids.splice(this.asteroids.indexOf(asteroid), 1);
};

module.exports = Game;
