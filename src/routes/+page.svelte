<div class="bg-primary grid lg:grid-cols-2 grid-cols-1 gap-12 text-white p-12">
  <div class="m-auto">
    <h1 class="text-6xl text-tertiary">Welcome!</h1>
    <h3 class="text-2xl">I'm Sean Poston, a web developer based in Missouri.</h3>
  </div>
  <div>
<!--    <object data="/undraw_coding_re_iv62.svg" title="hero-svg"></object>-->
    <img class="m-auto" src="/undraw_coding_re_iv62.svg" alt="hi"/>
  </div>
</div>
<svelte:window on:scroll={updateSpacerHeight} />
<img src="/wave2.svg" id="wave2" class="absolute" alt="wave"/>
<img src="/wave.svg" id="wave" class="absolute" alt="wave"/>
<div id="wave-spacer" bind:clientHeight="{waveHeight}"></div>
<div class="text-4xl">HELLO</div>


<style>

</style>

<script lang="ts">
  let waveHeight = 0;
  function updateSpacerHeight() {
    waveHeight = document.getElementById('wave')!.offsetHeight;
  }
</script>