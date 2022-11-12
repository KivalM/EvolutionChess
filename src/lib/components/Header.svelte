<script>
	import { base } from '$app/paths';
	import lightbulb from '../images/lightbulb.png';

	function darkMode() {
		document.getElementsByTagName('html')[0].classList.add('dark');
	}
	function lightMode() {
		document.getElementsByTagName('html')[0].classList.remove('dark');
	}

	function toggle_mode() {
		if (document.getElementsByTagName('html')[0].classList.contains('dark')) {
			lightMode();
		} else {
			darkMode();
		}
	}
</script>

<header class="shadow-md bg-gray-500">
	<nav
		class="px-2 sm:px-4 py-2.5 bg-gray-200  w-full z-20 top-0 left-0 border-b border-gray-200   dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
	>
		<div class="flex space-x-4 container flex flex-wrap justify-between items-center mx-auto">
			<a href="{base}/" class="flex items-center">
				<img src="{base}/icons/EvoChess5.png" class="mr-3 h-6 sm:h-9" alt="EvoChess5" />
				<span class=" self-center text-xl font-semibold whitespace-nowrap dark:text-white"
					>EvoChess</span
				>
				<span
					class="mx-3 bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900"
					>Beta</span
				>
			</a>
			<div class="flex md:order-2">
				<button
					data-collapse-toggle="navbar-sticky"
					type="button"
					class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-sticky"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="w-6 h-6"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						/></svg
					>
				</button>
			</div>
			<div
				class="hidden justify-between items-end w-full md:flex md:w-auto md:order-1"
				id="navbar-sticky"
			>
				<ul
					class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
				>
					<li>
						<a
							href="{base}/"
							class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
							aria-current="page">Home</a
						>
					</li>
					<li>
						<a
							href="{base}/about"
							class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
							>About</a
						>
					</li>

					<li>
						<a
							href="{base}/team"
							class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
							>Team</a
						>
					</li>

					<li>
						<a
							href="{base}/play"
							class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
							>Play Now</a
						>
					</li>
				</ul>
			</div>

			<div class="flex md:order-2">
				<button
					id="theme-toggle"
					type="button"
					class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
					aria-label="Toggle color mode"
					on:click={toggle_mode}
				>
					<img src={lightbulb} alt="" class="mr-3 h-6 sm:h-9 dark:invert" />
				</button>
			</div>
		</div>
	</nav>
</header>

<style>
</style>
