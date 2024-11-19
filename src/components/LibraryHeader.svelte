<!-- src/components/LibraryHeader.svelte -->
<script>
  // @ts-nocheck
  import { createEventDispatcher } from 'svelte';
  import * as Tabs from "$lib/components/ui/tabs";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Clock, CirclePlay } from 'lucide-svelte';
  import { Button } from "$lib/components/ui/button/index.js";

  let { value = $bindable(), ...props} = $props();

    // Handle Recent button click
    function handleRecentClick() {
    dispatch('sort', { sortBy: 'recent' });
  }

  // Handle Installed button click
  function handleInstalledClick() {
    dispatch('sort', { sortBy: 'installed' });
  }

  // Handle Default (Alphabetical) button click
  function handleDefaultSort() {
    dispatch('sort', { sortBy: 'alphabetical' });
  }
</script>


<Tabs.Root value={props.activeTab} onValueChange={props.onTabChange} class="mr-16">
  <Tabs.List>
    <Tabs.Trigger value="collections">Collections</Tabs.Trigger>
    <Tabs.Trigger value="news">News and Updates</Tabs.Trigger>
  </Tabs.List>
</Tabs.Root>

<Input type="" placeholder="Search..." class="max-w-xs mr-5" bind:value={value}></Input>

<!-- Sorting Buttons -->
<Button 
  variant="recent" 
  size="icon" 
  style="margin-right: 5px;" 
  on:click={handleRecentClick}
>
    <Clock style="height: 1.5rem; width: 1.5rem;" />
</Button>
<Button 
  variant="recent" 
  size="icon" 
  on:click={handleInstalledClick}
>
    <CirclePlay style="height: 1.5rem; width: 1.5rem;" />
</Button>
<Button 
  variant="recent" 
  size="icon" 
  on:click={handleDefaultSort}
  style="margin-left: 5px;"
>
    <!-- You can replace this with an appropriate icon for default sort -->
    <span style="font-size: 1.2rem;">A-Z</span>
</Button>

<!-- View Label -->
<p class="ml-10 mt-2">View</p>
