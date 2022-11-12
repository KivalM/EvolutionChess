<script>
	import queen from '$lib/images/queen.png';
	import { base } from '$app/paths';
</script>

<div class="dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
	<div class="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
		<div class="place-self-center mr-auto lg:col-span-7">
			<h1
				class="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white "
			>
				The next generation of <div class="text-blue-800">Chess</div>
			</h1>
			<p
				class="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
			>
				From complex opening theory to endgame technique, Chess is a game of infinite depth. Now
				with complex evolution and AI, Chess is a game that will never be the same.
			</p>

			<a
				href="{base}/play"
				class="bg-blue-800 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white  rounded-lg border border-gray-300 hover:bg-blue-600 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
			>
				Play Now
			</a>
		</div>
		<div class=" lg:mt-auto lg:col-span-5 lg:flex justify-center h-full queen" />
	</div>
</div>

<style>
	.queen {
		background-image: url('/ukzn_hackathon/queen.png');
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}
</style>
