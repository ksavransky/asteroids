const Game = require('./game.js');
const key = require('./keymaster.js');

function GameView(game, ctx){
  this.game = game;
  this.ctx = ctx;
}

GameView.prototype.start = function(){

  const self = this;
  this.bindKeyHandlers();
  setInterval(() => {
    self.game.draw(self.ctx);
    self.game.step();
  }, 20);

};

GameView.prototype.bindKeyHandlers = function(){
  self = this;
  key('w', function(){ self.game.ship.power([0,-1*0.5]) });
  key('a', function(){ self.game.ship.power([-1*0.5,0]) });
  key('s', function(){ self.game.ship.power([0,1*0.5]) });
  key('d', function(){ self.game.ship.power([1*0.5,0]) });
};

module.exports = GameView;
