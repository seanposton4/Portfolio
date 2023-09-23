<script lang="ts">
  export let imageSource: string;
  export let title: string;
  export let description: string;
  export let pagePath: string;

</script>

<div class="">
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img src={imageSource} alt="Card Header" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{title}</div>
      <p class="text-gray-700 text-base">
        {description}
      </p>
    </div>
    <div class="px-6 py-4 text-center">
      <a href="{pagePath}">
        <button
          class="
            bg-primary hover:bg-primary-light hover:cursor-pointer
            text-white font-bold py-2 px-4 rounded
            transition-colors duration-200 text-center m-auto w-3/4
          "
        >
          Open Project
        </button>
      </a>
    </div>
  </div>
</div>