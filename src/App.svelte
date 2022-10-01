<script lang="ts">
  import Layout from './components/Layout/Layout.svelte'
  import Movies from './components/Movies/Movies.svelte';
  import TVs from './components/TVs/TVs.svelte';
  import type { TMovieCategory, TvCategory } from './services';
  import { categoryStore } from './stores';
  
  let movieCategories: TMovieCategory[] = ["top_rated", "popular", "upcoming", "now_playing"];
  let tvCategories: TvCategory[] = ['top_rated' , 'popular' , 'airing_today' , 'on_the_air'];
</script>

<Layout>
  {#if $categoryStore === 'movie'}
    <ul class="media-list">
      {#each movieCategories as category}
        <Movies category={category} />
      {/each}
    </ul>
  {/if}

  {#if $categoryStore === 'tv'}
    <ul class="media-list">
      {#each tvCategories as category}
        <TVs cateogry={category} />
      {/each}
    </ul>
  {/if}
</Layout>

<style>
  ul.media-list {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }
</style>