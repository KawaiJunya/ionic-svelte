<script lang="ts">
  export let title: string
</script>

<ion-header>
  <ion-toolbar>
    <ion-title>{title}</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <slot/>
</ion-content>