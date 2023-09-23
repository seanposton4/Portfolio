<script lang="ts">
  import { onMount } from 'svelte';
  import { type UserCredential } from 'firebase/auth';
  import { authorizedUser } from '$lib/stores/authStore.ts';

  onMount(async () => {
    const auth = (await import('$lib/firebase/firebase.ts')).auth;

    const unsubscribe = auth.onAuthStateChanged((user: UserCredential) => {
      authorizedUser.set(user);
    });
  })
</script>

<slot />