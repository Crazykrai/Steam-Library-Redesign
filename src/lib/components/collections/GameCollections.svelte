<!-- src/lib/components/collections/GameCollections.svelte -->

<script>
    import { createEventDispatcher } from 'svelte';
    
    export let collection = null; // Collection is mandatory for rendering games
    const dispatch = createEventDispatcher();
  
    let games = [];
    let isCollapsed = false;
  
    // Reactive statement to populate games based on collection
    $: {
      if (collection) {
        games = [...collection.games];
      }
    }
  
    // Function to emit sort event
    function sortCollection() {
      console.log(`Sorting collection: ${collection.title}`);
      dispatch('sort');
    }
  
    // Function to emit selectGame event
    function selectGame(game) {
      console.log(`Selecting game: ${game.name}`);
      dispatch('selectGame', { game });
    }
  
    // Handle drag events to add visual feedback
    function handleDragEnter(event) {
      event.preventDefault();
      event.currentTarget.classList.add('drag-over');
    }
  
    function handleDragLeave(event) {
      event.currentTarget.classList.remove('drag-over');
    }
  
    // Handle drop event
    function handleDropLocal(event) {
      event.preventDefault();
      event.currentTarget.classList.remove('drag-over');
      
      const data = event.dataTransfer.getData('application/json');
      if (!data) return;
      const game = JSON.parse(data);
      
      console.log(`Dropped game: ${game.name} into collection: ${collection.title}`);
      
      // Emit a drop event to the parent with the game and collection title
      dispatch('drop', { game, collectionTitle: collection.title });
    }
  
    // Function to emit removeGame event
    function removeGame(game) {
      console.log(`Removing game: ${game.name} from collection: ${collection.title}`);
      dispatch('removeGame', { game, collectionTitle: collection.title });
    }
  </script>
  
  <style>
    .game-collection {
      margin-bottom: 20px;
      padding: 20px;
      border-radius: 10px;
      background-image: linear-gradient(to bottom right, #191c2289, #1E2329);
      margin: 15px;
      border: 2px solid transparent; /* For drag-over visual feedback */
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
      position: relative;
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
    .remove-button {
      position: absolute;
      top: 5px;
      right: 5px;
      background-color: rgba(255, 0, 0, 0.7);
      border: none;
      color: white;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      cursor: pointer;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .remove-button:hover {
      background-color: rgba(255, 0, 0, 1);
    }
  
    /* Highlight the collection when a draggable item is over it */
    .game-collection.drag-over {
      border-color: #66c0f4;
    }
  </style>
  
  <div
    class="game-collection"
    on:dragover|preventDefault
    on:dragenter={handleDragEnter}
    on:dragleave={handleDragLeave}
    on:drop={handleDropLocal}
  >
    <h2 class="collection-header">
      <span>{collection.title}</span>
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
            <button class="remove-button" on:click={(e) => { e.stopPropagation(); removeGame(game); }}>×</button>
          </div>
        {/each}
      </div>
    {/if}
  </div>
  