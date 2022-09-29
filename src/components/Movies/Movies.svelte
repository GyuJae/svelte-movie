<script lang="ts">
  import { getMovies } from "../../services";

  let promise = getMovies('now_playing');
</script>

<ul>
  {#await promise}
    <p>loading...</p>
  {:then movies} 
    {#each movies as movie}
      <li>{movie.title}</li>
    {/each}
  {/await}
</ul>

<style>
  ul {
    color: white;
  }
</style>