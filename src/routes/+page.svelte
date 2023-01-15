<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data: any;
	import Thumbnail from "$lib/components/Thumbnail.svelte";

	const test = () => console.log(data)
</script>

<svelte:head>
	<title>Laughzone | Home</title>
	<meta name="description" content="Where you can LMAO all the time!" />
</svelte:head>

<section class="h-full w-full flex flex-wrap justify-center items-center
	gap-x-4 gap-y-4 top-16 relative z-0 p-5">
	{#each Object.entries(data) as vid}
		<Thumbnail data={vid[1]}/>
	{/each}
</section>
