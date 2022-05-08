/**
* @jest-environment jsdom
*/
// importa un oggetto stavolta, non un intero documento
const { game, newGame } = require("../game"); 

beforeAll(() => {
	let fs = require("fs");
	let fileContents = fs.readFileSync("index.html", "utf-8");
	document.open();
	document.write(fileContents);
	document.close();
});

// Testing dell'oggetto 'game' presente nel file importato, proveniente da fgame.js
// In primis si testa la presenza o meno delle chiavi
describe("game object contains correct keys", () => {
	test("score key exists", () => {
		expect("score" in game).toBe(true);
	});
	test("currentGame key exists", () => {
		expect("currentGame" in game).toBe(true);
	});
	test("playerMoves key exists", () => {
		expect("playerMoves" in game).toBe(true);
	});
	test("playerMoves key exists", () => {
		expect("playerMoves" in game).toBe(true);
	});
	test("choices contain the correct ids", () => {
		expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
	});
});

describe("newGame works correctly", () => {
	beforeAll(() => {
		game.score = 42;
		game.playerMoves = ["button1", "button3"];
		game.currentGame = ["button2", "button3"];
		newGame();
	});
	test("should set game score to zero", () => {
		expect(game.score).toEqual(0);
	});
	test("should set playerMoves to empty array", () => {
		expect(game.playerMoves.length).toBe(0);
	});
	test("should set currentGame to empty array", () => {
		expect(game.currentGame.length).toBe(0);
	});
});