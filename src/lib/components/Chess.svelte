<script>
	// @ts-nocheck
	import { base } from '$app/paths';
	import { Chess } from 'chess.js';
	import { onMount } from 'svelte';
	import init, { best_move } from 'rust';
	import { check_outros } from 'svelte/internal';

	export let AI = false;

	let canvas;
	let ctx;

	let images = {};

	let chess = new Chess();
	let pieceSelected = false;
	let selectedPiece = null;
	let selectedPosition = null;

	export let size = 800;
	let loadedCount = 0;

	let evoMatrix = [
		[1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[1, 1, 1, 1, 0, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1]
	];

	// preload images
	let imgNames = 'rbnqkpRBNQKP'.split('');
	let imgUrls = imgNames.map((name) => `${base}/chess/${name}.svg`);

	for (let imgName of imgNames) {
		images[imgName] = new Image();
		images[imgName].src = `${base}/chess/${imgName}.svg`;
		images[imgName].onload = () => {
			loadedCount++;
		};
	}

	function start() {
		canvas = document.getElementById('canvas');
		ctx = canvas.getContext('2d');
		chess = new Chess();

		drawBoard();
		drawPieces(chess.fen());
	}

	function resign() {
		winnerWinnerChickenDinner(true);
	}

	function winnerWinnerChickenDinner(resign) {
		if (resign) {
			let winner = chess.turn() != 'w' ? 'White' : 'Black';
			if (winner) {
				alert(`Game Over! ${winner} wins!`);
			}
		} else {
			let winner = chess.turn() != 'w' ? 'Black' : 'White';
			if (winner) {
				alert(`Game Over! ${winner} wins!`);
			}
		}

		chess = new Chess();
		let moves = document.getElementById('moves');
		moves.innerHTML = '';
		evoMatrix = [
			[1, 1, 1, 1, 1, 1, 1, 1],
			[1, 1, 1, 1, 1, 1, 1, 1],
			[0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0],
			[1, 1, 1, 1, 0, 1, 1, 1],
			[1, 1, 1, 1, 1, 1, 1, 1]
		];
		updateBoard();
	}

	function noWinnerWinnerChickenDinner() {
		alert(`Game Over! It's a draw!`);
		chess = new Chess();
		let moves = document.getElementById('moves');
		moves.innerHTML = '';
		evoMatrix = [
			[1, 1, 1, 1, 1, 1, 1, 1],
			[1, 1, 1, 1, 1, 1, 1, 1],
			[0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0],
			[1, 1, 1, 1, 0, 1, 1, 1],
			[1, 1, 1, 1, 1, 1, 1, 1]
		];
		updateBoard();
	}

	// Draw chessboard
	function drawBoard() {
		// draw board to canvas
		// @ts-ignore
		for (let i = 0; i < 8; i++) {
			for (let j = 0; j < 8; j++) {
				if ((i + j) % 2 == 0) {
					ctx.fillStyle = '#f0d9b5';
				} else {
					ctx.fillStyle = '#b58863';
				}
				ctx.fillRect((i * size) / 8, (j * size) / 8, size / 8, size / 8);
			}
		}
		ctx.fill();
	}

	function sizeDiv() {
		let div = document.getElementById('canvas');
		div.width = size;
		div.height = size;
		if (document.getElementById('side')) {
			document.getElementById('side').style.width = size / 3 + 'px';
		}
	}

	// draw pieces based on fen string
	function drawPieces(fen) {
		// draw pieces to canvas
		let x = 0;
		let y = 0;
		for (let i = 0; i < fen.length; i++) {
			let char = fen[i];
			if (char == '/') {
				x = 0;
				y++;
			} else if (char == ' ') {
				break;
				// @ts-ignore
			} else if (isNaN(char)) {
				// @ts-ignore
				ctx.drawImage(images[char], (x * size) / 8, (y * size) / 8, size / 8, size / 8);
				x++;
			} else {
				x += parseInt(char);
			}
		}
	}

	function updateBoard() {
		// ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawBoard();
		drawPieces(chess.fen());
		updateText();
		// sizeDiv();
	}

	function updateText() {
		let title = document.getElementById('title');

		// create a new chess instance otherwise the board breaks
		let newChess = new Chess(chess.fen());

		title.innerHTML = newChess.turn() == 'w' ? 'White' : 'Black';
		if (newChess.isCheckmate()) {
			title.innerHTML += ' is in checkmate';
			winnerWinnerChickenDinner(false);
		} else if (newChess.inCheck()) {
			title.innerHTML += ' is in check';
		} else if (newChess.isStalemate()) {
			title.innerHTML += ' is in stalemate';
			noWinnerWinnerChickenDinner();
		} else if (newChess.isInsufficientMaterial()) {
			title.innerHTML += ' is in insufficient material';
			noWinnerWinnerChickenDinner();
		} else if (newChess.isDraw()) {
			title.innerHTML += ' is in draw';
			noWinnerWinnerChickenDinner();
		} else if (newChess.isGameOver()) {
			title.innerHTML = 'Game over';
		} else {
			title.innerHTML += ' turn';
		}
	}

	function moveAnimation() {}

	// export let flip = false;
	// export let showCoords = true;

	function gameHandler(e) {
		sizeDiv();
		// @ts-ignore
		let x = Math.floor((e.offsetX * 8) / size);
		// @ts-ignore
		let y = Math.floor((e.offsetY * 8) / size);

		// convert to chess coords
		let chessX = String.fromCharCode(97 + x);
		let chessY = 8 - y;
		let chessPos = chessX + chessY;
		let piece = chess.get(chessPos);

		// get piece at coords
		// @ts-ignore

		if (!pieceSelected) {
			if (chess.turn() == 'w') {
				if (piece && piece.color == 'w') {
					pieceSelected = true;
				}
			} else {
				if (piece && piece.color == 'b') {
					pieceSelected = true;
				}
			}
			if (pieceSelected) {
				selectedPiece = piece;
				selectedPosition = chessPos;
				console.log('starting animation');
				document.getElementById('canvas').addEventListener('mousemove', (e) => {
					let x = e.offsetX;
					let y = e.offsetY;
					ctx.clearRect(0, 0, canvas.width, canvas.height);
					drawBoard();
					drawPieces(chess.fen());
					if (selectedPiece == null) {
						document.getElementById('canvas').removeEventListener('mousemove', (e) => {});
						return;
					}
					let type = selectedPiece.type;
					if (selectedPiece.color == 'w') {
						type = type.toUpperCase();
					}
					ctx.drawImage(images[type], x - size / 16, y - size / 16, size / 8, size / 8);
				});
			}
		} else {
			let promotion = false;
			console.log(selectedPiece);
			if (selectedPiece.type == 'p') {
				if (selectedPiece.color == 'w') {
					if (chessPos[1] == 8) {
						promotion = true;
					}
				} else {
					if (chessPos[1] == 1) {
						promotion = true;
					}
				}
			}
			let move = {
				from: selectedPosition,
				to: chessPos
			};

			if (promotion) {
				move.promotion = 'q';
			}
			console.log(move);
			if (chess.move(move)) {
				console.log('move made');
				// convert selected position to x,y coords
				let x = selectedPosition.charCodeAt(0) - 97;
				let y = 8 - parseInt(selectedPosition[1]);
				let newX = chessPos.charCodeAt(0) - 97;
				let newY = 8 - parseInt(chessPos[1]);

				evoMatrix[newY][newX] += evoMatrix[y][x];
				evoMatrix[y][x] = 0;

				let moves = document.getElementById('moves');
				moves.innerHTML += `<li>${selectedPosition} -> ${chessPos}</li>`;

				for (let i = 0; i < 8; i++) {
					for (let j = 0; j < 8; j++) {
						if (evoMatrix[i][j] > 2) {
							console.log(evoMatrix[i][j]);
							let p = chess.remove(chessPos);
							console.log(p);
							switch (p.type) {
								case 'p':
									evoMatrix[i][j] = 1;
									chess.put({ type: 'b', color: p.color }, chessPos);
									break;
								case 'b':
									evoMatrix[i][j] = 1;
									chess.put({ type: 'n', color: p.color }, chessPos);
									break;
								case 'n':
									evoMatrix[i][j] = 1;
									chess.put({ type: 'r', color: p.color }, chessPos);
									break;
								case 'r':
									evoMatrix[i][j] = 2;
									chess.put({ type: 'q', color: p.color }, chessPos);
									break;
								case 'q':
									evoMatrix[i][j] = 4;
									chess.put({ type: 'q', color: p.color }, chessPos);
									break;
								case 'k':
									evoMatrix[i][j] = 4;
									chess.put({ type: 'k', color: p.color }, chessPos);
									break;
							}
						}
					}
				}
			} else {
				console.log('invalid move');
			}
			pieceSelected = false;
			selectedPiece = null;
			selectedPosition = null;
			document.getElementById('canvas').removeEventListener('mousemove', (e) => {});
		}

		if (AI && chess.turn() == 'b') {
			let move = bestMove(); // e2 e4
			// alert(move);
			let from = move.substring(0, 2);
			let to = move.substring(3, 5);

			let moveObj = {
				from: from,
				to: to
			};

			let moves = document.getElementById('moves');
			moves.innerHTML += `<li>${from} -> ${to}</li>`;

			// console.log(moveObj);

			console.log(chess.move(moveObj));
			updateBoard();
		}

		updateBoard();
		console.log('x: ' + chessX + ' y: ' + chessY);
	}

	function waitForElement(elementId, callBack) {
		window.setTimeout(function () {
			var element = document.getElementById(elementId);
			if (element && loadedCount == 12) {
				callBack(elementId, element);
			} else {
				waitForElement(elementId, callBack);
			}
		}, 500);
	}

	function bestMove() {
		return best_move(chess.fen(), 3);
	}

	function hint() {
		alert(best_move(chess.fen(), 3));
	}

	onMount(async () => {
		waitForElement('side', function () {
			sizeDiv();
			start();
		});
		await init();
		console.log('loaded wasm');
	});
</script>

<svelte:head>
	{#each imgUrls as image}
		<link rel="preload" as="image" href={image} />
	{/each}
</svelte:head>

<!-- Game Stuff -->
<section>
	<!-- Game Canvas -->
	<div id="game" class="flex flex-row ">
		<div id="board" class="">
			<div id="boardEl" class="chessboard border-solid border-4 border-gray-500 ">
				<canvas id="canvas" on:click={gameHandler} />
			</div>
		</div>
		<div
			id="side"
			class="chessboard  py-3 border-solid border-4 border-gray-500 bg-gray-400 flex flex-col justify-start"
		>
			<div id="title" class=" w-100 text-center text-xl font-bold">White Turn</div>
			<hr class="my-3 h-px bg-gray-200 border-0 dark:bg-gray-700" />
			<div id="controls" class="flex justify-center">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<span
					on:click={resign}
					class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
					>Resign</span
				>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<span
					on:click={hint}
					class="	focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
					>Hint</span
				>
			</div>
			<hr class="my-3 h-px bg-gray-200 border-0 dark:bg-gray-700" />
			<div class="text-center">Move History</div>
			<ul id="moves" class="mx-4 px-1 bg-blue-100 text-center overflow-auto">
				<li />
			</ul>
		</div>
	</div>
</section>
