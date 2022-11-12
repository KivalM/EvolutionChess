<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="bg-none dark:bg-gray-900">
	<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
		<div
			class="w-full max-w bg-none rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-row justify-evenly p-6"
		>
			<a href="https://github.com/SeevanP" target="_blank" rel="noreferrer">
				<div class="flex flex-col items-center pb-10 justify-center ">
					<img
						class="mb-3 w-24 h-24 rounded-full shadow-lg"
						src="{base}/icons/seevan.jpg"
						alt="name"
					/>
					<h5 class="mb-1 text-xl font-medium text-none dark:text-white">Seevan Ponnan</h5>
					<span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
				</div></a
			>
			<a href="https://github.com/KivalM" target="_blank" rel="noreferrer">
				<div class="flex flex-col items-center pb-10">
					<img
						class="mb-3 w-24 h-24 rounded-full shadow-lg"
						src="{base}/icons/kival.png"
						alt="name"
					/>
					<h5 class="mb-1 text-xl font-medium text-none dark:text-white">Kival Mahadew</h5>
					<span class="text-sm text-gray-500 dark:text-gray-400">Programmer</span>
				</div></a
			>
		</div>
	</div>
</section>
