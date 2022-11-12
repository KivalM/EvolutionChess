<script>
	import Chess from '$lib/components/Chess.svelte';
	let AI = false;
	let ready = false;

	let onclick = () => {
		// check checkbox

		// @ts-ignore
		AI = document.getElementById('AI').checked;
		ready = true;
	};
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="flex justify-center">
	{#if ready}
		<Chess {AI} />
	{:else}
		<div class=" shadow-xl border-gray-300 border-2 rounded-lg p-20 dark:border-gray-700">
			<h3 class="text-3xl font-bold dark:text-white pb-4 text-center">Game Setup</h3>
			<div class="shadow bg-grey-400 p-10 rounded flex flex-col items-start">
				<div class="mb-6">
					<span class="text-xl block mb-2 text-sm font-medium text-none dark:text-gray-300">
						Versus
					</span>
				</div>
				<div class="flex items-center mb-4">
					<input
						id="default-radio-1"
						checked
						type="radio"
						name="default-radio"
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					/>
					<label for="default-radio-1" class="ml-2 text-sm font-medium text-none dark:text-gray-300"
						>PvP turn based</label
					>
				</div>
				<div class="flex items-center">
					<input
						id="AI"
						type="radio"
						value="checked"
						name="default-radio"
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					/>
					<label for="default-radio-2" class="ml-2 text-sm font-medium text-none dark:text-gray-300"
						>Vs AI (VERY DIFFICULT)
					</label>
				</div>

				<div class=" items-center text-white">
					<br />
					<br />
					<h2 class="text-xl ">How to Play</h2>
					<hr />
					<ul
						class="space-y-1 max-w-md text-md list-disc list-inside text-white dark:text-black-400 py-4"
					>
						<li>
							To play, click on a piece to select it, then click on a square to move it there. You
							cannot drag the pieces around the board.
						</li>
						<li>
							The game works best on a desktop computer. If you are experiencing visibility issues,
							try zooming out.
						</li>

						<li>
							You can also play against the computer. To do this, click the "Vs AI" button. This is
							very difficult.
						</li>

						<li>
							You can also play against a friend. To do this, click the "PvP turn based" button. You
							will need to take turns moving your pieces.
						</li>

						<li>
							Pieces will evolve with takeovers. Every 2(this may vary due to lack of bug testing)
							takeovers, a piece will evolve. The order is pawn > bishop > knight > rook > queen;
							the pawn will evolve into a bishop, the bishop into a knight, the knight into a rook,
							the rook into a queen, and the queen will not evolve.
						</li>
					</ul>
				</div>

				<div class="flex items-center">
					<button
						type="button"
						class="text-white bg-blue-700 hover:bg-blue-800 m-4 r-0 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						on:click={onclick}>Go</button
					>
				</div>
			</div>
		</div>
	{/if}
</div>
