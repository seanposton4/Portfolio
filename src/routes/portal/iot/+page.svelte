<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import type { ProjectCardData } from '$lib/models/ProjectCardData.ts';
  import { getGarageDoors } from '$lib/stores/firestoreStore.ts';

  const garageOpeners: ProjectCardData = {
    imageSource: '/red-garage-door-pexels.jpg',
    title: 'Garage Door Openers',
    description: `
      This project consists of different garage door
      openers made out of microcontrollers running a
      REST API web server.
    `,
    pagePath: 'iot/garage-openers'
  }
</script>

<div class="container mx-auto md:p-12 p-4 project-cards-grid">
  <ProjectCard {...garageOpeners}/>
</div>
