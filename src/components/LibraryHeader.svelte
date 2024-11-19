<!-- src/components/LibraryHeader.svelte -->
<script>
  // @ts-nocheck
  import { createEventDispatcher } from 'svelte';
  import * as Tabs from "$lib/components/ui/tabs";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Clock, CirclePlay } from 'lucide-svelte';
  import Button from "$lib/components/ui/button/Button.svelte"; // Adjust the import path as needed

  export let activeTab;
  export let onTabChange;
  export let activeSort = 'alphabetical'; // Current active sort
  export let suggestions = []; // Suggestions based on search

  const dispatch = createEventDispatcher();

  let searchQuery = '';
  let showSuggestions = false;

  // Handle search input changes
  function handleSearch(event) {
    searchQuery = event.target.value;
    if (searchQuery.length > 0) {
      dispatch('search', { query: searchQuery });
      showSuggestions = true;
    } else {
      showSuggestions = false;
    }
  }

  // Handle selection of a suggestion
  function selectSuggestion(game) {
    searchQuery = '';
    showSuggestions = false;
    dispatch('selectGame', { game });
  }

  // Handle sorting button clicks
  function handleSort(sortBy) {
    if (activeSort !== sortBy) {
      dispatch('sort', { sortBy });
    }
  }

  // Close suggestions when clicking outside
  function handleClickOutside(event) {
    showSuggestions = false;
  }

  // Add event listener for clicks outside the component
  import { onMount, onDestroy } from 'svelte';
  onMount(() => {
    window.addEventListener('click', handleClickOutside);
  });
  onDestroy(() => {
    window.removeEventListener('click', handleClickOutside);
  });
</script>

<!-- Tabs for Collections and News -->
<Tabs.Root value={activeTab} onValueChange={onTabChange} class="mr-16">
  <Tabs.List>
    <Tabs.Trigger value="collections">Collections</Tabs.Trigger>
    <Tabs.Trigger value="news">News and Updates</Tabs.Trigger>
  </Tabs.List>
</Tabs.Root>

<!-- Search Input with Suggestions -->
<div class="relative">
  <Input 
    type="text" 
    placeholder="Search..." 
    class="max-w-xs mr-5" 
    bind:value={searchQuery} 
    on:input={handleSearch} 
  />
  {#if showSuggestions}
    <ul class="absolute bg-white border border-gray-300 w-full mt-1 rounded-md max-h-60 overflow-y-auto z-10">
      {#each suggestions as game}
        <li 
          class="px-4 py-2 hover:bg-gray-200 cursor-pointer"
          on:click={() => selectSuggestion(game)}
        >
          {game.name}
        </li>
      {/each}
      {#if suggestions.length === 0}
        <li class="px-4 py-2 text-gray-500">No results found.</li>
      {/if}
    </ul>
  {/if}
</div>

<!-- Sorting Buttons -->
<div class="flex items-center">
  <Button 
    variant="recent" 
    size="icon" 
    active={activeSort === 'recent'}
    on:click={() => handleSort('recent')}
    className="mr-2"
  >
      <Clock style="height: 1.5rem; width: 1.5rem;" />
  </Button>
  <Button 
    variant="play" 
    size="icon" 
    active={activeSort === 'installed'}
    on:click={() => handleSort('installed')}
    className="mr-2"
  >
      <CirclePlay style="height: 1.5rem; width: 1.5rem;" />
  </Button>
  <Button 
    variant="outline" 
    size="icon" 
    active={activeSort === 'alphabetical'}
    on:click={() => handleSort('alphabetical')}
  >
      <span style="font-size: 1rem;">A-Z</span>
  </Button>
</div>

<!-- View Label -->
<p class="ml-10 mt-2">View</p>

<style>
  .relative {
    position: relative;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li:hover {
    background-color: #f0f0f0;
  }
</style>
