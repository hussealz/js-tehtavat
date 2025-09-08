// Restaurant data (50 restaurants)
const restaurants = [
  {
    location: {type: 'Point', coordinates: [25.018456, 60.228982]},
    name: 'Ravintola Ladonlukko',
    address: 'Latokartanonkaari 9 A',
    postalCode: '00790',
    city: 'Helsinki',
  },
  {
    location: {type: 'Point', coordinates: [24.903147, 60.221729]},
    name: 'Ravintola Stadin AO Ilkantie',
    address: 'Ilkantie 3',
    postalCode: '00400',
    city: 'Helsinki',
  },
  {
    location: {type: 'Point', coordinates: [24.95576, 60.196672]},
    name: 'Stadin AO - Hattulantie 2',
    address: 'Hattulantie 2',
    postalCode: '00550',
    city: 'Helsinki',
  },
  {
    location: {type: 'Point', coordinates: [24.94886, 60.218638]},
    name: 'Stadin AO Kullervonkatu',
    address: 'Kullervonkatu 11',
    postalCode: '00610',
    city: 'Helsinki',
  },
  {
    location: {type: 'Point', coordinates: [24.946847, 60.194701]},
    name: 'Stadin AO TK 23',
    address: 'Teollisuuskatu 23-25',
    postalCode: '00510',
    city: 'Helsinki',
  },
  {
    location: {type: 'Point', coordinates: [24.950631, 60.169096]},
    name: 'Helsingin yliopisto Päärakennus',
    address: 'Aleksanterinkatu 5',
    postalCode: '00170',
    city: 'Helsinki',
  },
  {
    location: {type: 'Point', coordinates: [24.479222, 60.977511]},
    name: 'Ravintola Visis - HAMK Hämeenlinna',
    address: 'Visamäentie 35, D-rakennus',
    postalCode: '13500',
    city: 'Hämeenlinna',
  },
  {
    location: {type: 'Point', coordinates: [23.856847, 61.449716]},
    name: 'Ravintola Hertsi',
    address: 'Korkeakoulunkatu 1',
    postalCode: '33720',
    city: 'Tampere',
  },
  {
    location: {type: 'Point', coordinates: [22.826006, 62.788814]},
    name: 'Ravintola ja kahvila Kampustalo',
    address: 'Kalevankatu 35',
    postalCode: '60100',
    city: 'Seinäjoki',
  },
  {
    location: {type: 'Point', coordinates: [22.821736, 62.790536]},
    name: 'Ravintola Frami',
    address: 'Kampusranta 11',
    postalCode: '60320',
    city: 'Seinäjoki',
  },
  {
    location: {type: 'Point', coordinates: [23.160741, 63.833899]},
    name: 'Campusravintola',
    address: 'Talonpojankatu 2',
    postalCode: '67100',
    city: 'Kokkola',
  },
  {
    location: {type: 'Point', coordinates: [23.778004, 61.495009]},
    name: 'Ravintola Linna',
    address: 'Kalevantie 5',
    postalCode: '33100',
    city: 'Tampere',
  },
  {
    location: {type: 'Point', coordinates: [22.22723, 60.4396]},
    name: 'Ravintola Fiskarholmen - Auriga Business Center',
    address: 'Juhana Herttuan Puistokatu 21',
    postalCode: '20100',
    city: 'Turku',
  },
  {
    location: {type: 'Point', coordinates: [22.292545, 60.451904]},
    name: 'Flavoria Medisiina D',
    address: 'Kiinamyllynkatu 10 D',
    postalCode: '20520',
    city: 'Turku',
  },
  {
    location: {type: 'Point', coordinates: [22.300353, 60.452543]},
    name: 'Ravintola Old Mill',
    address: 'Ruukinkatu 2-4',
    postalCode: '20540',
    city: 'Turku',
  },
  {
    location: {type: 'Point', coordinates: [23.997606, 61.279413]},
    name: 'Ravintola Koski - HAMK Valkeakoski',
    address: 'Lotilantie 16',
    postalCode: '37630',
    city: 'Valkeakoski',
  },
  {
    location: {type: 'Point', coordinates: [24.843822, 60.258218]},
    name: 'Metropolia Myyrmäki',
    address: 'Leiritie 1',
    postalCode: '01600',
    city: 'Vantaa',
  },
  {
    location: {type: 'Point', coordinates: [25.017745, 60.250063]},
    name: 'Stadin AO Vilppulantie',
    address: 'Vilppulantie 14',
    postalCode: '00700',
    city: 'Helsinki',
  },
  {
    location: {type: 'Point', coordinates: [23.0664, 61.764526]},
    name: 'Ravintola Ilona',
    address: 'Eino Salmelaisen katu 20',
    postalCode: '39500',
    city: 'Ikaalinen',
  },
  {
    location: {type: 'Point', coordinates: [24.8256169, 60.1846499]},
    name: 'A Bloc',
    address: 'Otaniementie 12',
    postalCode: '02150',
    city: 'Espoo',
  },
  {
    location: {type: 'Point', coordinates: [24.9241528, 60.1711969]},
    name: 'Hanken',
    address: 'Arkadiankatu 22',
    postalCode: '00100',
    city: 'Helsinki',
  },
  {
    location: {type: 'Point', coordinates: [24.9588696, 60.1810957]},
    name: 'Kookos',
    address: 'Haapaniemenkatu 6',
    postalCode: '00530',
    city: 'Helsinki',
  },
  {
    location: {type: 'Point', coordinates: [24.7586024, 60.223184]},
    name: 'Metropolia',
    address: 'Karakaarenkuja 6',
    postalCode: '02610',
    city: 'Espoo',
  },
  {
    location: {type: 'Point', coordinates: [29.7413311, 62.6050148]},
    name: 'Futura',
    address: 'Yliopistokatu 7',
    postalCode: '80100',
    city: 'Joensuu',
  },
  {
    location: {type: 'Point', coordinates: [24.8323964, 60.18514089999999]},
    name: 'Dipoli ravintolat',
    address: 'Otakaari 24',
    postalCode: '02150',
    city: 'Espoo',
  },
  {
    location: {type: 'Point', coordinates: [24.922711, 60.18219649999999]},
    name: 'Töölö 37',
    address: 'Töölönkatu 37',
    postalCode: '00260',
    city: 'Helsinki',
  },
  {
    location: {type: 'Point', coordinates: [27.6367251, 62.8908459]},
    name: 'Tietoteknia',
    address: 'Savilahdentie 6',
    postalCode: '70210',
    city: 'Kuopio',
  },
  {
    location: {type: 'Point', coordinates: [25.7150496, 66.4853375]},
    name: 'Petronella',
    address: 'Yliopistonkatu 8',
    postalCode: '96300',
    city: 'Rovaniemi',
  },
  {
    location: {type: 'Point', coordinates: [21.8005159, 61.4923989]},
    name: 'Sofia',
    address: 'Siltapuistokatu 2',
    postalCode: '28100',
    city: 'Pori',
  },
  {
    location: {type: 'Point', coordinates: [25.509396, 65.0087233]},
    name: 'Alwari',
    address: 'Kiviharjuntie 4',
    postalCode: '90220',
    city: 'Oulu',
  },
  {
    location: {type: 'Point', coordinates: [29.7444642, 62.60484529999999]},
    name: 'Opiskelijaravintola Carelia',
    address: 'Yliopistokatu 4',
    postalCode: '80100',
    city: 'Joensuu',
  },
  {
    location: {type: 'Point', coordinates: [23.7779331, 61.49346079999999]},
    name: 'Minerva',
    address: 'Kanslerinrinne 1',
    postalCode: '33100',
    city: 'Tampere',
  },
  {
    location: {type: 'Point', coordinates: [24.9354404, 60.2017311]},
    name: 'Opetustalo',
    address: 'Rautatieläisenkatu 5',
    postalCode: '00520',
    city: 'Helsinki',
  },
  {
    location: {type: 'Point', coordinates: [29.7463409, 62.60605829999999]},
    name: 'Kampus Bistro',
    address: 'Opiskelijankatu 7',
    postalCode: '80130',
    city: 'Joensuu',
  },
  {
    location: {type: 'Point', coordinates: [24.8057171, 60.18600780000001]},
    name: 'Laurea Otaniemen kampus',
    address: 'Metsänpojankuja 3',
    postalCode: '02130',
    city: 'Espoo',
  },
  {
    location: {type: 'Point', coordinates: [29.7782989, 62.59646850000001]},
    name: 'Wire',
    address: 'Karjalankatu 3',
    postalCode: '80200',
    city: 'Joensuu',
  },
  {
    location: {type: 'Point', coordinates: [27.6352768, 62.8920528]},
    name: 'Itä-Suomen yliopisto/ Mediteknia',
    address: 'Yliopistonranta 1',
    postalCode: '70210',
    city: 'Kuopio',
  },
  {
    location: {type: 'Point', coordinates: [25.4203294, 64.80288469999999]},
    name: 'Joutsenkartano',
    address: 'Iivarinpolku 2',
    postalCode: '91900',
    city: 'Liminka',
  },
  {
    location: {type: 'Point', coordinates: [24.5149564, 64.07371549999999]},
    name: 'Messi',
    address: 'Vierimaantie 7',
    postalCode: '84100',
    city: 'Ylivieska',
  },
  {
    location: {type: 'Point', coordinates: [27.6411799, 62.8951821]},
    name: 'Itä-Suomen yliopisto/Canthia',
    address: 'Yliopistonranta 1 C, B porras',
    postalCode: '70210',
    city: 'Kuopio',
  },
  {
    location: {type: 'Point', coordinates: [24.977768, 60.2094463]},
    name: 'Arabianranta',
    address: 'Hämeentie 135 A',
    postalCode: '00560',
    city: 'Helsinki',
  },
  {
    location: {type: 'Point', coordinates: [29.7789469, 62.5887184]},
    name: 'Solina',
    address: 'Tikkarinne 9',
    postalCode: '80200',
    city: 'Joensuu',
  },
  {
    location: {type: 'Point', coordinates: [21.6160466, 63.0947465]},
    name: 'Cafe Hermes',
    address: 'Kauppapuistikko 2',
    postalCode: '65100',
    city: 'Vaasa',
  },
  {
    location: {type: 'Point', coordinates: [29.7413311, 62.6050148]},
    name: 'Natura',
    address: 'Yliopistokatu 7',
    postalCode: '80100',
    city: 'Joensuu',
  },
  {
    location: {type: 'Point', coordinates: [25.7286139, 66.4967017]},
    name: 'Kuukkeli',
    address: 'Hallituskatu 3 A',
    postalCode: '96100',
    city: 'Rovaniemi',
  },
  {
    location: {type: 'Point', coordinates: [24.9352418, 60.173658]},
    name: 'Klubi',
    address: 'Mannerheimintie 13 A',
    postalCode: '00100',
    city: 'Helsinki',
  },
  {
    location: {type: 'Point', coordinates: [25.0811604, 60.45285939999999]},
    name: 'Yolanda',
    address: 'Järvenpääntie 640',
    postalCode: '04400',
    city: 'Järvenpää',
  },
  {
    location: {type: 'Point', coordinates: [25.7338487, 62.235725]},
    name: 'Jyväskylä YO, kirjasto Lähde, Ravintola Taide ja kahvila Tiede',
    address: 'Seminaarinkatu 15, B-rak.',
    postalCode: '40100',
    city: 'Jyväskylä',
  },
  {
    location: {type: 'Point', coordinates: [25.044058, 60.294987]},
    name: 'Laurea Tikkurilan kampus',
    address: 'Ratatie 22',
    postalCode: '01300',
    city: 'Vantaa',
  },
  {
    location: {type: 'Point', coordinates: [24.965514, 60.2015993]},
    name: 'Arcada',
    address: 'Jan-Magnus Janssonin Aukio 1',
    postalCode: '00550',
    city: 'Helsinki',
  },
  {
    location: {type: 'Point', coordinates: [25.0193211, 60.2230729]},
    name: 'Tähkä',
    address: 'Koetilantie 7',
    postalCode: '00790',
    city: 'Helsinki',
  },
  {
    location: {type: 'Point', coordinates: [25.7219359, 66.481552]},
    name: 'Lapin AMK, Tekuila ja Cafe Lumen',
    address: 'Jokiväylä 11',
    postalCode: '96300',
    city: 'Rovaniemi',
  },
  {
    location: {type: 'Point', coordinates: [21.6216448, 63.0873416]},
    name: 'Ravintola Wasa',
    address: 'Hietalahdenkatu 2-4, H-talo 3 krs.',
    postalCode: '65130',
    city: 'Vaasa',
  },
  {
    location: {type: 'Point', coordinates: [24.969184, 60.1990235]},
    name: 'DIAK Kalasatama',
    address: 'Kyläsaarenkuja 2',
    postalCode: '00580',
    city: 'Helsinki',
  },
  {
    location: {type: 'Point', coordinates: [25.4703513, 65.00887039999999]},
    name: 'Kantakortteli',
    address: 'Albertinkatu 16',
    postalCode: '90100',
    city: 'Oulu',
  },
  {
    location: {type: 'Point', coordinates: [29.7413311, 62.6050148]},
    name: 'Wicked Rabbit Metria',
    address: 'Yliopistokatu 7',
    postalCode: '80100',
    city: 'Joensuu',
  },
  {
    location: {type: 'Point', coordinates: [24.5800774, 65.7535821]},
    name: 'Lapin AMK, kahvila ja ravintola Lippo',
    address: 'Tietokatu 1',
    postalCode: '94600',
    city: 'Kemi',
  },
  {
    location: {type: 'Point', coordinates: [24.8550865, 60.6264543]},
    name: 'Laurea Hyvinkään kampus',
    address: 'Uudenmaankatu 22',
    postalCode: '05800',
    city: 'Hyvinkää',
  },
  {
    location: {type: 'Point', coordinates: [24.977768, 60.2094463]},
    name: 'Luova',
    address: 'Hämeentie 135 D',
    postalCode: '00560',
    city: 'Helsinki',
  }
];

// Function to calculate distance using Haversine formula (more accurate for Earth)
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c; // Distance in kilometers
  return distance;
}

// Function to display restaurants
function displayRestaurants(restaurants) {
  const table = document.querySelector('table');
  
  // Clear existing rows (except header)
  const existingRows = table.querySelectorAll('tr:not(:first-child)');
  existingRows.forEach(row => row.remove());
  
  restaurants.forEach(restaurant => {
    const row = document.createElement('tr');
    
    const nameCell = document.createElement('td');
    nameCell.textContent = restaurant.name;
    
    const addressCell = document.createElement('td');
    addressCell.textContent = `${restaurant.address}, ${restaurant.postalCode} ${restaurant.city}`;
    
    row.appendChild(nameCell);
    row.appendChild(addressCell);
    table.appendChild(row);
  });
}

// Simple version that works without geolocation
function init() {
  console.log('Initializing restaurants...');
  
  // Use Metropolia Karamalmi as default location
  const userLat = 60.223184;
  const userLon = 24.7586024;
  
  // Calculate distances and sort
  const restaurantsWithDistance = restaurants.map(restaurant => {
    const [restLon, restLat] = restaurant.location.coordinates;
    const distance = calculateDistance(userLat, userLon, restLat, restLon);
    return {
      ...restaurant,
      distance: distance
    };
  }).sort((a, b) => a.distance - b.distance);
  
  console.log('Restaurants with distance:', restaurantsWithDistance);
  displayRestaurants(restaurantsWithDistance);
}

// Initialize immediately
init();