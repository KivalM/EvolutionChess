<script>
	import Header from '../lib/components/Header.svelte';
	import './styles.css';
	import '../app.css';
	import 'flowbite/dist/flowbite.css';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<link rel="manifest" crossorigin="use-credentials" href="{base}/manifest.json" />
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer />
</div>

<style>
</style>
