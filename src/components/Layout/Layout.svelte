<script>
  import Header from './Header/Header.svelte';
</script>

<Header />
<main>
  <slot />
</main>


<style>
  main {
    min-height: 100vh;
    background-color: #141414;
    padding: 80px 20px;
  }
</style>