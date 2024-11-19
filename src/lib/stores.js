// src/lib/stores.js

import { writable } from 'svelte/store';
import { allGames } from './data/games.js';
import { generateRandomNews } from './utils/generateRandomNews.js';

// Function to create a writable store with localStorage persistence
function createPersistedStore(key, initial) {
  const stored = localStorage.getItem(key);
  const data = stored ? JSON.parse(stored) : initial;
  const store = writable(data);
  store.subscribe((value) => {
    localStorage.setItem(key, JSON.stringify(value));
  });
  return store;
}

// Predefined collections
const predefinedCollections = [
  {
    title: 'Favorite Games',
    games: allGames.filter(game => ['Batman', 'Bioshock'].includes(game.name)),
  },
  {
    title: 'Recent Games',
    games: [],
  },
  {
    title: 'Games with Friends Online',
    games: allGames.filter(game => ['Halo'].includes(game.name)),
  },
  {
    title: 'Installed',
    games: allGames.filter(game => game.installed)
  },
];

// Initialize userCollections with predefined collections and persisted data
export const userCollections = createPersistedStore('userCollections', predefinedCollections);

// Initialize news store with generated random news
const initialNews = generateRandomNews(20, allGames); // Generate 20 random news items

export const news = createPersistedStore('news', initialNews);
