<script>
	import { base } from '$app/paths';
	// import wasm from '../rust/pkg/rust.js';

	import { Chess } from 'chess.js';
	import { onMount } from 'svelte';

	let images = {};

	let chess = new Chess();
	let pieceSelected = false;

	export let size = 800;

	// export let flip = false;
	// export let showCoords = true;

	// preload images
	let imgNames = 'rbnqkpRBNQKP'.split('');
	for (let imgName of imgNames) {
		images[imgName] = new Image();
		images[imgName].src = `${base}/chess/${imgName}.svg`;
	}

	// Draw chessboard
	function drawBoard() {
		// draw board to canvas
		let canvas = document.getElementById('canvas');
		// @ts-ignore
		let ctx = canvas.getContext('2d');
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
	// @ts-ignore
	function drawPieces(fen) {
		// draw board to canvas
		let canvas = document.getElementById('canvas');
		// @ts-ignore
		let ctx = canvas.getContext('2d');
		// @ts-ignore

		let x = 0;
		let y = 0;

		// @ts-ignore
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

				// @ts-ignore
				console.log(images[char].src);
				x++;
			} else {
				x += parseInt(char);
			}
			// break;
		}
		console.log(images);
	}

	function gameClick(e) {
		// @ts-ignore
		let x = Math.floor((e.offsetX * 8) / size);
		// @ts-ignore
		let y = Math.floor((e.offsetY * 8) / size);

		// convert to chess coords
		let chessX = String.fromCharCode(97 + x);
		let chessY = 8 - y;

		if (!pieceSelected) {
			pieceSelected = true;
			// make piece follow mouse
			// @ts-ignore
			document.getElementById('canvas').addEventListener('mousemove', (e) => {
				// @ts-ignore
				let x = e.offsetX;
				// @ts-ignore
				let y = e.offsetY;

				// draw board to canvas
				let canvas = document.getElementById('canvas');
				// @ts-ignore
				let ctx = canvas.getContext('2d');
				// @ts-ignore
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				drawBoard();
				drawPieces(chess.fen());
				// @ts-ignore
				ctx.drawImage(images[chess.get(`${chessX}${chessY}`).type], x, y, size / 8, size / 8);
			});
		}

		if (pieceSelected) {
			// @ts-ignore
			document.getElementById('canvas').removeEventListener('mousemove', (e) => {});
			pieceSelected = false;
		}

		console.log('x: ' + chessX + ' y: ' + chessY);
	}

	function test() {
		// @ts-ignore
		let chess = new Chess();
		// @ts-ignore
		let fen = chess.fen();
		// join fen into string and split into array
		console.log(fen);

		drawBoard();
		drawPieces(fen);
	}
</script>

<!-- Game Stuff -->
<section>
	<!-- Game Canvas -->
	<button on:click={test}>DRAW</button>

	<div id="board">
		<div id="boardEl" class="chessboard">
			<canvas id="canvas" height={size} width={size} on:click={gameClick} />
		</div>
	</div>
</section>
