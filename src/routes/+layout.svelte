<script>
	import '../app.css';
	import Nav from '$components/Nav.svelte';
	import PageTransition from '$components/PageTransition.svelte';
	export let data; // => {url: '/'}
</script>

<div>
	<Nav />
	<PageTransition key="{data.url}" duration="{300}">
		<main class="mx-4">
			<slot />
		</main>
	</PageTransition>
</div>
