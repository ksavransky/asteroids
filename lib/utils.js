
const Util = {
  inherits (Child, Parent){
    let Surrogate = function(){};
    Surrogate.prototype = Parent.prototype;
    Child.prototype = new Surrogate();
    Child.prototype.constructor = Child;
  }
};

Util.randomVec = function(length){
  let x = Math.random() * length;
  let y = Math.random() * length;
  let xMult = Math.random() > 0.5 ? -1 : 1;
  let yMult = Math.random() > 0.5 ? -1 : 1;

  return [(x * xMult), (y * yMult)];
};



module.exports = Util;
