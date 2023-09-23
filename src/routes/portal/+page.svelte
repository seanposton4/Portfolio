<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import { type AuthenticationHandlers } from '$lib/stores/authStore.ts';
  import type { Subscriber, Writable } from 'svelte/store';
  import type { UserCredential } from 'firebase/auth';
  import Spinner from '$lib/components/Spinner.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import type { ProjectCardData } from '$lib/models/ProjectCardData.ts';

  let loading: boolean = true;
  let authHandlers: AuthenticationHandlers;
  let unsubscribe: Subscriber<UserCredential>;
  let authorizedUser: UserCredential;

  onMount(async () => {
    const authStore = await import('$lib/stores/authStore.ts');
    authHandlers = authStore.AuthenticationHandlers;
    unsubscribe = authStore.authorizedUser.subscribe((user: UserCredential) => {
      authorizedUser = user;
    });
    loading = false;
  });

  const iotCard: ProjectCardData = {
    title: 'IoT Projects',
    description: `
      A hub for all IoT and microcontroller based projects.
    `,
    pagePath: 'portal/iot',
    imageSource: '/raspberry-pi-pexels.jpg'
  }

  const projectCards: ProjectCardData[] = [
    iotCard
  ]

  //TODO: Figure out unsubscribe;
  //onDestroy(unsubscribe.run());
</script>

<div class="container mx-auto md:p-12 p-4">
  {#if loading}
    Loading <Spinner />
  {:else}
    {#if !authorizedUser}
      <button class="btn btn-primary" on:click={authHandlers.login()}>
        Login
      </button>

      <button class="btn btn-primary" on:click={authHandlers.logout()}>
        Logout
      </button>
    {:else}
      <div class="project-cards-grid">
        {#each projectCards as card}
          <ProjectCard {...card} />
        {/each}
      </div>
    {/if}
  {/if}
</div>
