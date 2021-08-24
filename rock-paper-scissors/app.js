const game = () => {
    let pScore = 0;
    let cScore = 0;
    document.querySelector(".rock").addEventListener("click",() => {
        playMatch("rock");
        document.querySelector('#phand').src = 'rock.png';
    });
    document.querySelector(".paper").addEventListener("click",() => {
        playMatch("paper");
        document.querySelector('#phand').src = 'paper.png';
        
    });
    document.querySelector(".scissors").addEventListener("click",() => {
        playMatch("scissors");
        document.querySelector('#phand').src = 'scissors.png';
    });

    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click",() => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });

    };

    const playMatch = (playerChoice) => {
        const playerHand = document.querySelector("#phand");
        const compHand = document.querySelector("#chand");
        const compChoice = getCompChoice();
        compareHands(playerChoice,compChoice);
        compHand.src = `${compChoice}.png`;
    }

    const getCompChoice = () => {
        const compOptions = ["rock","paper","scissors"];
        const compNum = Math.floor(Math.random()*3);
        return compOptions[compNum];
    } 

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const compScore = document.querySelector(".comp-score p");
        playerScore.textContent = pScore;
        compScore.textContent = cScore;
    }

    const compareHands = (playerChoice,compChoice) => {
        const winner = document.querySelector(".winner");
        if(playerChoice === compChoice){
            winner.textContent = "It is TIE";
            return;
        }
        if(playerChoice === "rock"){
            if(compChoice === "scissors"){
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === "paper"){
            if(compChoice === "scissors"){
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === "scissors"){
            if(compChoice === "paper"){
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }
    }


    startGame();
    playMatch();
};

game();