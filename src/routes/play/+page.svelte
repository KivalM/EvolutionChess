<script>
	import Chess from '$lib/components/Chess.svelte';

	let ready = false;

	let onclick = () => {
		ready = true;
	};
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="flex justify-center">
	{#if ready}
		<Chess />
	{:else}
		<div class=" shadow-xl border-gray-300 border-2 rounded-lg p-20 ">
			<h3 class="text-3xl font-bold dark:text-white pb-4 text-center">Game Setup</h3>
			<div class="shadow bg-grey-400 p-10 rounded flex flex-col items-start">
				<div class="mb-6">
					<span class="text-xl block mb-2 text-sm font-medium text-none dark:text-gray-300">
						Game Type
					</span>
				</div>
				<div class="flex items-center mb-4">
					<input
						id="default-radio-1"
						checked
						type="radio"
						value="checked"
						name="default-radio"
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					/>
					<label for="default-radio-1" class="ml-2 text-sm font-medium text-none dark:text-gray-300"
						>Offline</label
					>
				</div>
				<div class="flex items-center">
					<input
						disabled
						id="default-radio-2"
						type="radio"
						value=""
						name="default-radio"
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					/>
					<label for="default-radio-2" class="ml-2 text-sm font-medium text-none dark:text-gray-300"
						>Online (todo)
					</label>
				</div>

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
						value="checked"
						name="default-radio"
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					/>
					<label for="default-radio-1" class="ml-2 text-sm font-medium text-none dark:text-gray-300"
						>PvP turn based</label
					>
				</div>
				<div class="flex items-center">
					<input
						disabled
						id="default-radio-2"
						type="radio"
						value=""
						name="default-radio"
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					/>
					<label for="default-radio-2" class="ml-2 text-sm font-medium text-none dark:text-gray-300"
						>Vs AI
					</label>
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
