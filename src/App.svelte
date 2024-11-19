<!-- App.svelte -->

<script>
  import "./app.css";
  import LibraryHeader from "./components/LibraryHeader.svelte";
  import GameCollections from './lib/components/collections/GameCollections.svelte';
  import Collections from './lib/components/collections/Collections.svelte'; // Import Collections component
  import GamePage from '$lib/components/GamePage.svelte';
  import NewsPage from '$lib/components/NewsPage.svelte';
  import { allGames } from './lib/data/games.js';
  import { userCollections } from './lib/stores.js'; // Import the userCollections store
  import { onDestroy } from 'svelte';
  
  // State variables
  let activeTab = $state("collections"); // Possible values: "collections", "news", "game"
  let selectedGame = $state(null);

  let search = $state('');
  
  // Function to handle game selection
  function onGameSelect(game) {
    selectedGame = allGames.find(item => item.name == game.name );
    activeTab = "game";
    // Update "Recent Games" collection within userCollections
    userCollections.update((collections) => {
      return collections.map((col) => {
        if (col.title === 'Recent Games') {
          // Remove the game if it's already in Recent Games
          let updatedGames = col.games.filter(g => g.name !== game.name);
          // Add the game to the top
          updatedGames.unshift(game);
          // Keep only the latest 10 games
          if (updatedGames.length > 10) {
            updatedGames = updatedGames.slice(0, 10);
          }
          return {
            ...col,
            games: updatedGames,
          };
        }
        return col;
      });
    });
  }
  
  // Function to handle tab changes
  function onTabChange(value) {
    activeTab = value;
    selectedGame = null; // Reset selected game when switching tabs
  }
  
  // Subscribe to userCollections store
  let userCollectionsList = $state([]);
  const unsubscribe = userCollections.subscribe((value) => {
    userCollectionsList = value;
  });
  
  // Clean up subscription on component destroy
  onDestroy(() => {
    unsubscribe();
  });
  
  // Function to handle game selection from collections
  function handleSelectGame(event) {
    const { game } = event.detail;
    onGameSelect(game);
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
  
  // Function to handle game drop into a collection
  function handleDrop(event) {
    const { game, collectionTitle } = event.detail;
    
    console.log(`Attempting to add "${game.name}" to "${collectionTitle}"`);
    
    // Prevent adding duplicate games to a collection
    const collection = userCollectionsList.find(col => col.title === collectionTitle);
    if (collection.games.some(g => g.name === game.name)) {
      alert(`"${game.name}" is already in the "${collectionTitle}" collection.`);
      return;
    }
    
    // Update the target collection
    userCollections.update((collections) => {
      return collections.map((col) => {
        if (col.title === collectionTitle) {
          return {
            ...col,
            games: [...col.games, game],
          };
        }
        return col;
      });
    });
    
    console.log(`Successfully added "${game.name}" to "${collectionTitle}"`);
    
    // Update "Recent Games" collection without navigating
    userCollections.update((collections) => {
      return collections.map((col) => {
        if (col.title === 'Recent Games') {
          // Remove the game if it's already in Recent Games
          let updatedGames = col.games.filter(g => g.name !== game.name);
          // Add the game to the top
          updatedGames.unshift(game);
          // Keep only the latest 10 games
          if (updatedGames.length > 10) {
            updatedGames = updatedGames.slice(0, 10);
          }
          return {
            ...col,
            games: updatedGames,
          };
        }
        return col;
      });
    });
  }
  
  // Function to handle game removal from a collection
  function handleRemoveGame(event, collectionTitle) {
    const { game } = event.detail;
    console.log(`Attempting to remove "${game.name}" from "${collectionTitle}"`);
    
    userCollections.update((collections) => {
      return collections.map((col) => {
        if (col.title === collectionTitle) {
          return {
            ...col,
            games: col.games.filter(g => g.name !== game.name),
          };
        }
        return col;
      });
    });
    
    console.log(`Successfully removed "${game.name}" from "${collectionTitle}"`);
  }
  let sortMethod = $state('alphabetical')

  function handleSortEvent(event) {
    sortMethod = event.detail.sortBy
  }

  function sortGames() {
    let result = []
    
    if(sortMethod == 'alphabetical') {
      result = allGames.sort((a, b) => a.name.localeCompare(b.name));
    } else if(sortMethod == 'recent') {

    } else if(sortMethod == 'installed') {
      result = allGames.filter(game => game.installed);
    }

    return result;
  }
</script>

<style>
  /* Existing styles... */
  .steam-bar {
    background-color: #0E141B;
    padding:15px;
    font-family: 'Inter';
  }

  .library-header {
    background-color: #212B45;
    padding:10px;
  }

  .side-bar {
    background-color: #1E2329;
    font-family: 'Inter';
    font-size: 14px;
    overflow-y: auto; /* Add scroll if needed */
  }

  .main-section {
    background-image: linear-gradient(to bottom right, #313843, #1E2329);
    padding: 20px;
    overflow-y: auto; /* Add scroll if needed */
  }

  /* Styles for draggable items */
  .draggable-game {
    display: flex;
    align-items: center;
    padding: 8px;
    cursor: grab;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  .draggable-game:hover {
    background-color: #2a2a2a;
  }

  .draggable-game img {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    margin-right: 8px;
  }

  /* Optional: Add pointer cursor for clickable games */
  .draggable-game.clickable {
    cursor: pointer;
  }
</style>

<main class="h-full w-full">
  <!-- Steam Bar -->
  <div class="flex text-lg steam-bar text-white font-bold">
    <p class="text-filter">&lt</p>
    <p class="ml-4 text-filter">&gt</p>
    <p class="ml-8">STEAM</p>
    <p class="ml-16">STORE</p>
    <p class="ml-16">COMMUNITY</p>
    <p class="ml-16" style="color: #66C0F4">LIBRARY</p>
  </div>

  <!-- Library Header -->
  <div class="flex library-header text-white">
    <LibraryHeader activeTab={activeTab} onTabChange={onTabChange} bind:value={search} on:sort={handleSortEvent} />
  </div>

  <!-- Main Grid Layout -->
  <div class="grid flex grid-cols-5 w-full" style="height: 87.337%;">
    <!-- Steam Sidebar -->
    <div class="flex side-bar text-white">
      <div class="pt-2 pl-1 pr-8 w-full grid grid-flow-row auto-rows-max gap-1">
        {#if search != ''}
          {#each sortGames().filter(a => a.name.startsWith(search)) as game}
              <!-- svelte-ignore a11y_no_static_element_interactions -->
              <!-- svelte-ignore a11y_click_events_have_key_events -->
              <div
                class="draggable-game clickable"
                draggable="true"
                ondragstart={(event) => {
                  event.dataTransfer.setData('application/json', JSON.stringify(game));
                }}
                onclick={() => onGameSelect(game)}
              >
                <img src={game.image} alt={game.name} />
                <p>{game.name}</p>
              </div>
            {/each}
        {:else}
          {#each sortGames() as game}
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <div
              class="draggable-game clickable"
              draggable="true"
              ondragstart={(event) => {
                event.dataTransfer.setData('application/json', JSON.stringify(game));
              }}
              onclick={() => onGameSelect(game)}
            >
              <img src={game.image} alt={game.name} />
              <p>{game.name}</p>
            </div>
          {/each}
        {/if}
        
      </div>
    </div>

    <!-- Steam main section -->
    <div class="col-span-4 main-section">
      {#if activeTab === "collections"}
        <!-- Render All Collections (Predefined and User-Defined) -->
        {#each userCollectionsList as collection}
          <GameCollections 
            {collection}
            on:sort={() => handleSort(collection.title)}
            on:selectGame={handleSelectGame}
            on:drop={handleDrop}
            on:removeGame={(e) => handleRemoveGame(e, collection.title)}
          />
        {/each}

        <!-- Add New Collection Section -->
        <Collections /> <!-- This is the Add New Collection component -->
      {:else if activeTab === "news"}
        <!-- News and Updates content -->
        <NewsPage />
      {:else if activeTab === "game" && selectedGame}
        <GamePage {selectedGame} />
      {/if}
    </div>
  </div>
</main>
