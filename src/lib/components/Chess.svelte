<script>
	// @ts-nocheck
	import { base } from '$app/paths';
	// import wasm from '../rust/pkg/rust.js';

	import { Chess } from 'chess.js';
	// import { onMount } from 'svelte';

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
			if (loadedCount === imgNames.length) {
				ready = true;
			}
		};
	}

	function start() {
		canvas = document.getElementById('canvas');
		ctx = canvas.getContext('2d');
		chess = new Chess();

		drawBoard();
		drawPieces(chess.fen());
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

	// draw pieces based on fen
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

	// export let flip = false;
	// export let showCoords = true;

	function gameHandler(e) {
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

					let type = selectedPiece.type;
					if (selectedPiece.color == 'w') {
						type = type.toUpperCase();
					}
					ctx.drawImage(images[type], x - size / 16, y - size / 16, size / 8, size / 8);

					if (selectedPiece == null) {
						document.getElementById('canvas').removeEventListener('mousemove', (e) => {});
					}
				});
			}
		} else {
			let move = {
				from: selectedPosition,
				to: chessPos
			};
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

				for (let i = 0; i < 8; i++) {
					for (let j = 0; j < 8; j++) {
						if (evoMatrix[i][j] > 2) {
							console.log(evoMatrix[i][j]);
							let p = chess.remove(chessPos);
							console.log('removed: ' + p);
							switch (p.type) {
								case 'p':
									evoMatrix[i][j] = 1;
									chess.put({ type: 'b', color: p.color }, chessPos);
									break;
								case 'b':
									evoMatrix[i][j] = 2;
									chess.put({ type: 'n', color: p.color }, chessPos);
									break;
								case 'n':
									evoMatrix[i][j] = 3;
									chess.put({ type: 'r', color: p.color }, chessPos);
									break;
								case 'r':
									evoMatrix[i][j] = 4;
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
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			document.getElementById('canvas').removeEventListener('mousemove', (e) => {});
			drawBoard();
			drawPieces(chess.fen());
		}

		drawBoard();
		drawPieces(chess.fen());
		console.log('x: ' + chessX + ' y: ' + chessY);
	}
</script>

<svelte:head>
	{#each imgUrls as image}
		<link rel="preload" as="image" href={image} />
	{/each}
</svelte:head>

<!-- Game Stuff -->
<section>
	<!-- Game Canvas -->
	<button on:click={start}>DRAW</button>

	<div id="board">
		<div id="boardEl" class="chessboard">
			<canvas id="canvas" height={size} width={size} on:click={gameHandler} />
		</div>
	</div>
</section>
