<script lang="ts">
  import Spinner from '$lib/components/Spinner.svelte';

  export let name: string;
  export let streetAddress: string;
  export let cityStateAddress: string;
  export let openerEndpoint: string;

  let openerLoading: boolean = false;

  async function openGarageDoor() {
    openerLoading = true;
    try {
      const response: Response = await fetch(openerEndpoint, {
        method: 'POST',
      });
      if (!response.ok) {
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
      }
    } finally {
      openerLoading = false;
    }
  }
</script>

<div class="mx-auto">
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{name}</div>
      <p class="text-gray-700 text-base">
        {streetAddress}
        {cityStateAddress}
      </p>
    </div>
    <div class="px-6 py-4 text-center">
      <button
        class="
          bg-primary hover:bg-primary-light hover:cursor-pointer
          text-white font-bold py-2 px-4 rounded
          transition-colors duration-200 text-center m-auto w-3/4
        "
        on:click={openGarageDoor}
        disabled={openerLoading}
      >
        {#if openerLoading}
          <Spinner />
        {:else}
          Open
        {/if}
      </button>
    </div>
  </div>
</div>