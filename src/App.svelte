<script lang="ts">
  import Layout from './components/Layout/Layout.svelte'
  import Movies from './components/Movies/Movies.svelte';
  import type { TMovieCategory } from './services';
  import { categoryStore } from './stores';
  categoryStore
  let categories: TMovieCategory[] = ["top_rated", "popular", "upcoming", "now_playing"]
</script>

<Layout>
  {#if $categoryStore === 'movie'}
    <ul class="movies-list">
      {#each  categories as category}
        <Movies cateogry={category} />
      {/each}
    </ul>
  {/if}
</Layout>

<style>
  ul.movies-list {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }
</style>