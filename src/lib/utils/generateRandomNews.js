// src/lib/utils/generateRandomNews.js

export function generateRandomNews(numberOfItems, allGames) {
    const categories = ['From Steam', 'Favorite Games', 'Games with Friends Online'];
    const sampleTitles = [
      'Update Released for {game}',
      'New Features Added to {game}',
      '{game} Goes Live on New Platform',
      'Developer Interview: Behind the Scenes of {game}',
      '{game} Expands to New Regions',
      'Community Event: Play {game} with Friends',
      '{game} Receives Critical Acclaim',
      'Exclusive Sneak Peek: Upcoming {game} DLC',
      'Patch Notes: Fixes and Improvements for {game}',
      '{game} Breaks Sales Records',
    ];
  
    const sampleContents = [
      'Detailed description of the news story goes here.',
      'Learn more about the latest developments in this exciting update.',
      'Join us as we explore the new features introduced in this release.',
      'Discover what the developers have to say about the future of this game.',
      'Find out how this game is expanding its reach to new audiences.',
      'Participate in community events and engage with other players.',
      'Read the latest reviews and see why this game is trending.',
      'Get an exclusive look at the upcoming downloadable content.',
      'Check out the latest patch notes and what they mean for your gameplay.',
      'Celebrate as this game hits new milestones in sales and popularity.',
    ];
  
    const generatedNews = [];
  
    for (let i = 0; i < numberOfItems; i++) {
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      const randomTitleTemplate = sampleTitles[Math.floor(Math.random() * sampleTitles.length)];
      const relatedGames = allGames.map(game => game.name);
      const randomRelatedGame = relatedGames[Math.floor(Math.random() * relatedGames.length)];
      const randomTitle = randomTitleTemplate.replace('{game}', randomRelatedGame);
  
      const randomContent = sampleContents[Math.floor(Math.random() * sampleContents.length)];
      const randomDate = new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0]; // Ensures 'YYYY-MM-DD' format
  
      generatedNews.push({
        id: Date.now() + i, // Simple unique id
        title: randomTitle,
        content: randomContent,
        date: randomDate, // Ensured consistent date format
        category: randomCategory,
        relatedGame: randomCategory === 'Favorite Games' ? randomRelatedGame : null,
      });
    }
  
    return generatedNews;
  }
  