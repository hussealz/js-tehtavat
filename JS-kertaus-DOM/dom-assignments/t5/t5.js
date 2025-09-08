// Restaurant data (first few restaurants for testing)
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
  }
];

// Initialize map
function initMap() {
  // Create map centered on Helsinki
  const map = L.map('map').setView([60.1699, 24.9384], 12);
  
  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  
  // Add restaurant markers
  restaurants.forEach(restaurant => {
    const [lon, lat] = restaurant.location.coordinates;
    
    // Create marker
    const marker = L.marker([lat, lon]).addTo(map);
    
    // Create popup content
    const popupContent = `
      <h3>${restaurant.name}</h3>
      <p>${restaurant.address}, ${restaurant.postalCode} ${restaurant.city}</p>
    `;
    
    // Add popup to marker
    marker.bindPopup(popupContent);
  });
  
  // Fit map to show all markers
  const group = new L.featureGroup(map._layers);
  map.fitBounds(group.getBounds().pad(0.1));
}

// Initialize map when page loads
document.addEventListener('DOMContentLoaded', initMap);