import { getGarageDoors } from '$lib/stores/firestoreStore.ts';

export async function load() {
  return {
    garageOpeners: await getGarageDoors()
  };
}