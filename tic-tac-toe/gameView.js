export default class Gameview {

    constructor() {
        console.log("gameview init")
    }

    updateBoard(game) {

        this.changeTurn(game);
        
        for (let i = 0; i < game.board.length; i++) {
            let tile = document.querySelector(`.tile[data-index="${i}"]`)
            tile.innerHTML = game.board[i];
        }

        this.displayWinner(game);
    }

    changeTurn(game) {

        document.querySelector(".x-turn").classList.remove("highlight");
        document.querySelector(".o-turn").classList.remove("highlight");

        if (game.turn == "X") {
            document.querySelector(".x-turn").classList.add("highlight");
        }
        if (game.turn == "O") {
            document.querySelector(".o-turn").classList.add("highlight");
        }
    }

    displayWinner(game) {

        const win = document.querySelector(".winner");
        const boardContainer = document.querySelector(".board-container");
        const winnerName = document.querySelector(".winner h1")

        boardContainer.classList.remove("opaque");
        win.style.display = "none";

        if (game.endOfGame()) {
            boardContainer.classList.add("opaque");
            win.style.display = "block";
            winnerName.textContent = `${game.turn} IS WINNER`;
        }
    }

}