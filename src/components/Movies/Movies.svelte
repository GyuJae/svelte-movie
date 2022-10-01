<script lang="ts">
  import { getMovies, type TMovieCategory } from "../../services";
  export let category: TMovieCategory = 'now_playing';
  import Carousel from 'svelte-carousel'
  let moviesPromise = getMovies(category);
</script>

{#await moviesPromise then movies}
  <Carousel particlesToShow={6} particlesToScroll={6}>
    {#each movies as movie}
      {#if movie.backdrop_path}
        <img src={movie.backdrop_path} alt={movie.title} />
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