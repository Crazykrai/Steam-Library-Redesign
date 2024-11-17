<!-- Collections.svelte -->
<script>
    import GameCollections from './GameCollections.svelte';
    import { userCollections } from '../../stores.js';
    import { allGames } from '../../data/games.js';
    import { recentGames } from '../../stores.js';
    import { get } from 'svelte/store';
  
    let collectionName = '';
    let userCollectionsList = [];
  
    // Subscribe to userCollections store
    userCollections.subscribe((value) => {
      userCollectionsList = value;
    });
  
    // Function to add a new collection
    function addNewCollection() {
      if (collectionName.trim()) {
        userCollections.update((collections) => {
          collections.push({
            title: collectionName.trim(),
            games: [], // Initialize with an empty games array
          });
          return collections;
        });
        collectionName = '';
      }
    }
  
    // Function to handle sort event from GameCollections component
    function handleSort(collectionTitle) {
      userCollections.update((collections) => {
        return collections.map((col) => {
          if (col.title === collectionTitle) {
            return {
              ...col,
              games: [...col.games].reverse(), // Reverse the games array
            };
          }
          return col;
        });
      });
    }
  
    // Function to handle game selection (optional, based on your app's logic)
    function handleSelectGame(event) {
      const { game } = event.detail;
      // Implement game selection logic here
      console.log('Selected game:', game);
    }
  </script>
  
  <style>
    .new-collection {
      margin-top: 20px;
      display: flex;
      gap: 10px;
      align-items: center;
    }
    .collections {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .new-collection input {
      padding: 8px;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      flex: 1;
    }
    .new-collection button {
      padding: 8px 16px;
      font-size: 1rem;
      background-color: #66c0f4;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    .new-collection button:hover {
      background-color: #559ecf;
    }
  </style>
  
  <div class="collections">
    <!-- Predefined Collections -->
    <GameCollections title="Favorite Games" on:selectGame={handleSelectGame} />
    <GameCollections title="Recent Games" on:selectGame={handleSelectGame} />
    <GameCollections title="Games with Friends Online" on:selectGame={handleSelectGame} />
  
    <!-- User-Defined Collections -->
    {#each userCollectionsList as collection}
      <GameCollections 
        {collection}
        on:sort={() => handleSort(collection.title)}
        on:selectGame={handleSelectGame}
      />
    {/each}
  </div>
  
  <!-- Add New Collection Section -->
  <div class="new-collection">
    <input
      type="text"
      bind:value={collectionName}
      placeholder="New Collection Name"
      on:keydown={(e) => e.key === 'Enter' && addNewCollection()}
    />
    <button on:click={addNewCollection}>Add New Collection</button>
  </div>
  