<script lang="ts">
	import Thumbnail from "$lib/components/Thumbnail.svelte";
</script>

<svelte:head>
	<title>Laughzone | Queryhere</title>
	<meta name="description" content="Where you can LMAO all the time!" />
</svelte:head>

<section class="h-full w-full flex flex-wrap justify-center items-center
	gap-x-4 gap-y-2 top-16 relative z-0 p-5">
	{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as test}
		<Thumbnail data={test}/>
	{/each}
</section>
