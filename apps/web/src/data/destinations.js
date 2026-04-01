
export const destinationsData = {
  'sigiriya': {
    id: 'sigiriya',
    name: 'Sigiriya',
    subtitle: 'Ancient Rock Fortress',
    description: 'Climb the iconic Lion Rock and discover ancient frescoes and royal gardens.',
    image: 'https://images.unsplash.com/photo-1624302483197-e722f1175f22',
    distance: '145km',
    travelTime: '3-4 hours',
    overview: 'Sigiriya is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock approximately 200 metres high.',
    bestTime: 'January to April',
    activities: [
      { title: 'Climb Lion Rock', description: 'Ascend the ancient fortress for panoramic views.' },
      { title: 'Pidurangala Rock', description: 'Hike at sunrise for the best view of Sigiriya.' }
    ],
    attractions: [
      { name: 'Dambulla Cave Temple', distance: '20km', time: '30 mins' },
      { name: 'Minneriya National Park', distance: '40km', time: '1 hour' }
    ],
    hotels: [
      { name: 'Water Garden Sigiriya', description: 'Luxury boutique hotel with rock views.', rating: 4.8, price: '$250' },
      { name: 'Aliya Resort & Spa', description: 'Eco-friendly resort with an infinity pool.', rating: 4.6, price: '$180' }
    ]
  },
  'kandy': {
    id: 'kandy',
    name: 'Kandy',
    subtitle: 'Cultural Capital',
    description: 'Home to the Temple of the Tooth Relic and rich Sri Lankan traditions.',
    image: 'https://images.unsplash.com/photo-1693199086582-3054695f79df',
    distance: '115km',
    travelTime: '3 hours',
    overview: 'Kandy is a large city in central Sri Lanka. It\'s set on a plateau surrounded by mountains, which are home to tea plantations and biodiverse rainforest. The city\'s heart is scenic Kandy Lake (Bogambara Lake).',
    bestTime: 'December to April',
    activities: [
      { title: 'Temple of the Tooth', description: 'Visit the sacred Buddhist temple.' },
      { title: 'Botanical Gardens', description: 'Stroll through the Royal Botanical Gardens in Peradeniya.' }
    ],
    attractions: [
      { name: 'Pinnawala Elephant Orphanage', distance: '40km', time: '1.5 hours' },
      { name: 'Knuckles Mountain Range', distance: '45km', time: '2 hours' }
    ],
    hotels: [
      { name: 'The Golden Crown Hotel', description: '5-star luxury set amidst lush greenery.', rating: 4.7, price: '$150' },
      { name: 'OZO Kandy', description: 'Modern resort with sweeping hill views.', rating: 4.5, price: '$120' }
    ]
  },
  'galle-fort': {
    id: 'galle-fort',
    name: 'Galle Fort',
    subtitle: 'Colonial Heritage',
    description: 'Walk through charming streets with Dutch-era architecture by the sea.',
    image: 'https://images.unsplash.com/photo-1599654755053-de0a28fd62b2',
    distance: '140km',
    travelTime: '2.5-3 hours',
    overview: 'Galle Fort, in the Bay of Galle on the southwest coast of Sri Lanka, was built first in 1588 by the Portuguese, then extensively fortified by the Dutch during the 17th century from 1649 onwards.',
    bestTime: 'December to March',
    activities: [
      { title: 'Fort Walk', description: 'Explore the historic ramparts and lighthouse.' },
      { title: 'Boutique Shopping', description: 'Shop for gems, crafts, and antiques in colonial buildings.' }
    ],
    attractions: [
      { name: 'Unawatuna Beach', distance: '6km', time: '15 mins' },
      { name: 'Japanese Peace Pagoda', distance: '5km', time: '15 mins' }
    ],
    hotels: [
      { name: 'Amangalla', description: 'Historic luxury within the fort walls.', rating: 4.9, price: '$450' },
      { name: 'Le Grand Galle', description: 'Elegant colonial-style accommodation.', rating: 4.8, price: '$300' }
    ]
  },
  'ella': {
    id: 'ella',
    name: 'Ella',
    subtitle: 'Hill Country Escape',
    description: 'Experience scenic train rides, waterfalls, and lush green mountains.',
    image: 'https://images.unsplash.com/photo-1615103881178-2fc8a03823ad',
    distance: '180km',
    travelTime: '5-6 hours',
    overview: 'Ella is a small town in the Badulla District of Uva Province, Sri Lanka governed by an Urban Council. It is approximately 200 kilometres east of Colombo and is situated at an elevation of 1,041 metres above sea level.',
    bestTime: 'January to May',
    activities: [
      { title: 'Nine Arch Bridge', description: 'See the iconic colonial-era railway bridge.' },
      { title: 'Little Adam\'s Peak', description: 'A scenic hike through tea plantations.' }
    ],
    attractions: [
      { name: 'Ravana Falls', distance: '6km', time: '20 mins' },
      { name: 'Lipton\'s Seat', distance: '30km', time: '1.5 hours' }
    ],
    hotels: [
      { name: '98 Acres Resort', description: 'Stunning eco-resort surrounded by tea estates.', rating: 4.8, price: '$280' },
      { name: 'Ekho Ella', description: 'Modern comfort with panoramic mountain views.', rating: 4.6, price: '$150' }
    ]
  },
  'mirissa-beach': {
    id: 'mirissa-beach',
    name: 'Mirissa Beach',
    subtitle: 'Beach Paradise',
    description: 'Relax on golden beaches and enjoy whale watching adventures.',
    image: 'https://images.unsplash.com/photo-1690305861775-1a3d59266e43',
    distance: '160km',
    travelTime: '3-4 hours',
    overview: 'Mirissa is a small town on the south coast of Sri Lanka, located in the Matara District of the Southern Province. Mirissa\'s beach and nightlife make it a popular tourist destination.',
    bestTime: 'November to April',
    activities: [
      { title: 'Whale Watching', description: 'Spot blue whales and dolphins in the Indian Ocean.' },
      { title: 'Coconut Tree Hill', description: 'A picturesque viewpoint perfect for sunset.' }
    ],
    attractions: [
      { name: 'Secret Beach', distance: '2km', time: '10 mins' },
      { name: 'Weligama', distance: '8km', time: '20 mins' }
    ],
    hotels: [
      { name: 'Sri Sharavi Beach Villas', description: 'Luxury beachfront villas.', rating: 4.7, price: '$220' },
      { name: 'Ubuntu Beach Villas', description: 'Boutique stay right on the sand.', rating: 4.5, price: '$160' }
    ]
  },
  'trincomalee': {
    id: 'trincomalee',
    name: 'Trincomalee',
    subtitle: 'Coastal Gem',
    description: 'Discover pristine beaches, historic temples, and vibrant marine life in this scenic coastal town.',
    image: 'https://images.unsplash.com/photo-1551734297-8b58881ac1e9',
    distance: '260km',
    travelTime: '6-7 hours',
    overview: 'Trincomalee is a major resort port city of Eastern Province, Sri Lanka and lies on the east coast of the island, about 113 miles south of Jaffna. The city is built on a peninsula of the same name, which divides its inner and outer harbours.',
    bestTime: 'May to October',
    activities: [
      { title: 'Pigeon Island', description: 'Snorkel with reef sharks and turtles.' },
      { title: 'Koneswaram Temple', description: 'Visit the historic Hindu temple on Swami Rock.' }
    ],
    attractions: [
      { name: 'Nilaveli Beach', distance: '15km', time: '30 mins' },
      { name: 'Marble Beach', distance: '18km', time: '35 mins' }
    ],
    hotels: [
      { name: 'Trinco Blu by Cinnamon', description: 'Retro-chic resort on the beach.', rating: 4.6, price: '$140' },
      { name: 'Amaranthe Bay Resort', description: 'Luxury resort with a massive pool.', rating: 4.5, price: '$130' }
    ]
  }
};

export const destinationsList = Object.values(destinationsData);
