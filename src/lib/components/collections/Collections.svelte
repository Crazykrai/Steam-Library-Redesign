<!-- src/lib/components/collections/Collections.svelte -->
<script>
// @ts-nocheck

    import { userCollections } from '../../stores.js';
    import { onDestroy } from 'svelte';
    import {
      Button,
      buttonVariants
    } from "$lib/components/ui/button/index.js";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";

    
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
  
  <div class="flex add-collection justify-center">

    <Dialog.Root class="bg-gamebar">
      <Dialog.Trigger class={buttonVariants({ variant: "default" })}
        >Add Collection</Dialog.Trigger
      >
      <Dialog.Content class="z-50 bg-recent text-white">
        <Dialog.Header>
          <Dialog.Title>Add New Collection</Dialog.Title>
          <Dialog.Description>
            <span class="text-white">Add a new collection by inputting the title here. Hit create when done to save.</span>
          </Dialog.Description>
        </Dialog.Header>
        <div class="grid gap-4 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="name" class="text-right">Name</Label>
            <Input id="name" bind:value={collectionName} class="col-span-3 border border-white" />
          </div>
        </div>
        <Dialog.Footer>
          <Button type="submit" on:click={addNewCollection}>Add</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  </div>
  