import Game from './game.js'
import GameView from './gameView.js';

let game = new Game();
let gameView = new GameView();

const tiles = document.querySelectorAll(".tile");
const newGame = document.querySelector(".start");

tiles.forEach(tile => {

    tile.addEventListener('click', () => {

        game.makeMove(tile.dataset.index);
        gameView.updateBoard(game);
    });
});

newGame.addEventListener('click', () => {

    game = new Game();
    gameView.updateBoard(game);
});