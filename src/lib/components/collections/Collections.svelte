<!-- src/lib/components/collections/Collections.svelte -->
<script>
    import { userCollections } from '../../stores.js';
    import { onDestroy } from 'svelte';
    
    let collectionName = '';
    let userCollectionsList = [];
    
    // Subscribe to userCollections store
    const unsubscribe = userCollections.subscribe((value) => {
      userCollectionsList = value;
    });
    
    // Clean up subscription on component destroy
    onDestroy(() => {
      unsubscribe();
    });
    
    // Function to add a new collection
    function addNewCollection() {
      if (collectionName.trim()) {
        // Check for duplicate collection names
        if (userCollectionsList.some(col => col.title.toLowerCase() === collectionName.trim().toLowerCase())) {
          alert('A collection with this name already exists.');
          return;
        }
        
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
  </script>
  
  <style>
    .add-collection {
      margin-top: 20px;
      display: flex;
      gap: 10px;
      align-items: center;
    }
    
    .add-collection input {
      padding: 8px;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      flex: 1;
    }
    
    .add-collection button {
      padding: 8px 16px;
      font-size: 1rem;
      background-color: #66c0f4;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    
    .add-collection button:hover {
      background-color: #559ecf;
    }
  </style>
  
  <div class="add-collection">
    <input
      type="text"
      bind:value={collectionName}
      placeholder="New Collection Name"
      on:keydown={(e) => e.key === 'Enter' && addNewCollection()}
    />
    <button on:click={addNewCollection}>Add New Collection</button>
  </div>
  