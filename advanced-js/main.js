// Main application module
console.log('Starting main.js...');

import { baseUrl } from './variables.js';
console.log('Imported baseUrl:', baseUrl);

import { fetchData } from './utils.js';
console.log('Imported fetchData function');

import { restaurantRow, restaurantModal } from './components.js';
console.log('Imported components');

// DOM elements
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const restaurantTable = document.getElementById('restaurantTable');
const restaurantTableBody = document.getElementById('restaurantTableBody');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close');

// Arrow function to display restaurants
const displayRestaurants = (restaurants) => {
    // Clear existing rows
    restaurantTableBody.innerHTML = '';
    
    // Use forEach to create rows with restaurantRow component
    restaurants.forEach(restaurant => {
        const row = restaurantRow(restaurant);
        restaurantTableBody.appendChild(row);
        
        // Add click event listener
        row.addEventListener('click', () => showRestaurantDetails(restaurant));
    });
    
    // Show table and hide loading
    restaurantTable.style.display = 'table';
    loadingDiv.style.display = 'none';
};

// Arrow function to show restaurant details in modal
const showRestaurantDetails = async (restaurant) => {
    try {
        // Use optional chaining and nullish coalescing
        const menuUrl = `${baseUrl}/${restaurant._id}/menu`;
        const menu = await fetchData(menuUrl);
        
        // Use restaurantModal component
        modalContent.innerHTML = restaurantModal(restaurant, menu);
        modal.style.display = 'block';
    } catch (error) {
        console.error('Error fetching menu:', error);
        // Show restaurant details without menu
        modalContent.innerHTML = `
            <h1>${restaurant.name}</h1>
            <p><strong>Address:</strong> ${restaurant.address}</p>
            <p><strong>Postal Code:</strong> ${restaurant.postalCode}</p>
            <p><strong>City:</strong> ${restaurant.city}</p>
            <p><strong>Phone:</strong> ${restaurant.phone}</p>
            <p><strong>Company:</strong> ${restaurant.company}</p>
            <p><em>Menu not available (API error)</em></p>
        `;
        modal.style.display = 'block';
    }
};

// Arrow function to handle errors
const handleError = (error) => {
    console.error('Application error:', error);
    loadingDiv.style.display = 'none';
    errorDiv.style.display = 'block';
    errorDiv.textContent = `Error: ${error.message}`;
};

// Arrow function to initialize the application
const init = async () => {
    console.log('Initializing application...');
    try {
        // Try to fetch from API first
        console.log('Trying to fetch from API:', baseUrl);
        const restaurants = await fetchData(baseUrl);
        console.log('API response:', restaurants);
        displayRestaurants(restaurants);
    } catch (error) {
        console.log('API not available, using test data:', error.message);
        // Use test data if API fails
        const testRestaurants = [
            {
                _id: '1',
                name: 'Test Restaurant 1',
                address: 'Test Address 1',
                postalCode: '00100',
                city: 'Helsinki',
                phone: '+358 123 456 789',
                company: 'Test Company'
            },
            {
                _id: '2', 
                name: 'Test Restaurant 2',
                address: 'Test Address 2',
                postalCode: '00200',
                city: 'Espoo',
                phone: '+358 987 654 321',
                company: 'Test Company 2'
            }
        ];
        console.log('Using test data:', testRestaurants);
        displayRestaurants(testRestaurants);
    }
};

// Event listeners using arrow functions
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Initialize the application
init();
