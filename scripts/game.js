let game = {
	score: 0,
	currentGame: [],
	playerMoves: [],
	choices: ["button1", "button2", "button3", "button4"],
	turnNumber: 0,
};

function newGame() {
	game.score = 0;
	game.playerMoves = [];
	game.currentGame = [];
	game.turnNumber = 0;

	for (let circle of document.getElementsByClassName("circle")) {
		if (circle.getAttribute("data-listener") !== "true") {
			circle.addEventListener("click", (e) => {
				let move = e.target.getAttribute("id");
				lightsOn(move);
				game.playerMoves.push(move);
				playerTurn();
			});
			circle.setAttribute("data-listener", "true");
		}
	}
	showScore();
	addTurn();
};

function addTurn() {
	game.playerMoves = [];
	game.currentGame.push(game.choices[Math.floor(Math.random() * game.choices.length)]);
	showTurns();
}

function lightsOn(circ){
	document.getElementById(circ).classList.add("light");
	setTimeout(() => {
		document.getElementById(circ).classList.remove("light");
	}, 400);
}

function showScore() {
	document.getElementById("score").innerText = game.score;
}

function showTurns() {
	game.turnNumber = 0;
	// set the interval, which allows a little bit of time to pass between instructions
	let turns = setInterval (() => {
		// turn lights on
		lightsOn(game.currentGame[game.turnNumber]);
		// increments the turnNumber and turns it off once
		game.turnNumber++;
		if (game.turnNumber >= game.currentGame.length) {
			clearInterval(turns);
		}
	}, 800);
}

function playerTurn() {
	let i = game.playerMoves.length - 1;
	if (game.currentGame[i] === game.playerMoves[i]) {
		if (game.currentGame.legth == game.playerMoves.legth) {
			game.score++;
			showScore();
			addTurn();
		}
	} else {
		alert("Wrong move!");
		newGame();
	}
}

// ricorda sempre di esportare gli elementi da testare
module.exports = {game, newGame, showScore, addTurn, lightsOn, showTurns, playerTurn };