let game = {
	score: 0,
	currentGame: [],
	playerMoves: [],
	choices: ["button1", "button2", "button3", "button4"],
};

function newGame() {
	game.score = 0;
	game.playerMoves = [];
	game.currentGame = [];
	showScore();
	addTurn();
};

function addTurn() {
	game.playerMoves = [];
	game.currentGame.push(game.choices[Math.floor(Math.random() * game.choices.length)]);
	// showTurns();
}

function showScore() {
	document.getElementById("score").innerText = game.score;
}

// ricorda sempre di esportare gli elementi da testare
module.exports = {game, newGame, showScore, addTurn};