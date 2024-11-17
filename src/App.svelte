<script>
 import "./app.css";
  import LibraryHeader from "./components/LibraryHeader.svelte";
  import GameCollections from './lib/components/collections/GameCollections.svelte';
  import GamePage from '$lib/components/GamePage.svelte';
  import NewsPage from '$lib/components/NewsPage.svelte';
  import { allGames } from './lib/data/games.js';
  import { recentGames } from './lib/stores.js'; // Import the store for recent games

  // State variables
  let activeTab = "collections"; // Possible values: "collections", "news", "game"
  let selectedGame = null;

  // Function to handle game selection
  function onGameSelect(game) {
    selectedGame = game;
    activeTab = "game";
    // Update recent games
    recentGames.update(games => {
      const index = games.findIndex(g => g.name === game.name);
      if (index !== -1) {
        // Move the game to the top
        games.splice(index, 1);
      }
      games.unshift(game);
      // Keep only the latest 10 games
      if (games.length > 10) games.pop();
      return games;
    });
  }

  // Function to handle tab changes
  function onTabChange(value) {
    activeTab = value;
    selectedGame = null; // Reset selected game when switching tabs
  }
</script>

<style>
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
  }

  .main-section {
    background-image: linear-gradient(to bottom right, #313843, #1E2329);
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

  <div class="flex library-header text-white">
    <LibraryHeader {activeTab} {onTabChange} />
  </div>

  <div class="grid flex grid-cols-5 w-full" style="height: 87.337%;">
    <!-- Steam Sidebar -->
    <div class="flex side-bar text-white">
      <div class="pt-2 pl-1 pr-8 w-full grid grid-flow-row auto-rows-max gap-1">
        {#each Array(10) as _}
          <div class="flex pt-1 pb-1 pl-4 hover:bg-gamebar">
            <img src="https://cdn2.steamgriddb.com/icon/108fe115000c147427da50c2b0c9ce31.png" alt="" class="w-6 h-6 rounded-sm">
            <p class="ml-3">Sonic Frontiers</p>

          </div>
        {/each}
        
      </div>
    </div>

    <!-- Steam main section -->
    <!-- <div class="flex col-span-4 main-section"> -->
    <div class="col-span-4 main-section">
      {#if activeTab === "collections"}
        <GameCollections title="Favorite Games" on:selectGame={(e) => onGameSelect(e.detail.game)} />
        <GameCollections title="Recent Games" on:selectGame={(e) => onGameSelect(e.detail.game)} />
        <GameCollections title="Games with Friends Online" on:selectGame={(e) => onGameSelect(e.detail.game)} />
      {:else if activeTab === "news"}
        <!-- News and Updates content -->
        <p>News and Updates will be displayed here.</p>
      {:else if activeTab === "game" && selectedGame}
        <GamePage {selectedGame} />
      {/if}
    </div>
  </div>
</main>


