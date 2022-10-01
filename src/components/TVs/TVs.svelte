<script lang="ts">
  import { getTVs, type TvCategory } from "../../services";
  export let cateogry: TvCategory = 'airing_today';
  import Carousel from 'svelte-carousel'
  
  let tvsPromise = getTVs(cateogry);
</script>

{#await tvsPromise then tvs}
  <Carousel particlesToShow={6} particlesToScroll={6}>
    {#each tvs as tv}
      {#if tv.backdrop_path}       
        <img src={tv.backdrop_path} alt={tv.name} />
      {/if}
    {/each}
  </Carousel>
{/await}

<style>
  img {
    width: 210px;
    height: 120px;
    border-radius: 3px;
  }
</style>