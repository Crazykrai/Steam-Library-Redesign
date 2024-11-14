<script>
  import "./app.css";
  import LibraryHeader from "./components/LibraryHeader.svelte";
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
    <LibraryHeader />

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
    <div class="flex col-span-4 main-section">

    </div>
  </div>
</main>


