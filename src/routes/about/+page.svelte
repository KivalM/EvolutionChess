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
		<div class="container">
			<h1 class="text-4xl font-bold text-white ">EvoChess</h1>
			<h2 class="text-2xl font-bold text-white ">A new world of chess awaits! Are you ready?!</h2>
			<p class="my-4 text-lg text-white">
				Chess got a whole lot interesting. As time goes on everything adapts and evolves so why not
				this amazing game. We all know how intense chess battles are, now with a twist how will all
				you chess grandmasters handle this?
			</p>
			<h3 class="font-bold text-white">What's new :</h3>
			<p class="mb-4 text-lg font-normal text-white dark:text-black-400">
				Imagine being a pawn fighting for your kingdom, with despair smacking against your face in
				the midst of battle. No where to go but foward towards victory. With your heart pumping and
				adrenaline rushing through your body. You slay your enemies one by one. You look down at
				your hands and feel like hero in your own story. Now is your chance to be something more!!!
			</p>
			<ul class="space-y-1 max-w-md text-lg list-disc list-inside text-white dark:text-black-400">
				<li>Pawns can now evolve!</li>
				<li>Every chess piece is assigned a certain number of points</li>
				<ol class="pl-5 text-lg mt-2 space-y-1 list-decimal list-inside">
					<li>Queens are worth the most with 7 points</li>
					<li>Rooks are worth 5 points</li>
					<li>Bishops and knights are worth 3 points</li>
					<li>Pawns are worth 1 point</li>
				</ol>
				<li>Each time a pawn eliminates one of these pieces it evolves</li>
			</ul>
			<h4 class="font-bold text-white">How it works :</h4>
			<p class="mb-4 text-lg font-normal text-white dark:text-black-400">
				Game mechanics go here
			</p>
		</div>
	</div>
   </body>
 </section>

 <style>
	body {
	  background-image: url('ukzn_hackathon/chess8.jpg');
	  background-size: cover;
	}
	</style>