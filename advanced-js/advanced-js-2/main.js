// Main application module for Advanced JS 2
console.log('Starting Advanced JS 2 - Restaurant App with Filtering...');

import { baseUrl, FILTER_TYPES } from './variables.js';
console.log('Imported baseUrl and filter types:', baseUrl, FILTER_TYPES);

import { fetchData, createRestaurantFilter, createRestaurantMapper } from './utils.js';
console.log('Imported utility functions');

import { restaurantRow, restaurantModal } from './components.js';
console.log('Imported components');

// DOM elements
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const noResultsDiv = document.getElementById('noResults');
const restaurantTable = document.getElementById('restaurantTable');
const restaurantTableBody = document.getElementById('restaurantTableBody');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close');
const filterInfo = document.getElementById('filterInfo');

// Application state
let allRestaurants = [];
let currentFilter = FILTER_TYPES.ALL;

// Arrow function to filter restaurants using higher-order functions
const filterRestaurants = (restaurants, filterType) => {
    const filterFn = createRestaurantFilter(filterType);
    return restaurants.filter(filterFn);
};

// Arrow function to display restaurants with enhanced array methods
const displayRestaurants = (restaurants) => {
    // Clear existing rows
    restaurantTableBody.innerHTML = '';
    
    if (restaurants.length === 0) {
        // Show no results message
        restaurantTable.style.display = 'none';
        noResultsDiv.style.display = 'block';
        updateFilterInfo(0);
        return;
    }
    
    // Hide no results message
    noResultsDiv.style.display = 'none';
    
    // Use map to create restaurant rows and forEach to append them
    const restaurantRows = restaurants.map(restaurant => {
        const row = restaurantRow(restaurant);
        // Add click event listener
        row.addEventListener('click', () => showRestaurantDetails(restaurant));
        return row;
    });
    
    // Use forEach to append rows
    restaurantRows.forEach(row => {
        restaurantTableBody.appendChild(row);
    });
    
    // Show table and hide loading
    restaurantTable.style.display = 'table';
    loadingDiv.style.display = 'none';
    
    // Update filter info
    updateFilterInfo(restaurants.length);
};

// Arrow function to update filter information
const updateFilterInfo = (count) => {
    const filterText = currentFilter === FILTER_TYPES.ALL ? 'all' : 
                      currentFilter === FILTER_TYPES.SODEXHO ? 'Sodexho' : 'Compass';
    filterInfo.textContent = `Showing ${count} ${filterText} restaurant${count !== 1 ? 's' : ''}`;
};

// Arrow function to handle filter button clicks
const handleFilterClick = (filterType) => {
    try {
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-filter="${filterType}"]`).classList.add('active');
        
        // Update current filter
        currentFilter = filterType;
        
        // Filter and display restaurants
        const filteredRestaurants = filterRestaurants(allRestaurants, filterType);
        displayRestaurants(filteredRestaurants);
        
        console.log(`Filtered to ${filterType}:`, filteredRestaurants);
    } catch (error) {
        console.error('Error filtering restaurants:', error);
        handleError(new Error('Failed to filter restaurants'));
    }
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
            <p><strong>Company:</strong> ${restaurant.company || 'Unknown'}</p>
            <p><em>Menu not available (API error)</em></p>
        `;
        modal.style.display = 'block';
    }
};

// Arrow function to handle errors with robust error handling
const handleError = (error) => {
    console.error('Application error:', error);
    loadingDiv.style.display = 'none';
    errorDiv.style.display = 'block';
    errorDiv.textContent = `Error: ${error.message}`;
    
    // Hide other elements
    restaurantTable.style.display = 'none';
    noResultsDiv.style.display = 'none';
};

// Arrow function to initialize the application
const init = async () => {
    console.log('Initializing Advanced JS 2 application...');
    try {
        // Try to fetch from API first
        console.log('Trying to fetch from API:', baseUrl);
        const restaurants = await fetchData(baseUrl);
        console.log('API response:', restaurants);
        
        // Store all restaurants and display them
        allRestaurants = restaurants;
        displayRestaurants(restaurants);
        
    } catch (error) {
        console.log('API not available, using test data:', error.message);
        // Use test data if API fails with more diverse companies
        const testRestaurants = [
            {
                _id: '1',
                name: 'Sodexho Restaurant 1',
                address: 'Test Address 1',
                postalCode: '00100',
                city: 'Helsinki',
                phone: '+358 123 456 789',
                company: 'Sodexho'
            },
            {
                _id: '2', 
                name: 'Compass Restaurant 1',
                address: 'Test Address 2',
                postalCode: '00200',
                city: 'Espoo',
                phone: '+358 987 654 321',
                company: 'Compass Group'
            },
            {
                _id: '3',
                name: 'Sodexho Restaurant 2',
                address: 'Test Address 3',
                postalCode: '00300',
                city: 'Vantaa',
                phone: '+358 555 123 456',
                company: 'Sodexho'
            },
            {
                _id: '4',
                name: 'Compass Restaurant 2',
                address: 'Test Address 4',
                postalCode: '00400',
                city: 'Tampere',
                phone: '+358 666 789 012',
                company: 'Compass Group'
            },
            {
                _id: '5',
                name: 'Independent Restaurant',
                address: 'Test Address 5',
                postalCode: '00500',
                city: 'Turku',
                phone: '+358 777 345 678',
                company: 'Independent'
            }
        ];
        console.log('Using test data:', testRestaurants);
        
        // Store all restaurants and display them
        allRestaurants = testRestaurants;
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

// Add filter button event listeners
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const filterType = event.target.dataset.filter;
        handleFilterClick(filterType);
    });
});

// Initialize the application
init();
