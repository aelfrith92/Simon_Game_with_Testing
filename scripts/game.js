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
};

// ricorda sempre di esportare gli elementi da testare
module.exports = {game, newGame};