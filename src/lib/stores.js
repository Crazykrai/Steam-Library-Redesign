import { writable } from 'svelte/store';

export const recentGames = writable([]);
export const userCollections = writable([
  { title: 'Favorite Games', games: [] },
  { title: 'Recent Games', games: [] },
  { title: 'Games with Friends Online', games: [] }
]);
