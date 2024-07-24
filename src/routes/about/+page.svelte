<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section>
	<body>
		<!-- align center -->
		<div id="content" class="flex justify-center">
			<div class="container p-5">
				<h1 class="text-4xl font-bold text-white ">EvoChess</h1>

				<h2 class="text-2xl font-bold text-white ">A new world of chess awaits! Are you ready?!</h2>
				<p class="my-4 text-lg text-white">
					Chess got a whole lot interesting. As time goes on everything adapts and evolves so why
					not this amazing game. We all know how intense chess battles are, now with a twist how
					will all you chess grandmasters handle this?
				</p>

				<hr class="my-4" />
				<h2 class="font-bold text-white text-lg mx-1">What's new :</h2>
				<br />
				<p class="mb-4 text-lg font-normal text-white dark:text-black-400">
					Imagine being a pawn fighting for your kingdom, with despair smacking against your face in
					the midst of battle. No where to go but foward towards victory. With your heart pumping
					and adrenaline rushing through your body. You slay your enemies one by one. You look down
					at your hands and feel like hero in your own story. Now is your chance to be something
					more!!!
				</p>
				<ul class="space-y-1 max-w-xl text-lg list-disc list-inside text-white dark:text-black-400">
					<li>Pieces can now evolve!</li>
					<li>Every chess piece is assigned a certain number of points</li>
					<ol class="pl-5 text-lg mt-2 space-y-1 list-decimal list-inside">
						<li>Queens are the final stage of evolution</li>
						<li>Rooks are their lesser</li>
						<li>Knights fall next</li>
						<li>Bishops come first</li>
					</ol>
				</ul>
				<hr class="my-4" />
				<h2 class="font-bold text-white text-xl">How it works :</h2>
				<br />
				<ul class="space-y-1 max-w-xl text-lg list-disc list-inside text-white dark:text-black-400">
					<li>
						This application is built with the Svelte framework. It compiles component based
						html/css/js to a full application. Very convenient to work with
					</li>
					<li>we use the tailwind css library to handle styling</li>
					<li>
						It uses the chess.js library to handle all the chess logic besides artificial
						intelligence
					</li>
					<li>
						Our AI based move predictions are done via rust integration via WebAssembly. We use the
						advanced minimax algorithm running in our blazingly fast wasm integration which would
						not run as great in native JS
					</li>
				</ul>
			</div>
		</div>
	</body>
</section>

<style>
	#content {
		background-image: url('/EvolutionChess/chess8.jpg');
		height: 100vh;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
</style>
