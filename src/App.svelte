<script lang="ts">
  import Layout from './components/Layout/Layout.svelte'
  import { categoryStore } from './stores';
  
</script>

<Layout>
  <p>
    {$categoryStore}
  </p>
</Layout>

<style>
  p {
    color: white;
  }
</style>