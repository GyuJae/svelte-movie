<script lang="ts">
  import { categoryStore } from '../../../stores';
  import svelteLogo from '../../../assets/svelte.svg';
  
  const handleClickMovieCategory = () => {
    categoryStore.set('movie')
  }
  
  const handleClickMovieTVShow = () => {
    categoryStore.set('tv')
  }

  
</script>

<header class='wrapper'>
  <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />

  <ul class='category-list'>
    <li class='category-list-item' class:selected={$categoryStore === 'movie'}>
      <button type='button' on:click={handleClickMovieCategory}>
        Movies
      </button>
    </li>
    <li class='category-list-item' class:selected={$categoryStore === 'tv'}>
      <button type='button' on:click={handleClickMovieTVShow}>
        TV Shows
      </button>
    </li>
  </ul>
</header>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    background-color: #141414;
    width: 100%;
    color: #e5e5e5;
    position: fixed;
    z-index: 100;
  }

  .logo {
    height: 2em;
    padding: 1.5em;
  }
  
  .category-list {
    display: flex;
    column-gap: 10px;
    font-size: 13px;
  }

  .category-list-item button {
    all: unset;
    cursor: pointer;
  }

  .category-list-item:hover {
    opacity: 0.8;
  }
  
  .selected {
    font-weight: 700;
  }

</style>