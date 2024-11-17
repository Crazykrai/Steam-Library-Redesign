<script>
    export let selectedGame;
</script>
  
<style>
</style>
  
<div class="game-page">
    <h1>{selectedGame.name}</h1>
    <img src={selectedGame.image} alt={selectedGame.name} />
</div>