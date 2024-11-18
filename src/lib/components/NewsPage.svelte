<!-- src/lib/components/NewsPage.svelte -->

<script lang="ts">
    import { onDestroy } from 'svelte';
    import { news, userCollections } from '../stores.js';
    import { derived } from 'svelte/store';
  
    // Define TypeScript interfaces
    interface NewsItem {
      id: number;
      title: string;
      content: string;
      date: string; // 'YYYY-MM-DD' format
      category: string;
      relatedGame?: string | null;
    }
  
    interface Game {
      name: string;
      image: string;
      // Add other relevant properties if needed
    }
  
    interface Collection {
      title: string;
      games: Game[];
    }
  
    // Local state for collections and news
    let newsList: NewsItem[] = [];
    let collectionsList: Collection[] = [];
  
    // Subscribe to news and collections stores
    const unsubscribeNews = news.subscribe((value: NewsItem[]) => {
      newsList = value;
    });
  
    const unsubscribeCollections = userCollections.subscribe((value: Collection[]) => {
      collectionsList = value;
    });
  
    onDestroy(() => {
      unsubscribeNews();
      unsubscribeCollections();
    });
  
    // Derived store for "Recent News" (no sorting here)
    const recentNews = derived(news, ($news: NewsItem[]) => {
      return [...$news];
    });
  
    // Derived store for "From Steam" news
    const fromSteamNews = derived(news, ($news: NewsItem[]) => {
      return $news.filter(item => item.category === 'From Steam');
    });
  
    // Derived store for "Favorite Games News"
    const favoriteGamesNews = derived(
      [news, userCollections],
      ([$news, $userCollections]: [NewsItem[], Collection[]]) => {
        // Get the list of favorite games
        const favoriteCollection = $userCollections.find(col => col.title === 'Favorite Games');
        const favoriteGames = favoriteCollection ? favoriteCollection.games.map(game => game.name) : [];
  
        // Filter news related to favorite games
        return $news.filter(item => item.category === 'Favorite Games' && item.relatedGame && favoriteGames.includes(item.relatedGame));
      }
    );
  
    // Function to remove a news item
    function removeNews(id: number) {
      if (confirm('Are you sure you want to remove this news story?')) {
        news.update((currentNews: NewsItem[]) => currentNews.filter(item => item.id !== id));
      }
    }
  
    // Sorting and collapsing state for each section
    let sortOptions = {
      recent: 'date-desc',
      favorite: 'date-desc',
      steam: 'date-desc'
    };
  
    let isCollapsed = {
      recent: false,
      favorite: false,
      steam: false
    };
  
    // Function to sort news based on selected option
    function sortNews(section: keyof typeof sortOptions, option: string) {
      sortOptions = { ...sortOptions, [section]: option };
      console.log(`Sort option for ${section} set to ${option}`);
    }
  
    // Function to toggle collapse state
    function toggleCollapse(section: keyof typeof isCollapsed) {
      isCollapsed = { ...isCollapsed, [section]: !isCollapsed[section] };
      console.log(`Section ${section} is now ${isCollapsed[section] ? 'collapsed' : 'expanded'}`);
    }
  
    // Reactive sorted lists
    $: sortedRecentNews = sortOptions.recent === 'date-asc'
      ? [...$recentNews].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      : sortOptions.recent === 'date-desc'
      ? [...$recentNews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      : sortOptions.recent === 'title-asc'
      ? [...$recentNews].sort((a, b) => a.title.localeCompare(b.title))
      : sortOptions.recent === 'title-desc'
      ? [...$recentNews].sort((a, b) => b.title.localeCompare(a.title))
      : [...$recentNews];
  
    $: sortedFavoriteGamesNews = sortOptions.favorite === 'date-asc'
      ? [...$favoriteGamesNews].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      : sortOptions.favorite === 'date-desc'
      ? [...$favoriteGamesNews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      : sortOptions.favorite === 'title-asc'
      ? [...$favoriteGamesNews].sort((a, b) => a.title.localeCompare(b.title))
      : sortOptions.favorite === 'title-desc'
      ? [...$favoriteGamesNews].sort((a, b) => b.title.localeCompare(a.title))
      : [...$favoriteGamesNews];
  
    $: sortedFromSteamNews = sortOptions.steam === 'date-asc'
      ? [...$fromSteamNews].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      : sortOptions.steam === 'date-desc'
      ? [...$fromSteamNews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      : sortOptions.steam === 'title-asc'
      ? [...$fromSteamNews].sort((a, b) => a.title.localeCompare(b.title))
      : sortOptions.steam === 'title-desc'
      ? [...$fromSteamNews].sort((a, b) => b.title.localeCompare(a.title))
      : [...$fromSteamNews];
  
    // Debugging: Verify date formats
    recentNews.subscribe($recentNews => {
      console.log('Recent News Dates:', $recentNews.map(item => item.date));
    });
  
    favoriteGamesNews.subscribe($favoriteGamesNews => {
      console.log('Favorite Games News Dates:', $favoriteGamesNews.map(item => item.date));
    });
  
    fromSteamNews.subscribe($fromSteamNews => {
      console.log('From Steam News Dates:', $fromSteamNews.map(item => item.date));
    });
  </script>
  
  <style>
    .news-section {
      margin-bottom: 40px;
    }
  
    .news-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
  
    .news-header h2 {
      font-size: 1.5rem;
      color: #66C0F4;
    }
  
    .news-controls {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  
    .news-item {
      border: 1px solid #444;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 10px;
      background-color: #1E2329;
      color: #fff;
      position: relative;
    }
  
    .news-item h3 {
      margin: 0 0 10px 0;
    }
  
    .news-item p {
      margin: 0;
    }
  
    .remove-button {
      position: absolute;
      top: 10px;
      right: 10px;
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
  
    .sort-select {
      padding: 5px;
      border-radius: 4px;
      border: none;
      cursor: pointer;
      background-color: #2a2a2a;
      color: #fff;
    }
  
    .collapse-button {
      background-color: transparent;
      border: none;
      color: #66C0F4;
      cursor: pointer;
      font-size: 1rem;
      display: flex;
      align-items: center;
    }
  
    .collapse-button::before {
      content: '▾';
      display: inline-block;
      transition: transform 0.2s;
      margin-right: 5px;
    }
  
    .collapse-button.collapsed::before {
      transform: rotate(-90deg);
    }
  </style>
  
  <div>
    <!-- Recent News -->
    <div class="news-section">
      <div class="news-header">
        <h2>Recent News</h2>
        <div class="news-controls">
          <select
            class="sort-select"
            on:change={(e: Event) => {
              const target = e.target as HTMLSelectElement;
              sortNews('recent', target.value);
            }}
          >
            <option value="date-desc">Date (Newest)</option>
            <option value="date-asc">Date (Oldest)</option>
            <option value="title-asc">Title (A-Z)</option>
            <option value="title-desc">Title (Z-A)</option>
          </select>
          <button
            class="collapse-button {isCollapsed.recent ? 'collapsed' : ''}"
            on:click={() => toggleCollapse('recent')}
            aria-label={isCollapsed.recent ? 'Expand Recent News' : 'Collapse Recent News'}
          >
            {isCollapsed.recent ? 'Expand' : 'Collapse'}
          </button>
        </div>
      </div>
      {#if !isCollapsed.recent}
        {#if sortedRecentNews.length > 0}
          {#each sortedRecentNews as item (item.id)}
            <div class="news-item">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <p><em>{item.date}</em></p>
              <button
                class="remove-button"
                on:click={() => removeNews(item.id)}
                aria-label={`Remove news titled ${item.title}`}
              >
                ×
              </button>
            </div>
          {/each}
        {:else}
          <p>No recent news available.</p>
        {/if}
      {/if}
    </div>
  
    <!-- Favorite Games News -->
    <div class="news-section">
      <div class="news-header">
        <h2>Favorite Games News</h2>
        <div class="news-controls">
          <select
            class="sort-select"
            on:change={(e: Event) => {
              const target = e.target as HTMLSelectElement;
              sortNews('favorite', target.value);
            }}
          >
            <option value="date-desc">Date (Newest)</option>
            <option value="date-asc">Date (Oldest)</option>
            <option value="title-asc">Title (A-Z)</option>
            <option value="title-desc">Title (Z-A)</option>
          </select>
          <button
            class="collapse-button {isCollapsed.favorite ? 'collapsed' : ''}"
            on:click={() => toggleCollapse('favorite')}
            aria-label={isCollapsed.favorite ? 'Expand Favorite Games News' : 'Collapse Favorite Games News'}
          >
            {isCollapsed.favorite ? 'Expand' : 'Collapse'}
          </button>
        </div>
      </div>
      {#if !isCollapsed.favorite}
        {#if sortedFavoriteGamesNews.length > 0}
          {#each sortedFavoriteGamesNews as item (item.id)}
            <div class="news-item">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <p><em>{item.date}</em></p>
              <button
                class="remove-button"
                on:click={() => removeNews(item.id)}
                aria-label={`Remove news titled ${item.title}`}
              >
                ×
              </button>
            </div>
          {/each}
        {:else}
          <p>No favorite games news available.</p>
        {/if}
      {/if}
    </div>
  
    <!-- From Steam -->
    <div class="news-section">
      <div class="news-header">
        <h2>From Steam</h2>
        <div class="news-controls">
          <select
            class="sort-select"
            on:change={(e: Event) => {
              const target = e.target as HTMLSelectElement;
              sortNews('steam', target.value);
            }}
          >
            <option value="date-desc">Date (Newest)</option>
            <option value="date-asc">Date (Oldest)</option>
            <option value="title-asc">Title (A-Z)</option>
            <option value="title-desc">Title (Z-A)</option>
          </select>
          <button
            class="collapse-button {isCollapsed.steam ? 'collapsed' : ''}"
            on:click={() => toggleCollapse('steam')}
            aria-label={isCollapsed.steam ? 'Expand From Steam News' : 'Collapse From Steam News'}
          >
            {isCollapsed.steam ? 'Expand' : 'Collapse'}
          </button>
        </div>
      </div>
      {#if !isCollapsed.steam}
        {#if sortedFromSteamNews.length > 0}
          {#each sortedFromSteamNews as item (item.id)}
            <div class="news-item">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <p><em>{item.date}</em></p>
              <button
                class="remove-button"
                on:click={() => removeNews(item.id)}
                aria-label={`Remove news titled ${item.title}`}
              >
                ×
              </button>
            </div>
          {/each}
        {:else}
          <p>No news from Steam available.</p>
        {/if}
      {/if}
    </div>
  </div>
  