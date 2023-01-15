<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
</script>

<div class="h-screen w-screen overflow-hidden">
	<Navbar/>
	<main class="overflow-y-auto h-full w-full">
		<slot />
	</main>
</div>
