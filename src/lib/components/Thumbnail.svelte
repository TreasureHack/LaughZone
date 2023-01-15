<script lang="ts">
    export let data: any;
</script>

<a href="/">
    <div class="w-72 rounded-lg flex flex-col">  
        <!-- svelte-ignore a11y-media-has-caption -->
        <video loop autoplay>
            <source src={data.url} type="video/mp4">
        </video>
        <!--<img src={data.thumbnail} alt="test" class="w-full aspect-video rounded-lg">-->
        <div class="p-3 flex flex-row justify-start gap-3">
            <div class="flex flex-col">
                <div class="rounded-full bg-amber-500">
            </div>
            <div class="flex flex-col">
                <h1 class="font-bold">{data.title}</h1>
                <p class="text-sm">{data.author}</p>
            </div>
        </div>
    </div> 
</a>
