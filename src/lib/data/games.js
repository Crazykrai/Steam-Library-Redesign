// src/lib/data/games.js

export const allGames = [
    {
      name: 'Batman',
      installed: false,
      image: '/images/batman_arkham.jpg', // Original local image
      link: '/game/batman',
      bg: 'https://gameswithfriendswrites.wordpress.com/wp-content/uploads/2015/07/batman-arkham-knight-game-hd-wallpaper-1080p.jpg', // Batman game wallpaper
      friends: {
        playing: [
          { name: 'GothamKnight', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
          { name: 'DarkKnight', avatar: 'https://randomuser.me/api/portraits/men/45.jpg' },
          { name: 'BatLover', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
        ],
        previous: [
          { name: 'Nightwing', avatar: 'https://randomuser.me/api/portraits/men/54.jpg' },
        ],
      },
      achievements: {
        unlocked: [
          {
            name: 'First Justice',
            description: 'Completed the tutorial mission.',
            badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/d5e1a33157cc4fa93d2ecc6bc20c03ede9af3b9c.jpg', // Two swords
          },
          {
            name: 'Detective',
            description: 'Solved the first major case.',
            badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/95fc4e1756fb01c6e50a5bc48fd28e964a59fe5f.jpg', // Bronze metal with a circle
          },
        ],
        locked: [
          {
            name: 'Master Detective',
            description: 'Solved all cases without any hints.',
            badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/1f4dc0ba5804b18f24a0df73a8c3ec0a8cf8cbf2.jpg', // Diamond with sparkles
          },
          {
            name: 'Guardian of Gotham',
            description: 'Completed all missions in Gotham City.',
            badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/b44494c9a815d8d6e9f02561472c4dfeaf5e7e34.jpg', // Key
          },
        ],
      },
      lastSession: {
        date: 'October 10',
        duration: '1.5', // Duration in hours
        unlocked: '2',
        screenshots: '3',
        friends: '1',
        summary: [
          'Completed the Arkham City mission',
          'Defeated the Joker in the main storyline',
          'Unlocked the Batmobile upgrade',
        ],
      },
      dlc: [
        {
          name: 'Red Hood Story Pack',
          image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/313101/header.jpg?t=1449788469',
        },
        {
          name: 'Cold Cold Heart',
          image: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/277830/header.jpg?t=1447360331', // Example DLC image
        },
      ],
    },
    {
      name: 'Bioshock',
      installed: false,
      image: '/images/bioshock.jpg', // Original local image
      link: '/game/bioshock',
      bg: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/7670/header.jpg?t=1730172622', // Bioshock game wallpaper
      friends: {
        playing: [
          { name: 'RaptureRuler', avatar: 'https://randomuser.me/api/portraits/men/65.jpg' },
          { name: 'BigDaddy', avatar: 'https://randomuser.me/api/portraits/men/66.jpg' },
          { name: 'LittleSister', avatar: 'https://randomuser.me/api/portraits/women/67.jpg' },
        ],
        previous: [
          { name: 'Splicer', avatar: 'https://randomuser.me/api/portraits/men/68.jpg' },
        ],
      },
      achievements: {
        unlocked: [
          {
            name: 'Arrival',
            description: 'Entered Rapture for the first time.',
            badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/d5e1a33157cc4fa93d2ecc6bc20c03ede9af3b9c.jpg', // Two swords
          },
          {
            name: 'First Hunt',
            description: 'Defeated your first Big Daddy.',
            badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/95fc4e1756fb01c6e50a5bc48fd28e964a59fe5f.jpg', // Bronze metal with a circle
          },
        ],
        locked: [
          {
            name: 'Perfect Hunter',
            description: 'Completed the game without taking any damage.',
            badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/1f4dc0ba5804b18f24a0df73a8c3ec0a8cf8cbf2.jpg', // Diamond with sparkles
          },
          {
            name: 'Architect of Rapture',
            description: 'Discovered all hidden areas in Rapture.',
            badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/b44494c9a815d8d6e9f02561472c4dfeaf5e7e34.jpg', // Key
          },
        ],
      },
      lastSession: {
        date: 'October 20',
        duration: '3.2',
        unlocked: '5',
        screenshots: '7',
        friends: '2',
        summary: [
          'Explored the Fontaine District',
          'Defeated the Plasmid users in Adventure Bay',
          'Collected all audio diaries in Rapture',
        ],
      },
      dlc: [
        {
          name: 'Burial at Sea - Episode 1',
          image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/214932/header.jpg?t=1560958834', // Example DLC image
        },
        {
          name: 'Minervas Den',
          image: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/244610/header.jpg?t=1730176548', // Example DLC image
        },
      ],
    },
    {
      name: 'Borderlands 2',
      installed: true,
      image: '/images/borderlands2.jpg', // Original local image
      link: '/game/borderlands2',
      bg: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/49520/header.jpg?t=1728608124', // Borderlands 2 game wallpaper
      friends: {
        playing: [
          { name: 'VaultHunter1', avatar: 'https://randomuser.me/api/portraits/men/69.jpg' },
          { name: 'Lilith', avatar: 'https://randomuser.me/api/portraits/women/70.jpg' },
          { name: 'Maya', avatar: 'https://randomuser.me/api/portraits/women/71.jpg' },
        ],
        previous: [
          { name: 'Salvador', avatar: 'https://randomuser.me/api/portraits/men/72.jpg' },
        ],
      },
      achievements: {
        unlocked: [
          {
            name: 'Ready, Aim, Fire',
            description: 'Completed the first mission.',
            badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/d5e1a33157cc4fa93d2ecc6bc20c03ede9af3b9c.jpg', // Two swords
          },
          {
            name: 'Hero of Pandora',
            description: 'Defeated the first boss.',
            badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/95fc4e1756fb01c6e50a5bc48fd28e964a59fe5f.jpg', // Bronze metal with a circle
          },
        ],
        locked: [
          {
            name: 'Legendary Vault Hunter',
            description: 'Unlocked all character abilities.',
            badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/1f4dc0ba5804b18f24a0df73a8c3ec0a8cf8cbf2.jpg', // Diamond with sparkles
          },
          {
            name: 'Pandora Master',
            description: 'Completed all side quests on Pandora.',
            badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/b44494c9a815d8d6e9f02561472c4dfeaf5e7e34.jpg', // Key
          },
        ],
      },
      lastSession: {
        date: 'November 05',
        duration: '4.0',
        unlocked: '8',
        screenshots: '10',
        friends: '3',
        summary: [
          'Completed the main storyline mission “A Train to Catch”',
          'Defeated Handsome Jack',
          'Unlocked all DLC content for Borderlands 2',
        ],
      },
      dlc: [
        {
          name: 'Hammerlock’s Big Game Hunt',
          image: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/213250/header.jpg?t=1692309245', // Example DLC image
        },
        {
          name: 'Captain Scarlett and her Pirate’s Booty',
          image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/207870/header.jpg?t=1692309024', // Example DLC image
        },
      ],
    },
    {
      name: 'Halo',
      installed: true,
      image: '/images/halo.jpg', // Original local image
      link: '/game/halo',
      bg: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/976730/capsule_616x353.jpg?t=1670458602', // Halo game wallpaper
      friends: {
        playing: [
          { name: 'MasterChief', avatar: 'https://randomuser.me/api/portraits/men/73.jpg' },
          { name: 'Spartan117', avatar: 'https://randomuser.me/api/portraits/men/74.jpg' },
          { name: 'Cortana', avatar: 'https://randomuser.me/api/portraits/women/75.jpg' },
        ],
        previous: [
          { name: 'Arbiter', avatar: 'https://randomuser.me/api/portraits/men/76.jpg' },
        ],
      },
      achievements: {
        unlocked: [
          {
            name: 'Spartan Initiate',
            description: 'Completed the first level.',
            badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/d5e1a33157cc4fa93d2ecc6bc20c03ede9af3b9c.jpg', // Two swords
          },
          {
            name: 'Forerunner',
            description: 'Discovered a Forerunner artifact.',
            badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/95fc4e1756fb01c6e50a5bc48fd28e964a59fe5f.jpg', // Bronze metal with a circle
          },
        ],
        locked: [
          {
            name: 'Legendary Spartan',
            description: 'Completed the game on Legendary difficulty.',
            badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/1f4dc0ba5804b18f24a0df73a8c3ec0a8cf8cbf2.jpg', // Diamond with sparkles
          },
          {
            name: 'Master Tactician',
            description: 'Won 50 multiplayer matches.',
            badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/b44494c9a815d8d6e9f02561472c4dfeaf5e7e34.jpg', // Key
          },
        ],
      },
      lastSession: {
        date: 'November 15',
        duration: '2.8',
        unlocked: '4',
        screenshots: '5',
        friends: '2',
        summary: [
          'Completed the mission “The Silent Cartographer”',
          'Reached Rank 10 in multiplayer',
          'Unlocked the Energy Sword',
        ],
      },
      dlc: [
        {
          name: 'Halo Reach Expansion',
          image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1064220/header.jpg?t=1634231207', // Example DLC image
        },
        {
          name: 'Halo Infinite Expansion',
          image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1708091/header.jpg?t=1706638660', // Example DLC image
        },
      ],
    },
    {
      name: 'Sonic Frontiers',
      installed: true,
      image: 'https://cdn2.steamgriddb.com/icon/108fe115000c147427da50c2b0c9ce31.png',
      link: '/game/sonicfrontiers',
      bg: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1237320/capsule_616x353.jpg?t=1709923853',
      friends: {
        playing: [
          {
            name: 'Crazykrai',
            avatar: 'https://avatars.cloudflare.steamstatic.com/05a1c0aeccd39084b7b938ad670dca0210af2b63_full.jpg',
          },
          {
            name: 'Cocinero',
            avatar: 'https://avatars.cloudflare.steamstatic.com/3d1b30fccd5d75c54b39521625822bafd3762723_full.jpg',
          },
          {
            name: 'PeanutButterRocket',
            avatar: 'https://avatars.cloudflare.steamstatic.com/ae4b8370cb09ac768f325e744a54900b797fd719_full.jpg',
          },
        ],
        previous: [
          {
            name: 'NsMonado',
            avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/253230/e73f44b5881634c4fd944275cddff6515cb1cb1d.gif',
          },
        ],
      },
      achievements: {
        unlocked: [
          {
            name: 'The Journey Begins',
            description: 'Completed the Kronos Island tutorials.',
            badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/d5e1a33157cc4fa93d2ecc6bc20c03ede9af3b9c.jpg', // Two swords
          },
          {
            name: 'Unknown Threat',
            description: 'Defeated a guardian for the first time.',
            badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/d5e1a33157cc4fa93d2ecc6bc20c03ede9af3b9c.jpg', // Two swords
          },
          {
            name: 'Speed Demon',
            description: 'Activated a Power Boost for the first time.',
            badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/95fc4e1756fb01c6e50a5bc48fd28e964a59fe5f.jpg', // Bronze metal with a circle
          },
          {
            name: 'The Beginning',
            description: 'Defeated the Titan and completed the main story on Kronos Island.',
            badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/e4cedc823e34fe6227d96ff9be532e3a4fee1f11.jpg', // Diamond without sparkles
          },
        ],
        locked: [
          {
            name: 'Perfect Run',
            description: 'Completed all Missions in one Cyber Space area.',
            badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/b44494c9a815d8d6e9f02561472c4dfeaf5e7e34.jpg', // Key
          },
          {
            name: 'Ancient Defiance',
            description: 'Defeated the Titan and completed the main story on Ares Island.',
            badge: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1237320/1f4dc0ba5804b18f24a0df73a8c3ec0a8cf8cbf2.jpg', // Diamond with sparkles
          },
        ],
      },
      lastSession: {
        date: 'September 26',
        duration: '2.6',
        unlocked: '3',
        screenshots: '4',
        friends: '0',
        summary: [
          'Obtained 6 Chaos Emeralds on Ares Island',
          'Defeated GIGANTO to clear Kronos Island',
          'Obtained 6 Chaos Emeralds on Kronos Island',
        ],
      },
      dlc: [
        {
          name: 'Sonic Adventure 2 Shoes',
          image: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2089840/header.jpg?t=1684942619',
        },
        {
          name: 'Holiday Cheer Suit',
          image: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2089733/header.jpg?t=1684865008',
        },
      ],
    },
  
    // Add more games as needed following the same structure
  ];
  