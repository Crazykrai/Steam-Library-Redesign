<script>
    import { allNews } from './../data/news.js';
  </script>
  
  <style>
    .news-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }
  </style>
  
  <div>
    <h2 class="text-xl text-white mb-4">Recent News</h2>
    <div class="news-grid">
      {#each allNews as news}
        <div class="news-item">
          <img src={news.image} alt={news.title} class="rounded-lg" />
          <p class="text-white mt-2">{news.title}</p>
        </div>
      {/each}
    </div>
  </div>
  