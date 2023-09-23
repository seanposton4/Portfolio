<script lang="ts">
  import GarageOpenerCard from '$lib/components/GarageOpenerCard.svelte';

  export let data;
</script>

<div class="container mx-auto md:p-12 p-4 project-cards-grid">
  {#each data.garageOpeners as opener}
    <GarageOpenerCard {...opener} />
  {/each}
</div>