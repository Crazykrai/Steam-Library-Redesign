<script>
  import "./app.css";
  import * as Tabs from "$lib/components/ui/tabs";
  import { Input } from "$lib/components/ui/input/index.js";
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
</style>
<main>
  <!-- Steam Bar -->
  <div class="flex text-lg steam-bar text-white font-bold">
    <p>&lt</p>
    <p class="ml-4">&gt</p>
    <p class="ml-8">STEAM</p>
    <p class="ml-16">STORE</p>
    <p class="ml-16">COMMUNITY</p>
    <p class="ml-16" style="color: #66C0F4">LIBRARY</p>
  </div>

  <div class="flex library-header">
    <Tabs.Root value="collections" class="w-[400px]">
      <Tabs.List>
        <Tabs.Trigger value="collections">Collections</Tabs.Trigger>
        <Tabs.Trigger value="news">News and Updates</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  </div>
</main>


