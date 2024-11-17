<!-- GameCollections.svelte -->
<script>
    import { createEventDispatcher } from 'svelte';
    import { allGames } from '../../data/games.js';
    import { recentGames } from '../../stores.js';
    import { onDestroy } from 'svelte';
  
    export let title = '';
    export let collection = null; // If null, it's a predefined collection
    const dispatch = createEventDispatcher();
  
    let games = [];
    let isCollapsed = false;
  
    // Define game categories
    const favoriteGameNames = ['Batman', 'Bioshock'];
    const friendsGameNames = ['Halo'];
  
    // Reactive statement to populate games based on collection type
    $: {
      if (collection) {
        games = [...collection.games];
      } else if (title === 'Favorite Games') {
        games = allGames.filter((game) => favoriteGameNames.includes(game.name));
      } else if (title === 'Recent Games') {
        games = [...$recentGames];
      } else if (title === 'Games with Friends Online') {
        games = allGames.filter((game) => friendsGameNames.includes(game.name));
      } else {
        // Handle other titles or default behavior
        games = [];
      }
    }
  
    // Function to handle sorting
    function sortCollection() {
      if (collection) {
        // Emit sort event for user-defined collections
        dispatch('sort');
      } else {
        // Reverse games array locally for predefined collections
        games = [...games].reverse();
      }
    }
  
    // Function to emit selectGame event
    function selectGame(game) {
      dispatch('selectGame', { game });
    }
  
    // Subscribe to recentGames store if this is the "Recent Games" collection
    let unsubscribe;
    if (!collection && title === 'Recent Games') {
      unsubscribe = recentGames.subscribe((value) => {
        games = [...value];
      });
    }
  
    // Clean up subscription on component destroy
    onDestroy(() => {
      if (unsubscribe) unsubscribe();
    });
  </script>
  
  <style>
    .game-collection {
      margin-bottom: 20px;
      padding: 20px;
      border-radius: 10px;
      background-image: linear-gradient(to bottom right, #191c2289, #1E2329);
      margin: 15px;
    }
    .collection-header {
      font-size: 1.5rem;
      color: grey;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .collection-controls {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .collection-controls button {
      background-color: transparent;
      color: grey;
      border: none;
      font-size: 1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .collection-controls button:hover {
      color: #66c0f4; /* Optional: Change color on hover for better visibility */
    }
    .collapse-button::before {
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 8px solid currentColor;
      transition: transform 0.2s;
    }
    .collapse-button.collapsed::before {
      transform: rotate(-90deg);
    }
    .sort-button {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .sort-button::before {
      content: '⇅'; /* Unicode character for sort */
      font-size: 1rem;
    }
    .game-grid {
      display: flex;
      overflow-x: auto;
      gap: 10px;
      padding: 10px 0;
    }
    .game-item {
      cursor: pointer;
      flex-shrink: 0;
      width: 150px;
      height: 220px;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .game-item:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }
    .game-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  </style>
  
  <div class="game-collection">
    <h2 class="collection-header">
      <span>{collection ? collection.title : title}</span>
      <div class="collection-controls">
        <button class="sort-button" on:click={sortCollection} title="Sort">
          Sort
        </button>
        <button
          class="collapse-button {isCollapsed ? 'collapsed' : ''}"
          on:click={() => (isCollapsed = !isCollapsed)}
          title="Collapse/Expand"
        ></button>
      </div>
    </h2>
    {#if !isCollapsed}
      <div class="game-grid">
        {#each games as game}
          <div class="game-item" on:click={() => selectGame(game)}>
            <img src={game.image} alt={game.name} />
          </div>
        {/each}
      </div>
    {/if}
  </div>
  