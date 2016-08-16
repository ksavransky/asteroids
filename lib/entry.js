const GameView = require("./game_view.js");
const Game = require("./game.js");

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("game-canvas");
  let ctx = canvas.getContext("2d");
  let gameview = new GameView(new Game(), ctx);
  gameview.start();
});
