// src/lib/data/games.js

export const allGames = [
  { name: 'Batman', image: 'src/lib/images/batman_arkham.jpg', link: '/game/batman' },
  { name: 'Bioshock', image: 'src/lib/images/bioshock.jpg', link: '/game/bioshock' },
  { name: 'Borderlands 2', image: 'src/lib/images/borderlands2.jpg', link: '/game/borderlands2' },
  { name: 'Halo', image: 'src/lib/images/halo.jpg', link: '/game/halo' },
  { name: 'Sonic Frontiers', 
    image: 'https://cdn2.steamgriddb.com/icon/108fe115000c147427da50c2b0c9ce31.png', 
    link: '/game/sonicfrontiers', 
    bg: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1237320/capsule_616x353.jpg?t=1709923853',
    friends: {
      playing: [
        {name: 'Crazykrai', avatar: 'https://avatars.cloudflare.steamstatic.com/05a1c0aeccd39084b7b938ad670dca0210af2b63_full.jpg'},
        {name: 'Cocinero', avatar: 'https://avatars.cloudflare.steamstatic.com/3d1b30fccd5d75c54b39521625822bafd3762723_full.jpg'},
        {name: 'PeanutButterRocket', avatar: 'https://avatars.cloudflare.steamstatic.com/ae4b8370cb09ac768f325e744a54900b797fd719_full.jpg'}

      ],
      previous: [
        {name: 'NsMonado', avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/253230/e73f44b5881634c4fd944275cddff6515cb1cb1d.gif'},
      ]
    },
    achievements: {
      unlocked: [
        {name: 'The Journey Begins', description: 'Completed the Kronos Island tutorials.', badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/d5e1a33157cc4fa93d2ecc6bc20c03ede9af3b9c.jpg'},
        {name: 'Unknown Threat', description: 'Defeated a guardian for the first time.', badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/d5e1a33157cc4fa93d2ecc6bc20c03ede9af3b9c.jpg'},
        {name: 'Speed Demon', description: 'Activated a Power Boost for the first time.', badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/95fc4e1756fb01c6e50a5bc48fd28e964a59fe5f.jpg'},
        {name: 'The Beginning', description: 'Defeated the Titan and completed the main story on Kronos Island.', badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/e4cedc823e34fe6227d96ff9be532e3a4fee1f11.jpg'},
      ],
      locked: [
        {name: 'Perfect Run', description: 'Completed all Missions in one Cyber Space area.', badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/b44494c9a815d8d6e9f02561472c4dfeaf5e7e34.jpg'},
        {name: 'Ancient Defiance', description: 'Defeated the Titan and completed the main story on Ares Island.', badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/1f4dc0ba5804b18f24a0df73a8c3ec0a8cf8cbf2.jpg'},
      ]
    },
    lastSession: {
      date: 'September 26',
      duration: '2.6',
      unlocked: '3',
      screenshots: '4',
      friends: '0',
      summary: ['Obtained 6 Chaos Emeralds on Ares Island', 'Defeated GIGANTO to clear Kronos Island', 'Obtained 6 Chaos Emeralds on Kronos Island']
    },
    dlc: [
      {name: 'Sonic Adventure 2 Shoes', image: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2089840/header.jpg?t=1684942619'},
      {name: 'Holiday Cheer Suit', image: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2089733/header.jpg?t=1684865008'},
    ]
  },

  // Add more games as needed
];
