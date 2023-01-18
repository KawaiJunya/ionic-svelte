<script lang="ts">
  import Page1 from "./tabs/App1.svelte"
  import Page2 from "./tabs/App2.svelte"
  import Page3 from "./tabs/App3.svelte"
  import Page4 from "./tabs/App4.svelte"
</script>

<ion-tabs>
  <ion-tab tab="tab-app1">
    <Page1 title="page1"/>
  </ion-tab>
  <ion-tab tab="tab-app2">
    <Page2 title="page2"/>
  </ion-tab>
  <ion-tab tab="tab-app3">
    <Page3 title="page3"/>
  </ion-tab>
  <ion-tab tab="tab-app4">
    <Page4 title="page4"/>
  </ion-tab>

  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="tab-app1">
      <ion-icon name="calendar"></ion-icon>
      <ion-label>Tab1</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab-app2">
      <ion-icon name="person-circle"></ion-icon>
      <ion-label>Tab2</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab-app3">
      <ion-icon name="map"></ion-icon>
      <ion-label>Tab3</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab-app4">
      <ion-icon name="information-circle"></ion-icon>
      <ion-label>Tab4</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>