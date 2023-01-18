<script lang="ts">
  import { onMount } from 'svelte'
  import svelteLogo  from '/src/assets/svelte.svg'

  onMount(() => {
    setTimeout(() => {
      document.getElementById("ion-nav").push("page-tabs")
    }, 2000)
  })
</script>

<ion-content fullscreen="true">
  <img width="100px" height="100px" class="logo" src={svelteLogo} alt="Svelte Logo" />
</ion-content>

<style>
  .logo {
    position: absolute;
    top:      0;
    left:     0;
    right:    0;
    bottom:   0;
    margin:   auto;
  }
</style>