<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section>
	<div>
		<h3 class="text-3xl font-bold dark:text-white pb-4">Create a new game</h3>
		<form class="shadow bg-grey-400 p-10 rounded disp">
			<div class="mb-6">
				<span class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
					Game Type
				</span>
			</div>
			<div class="flex items-center mb-4">
				<input
					id="default-radio-1"
					checked
					type="radio"
					value=""
					name="default-radio"
					class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
				/>
				<label
					for="default-radio-1"
					class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Offline</label
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
				<label
					for="default-radio-2"
					class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>Online (todo)
				</label>
			</div>

			<div class="flex items-center">
				<button
					type="button"
					class="text-white bg-green-700 hover:bg-blue-800 m-4 r-0 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
					>Go</button
				>
			</div>
		</form>
	</div>
</section>
