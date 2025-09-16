// UI Components for restaurant app

// Arrow function to create restaurant row with enhanced data
export const restaurantRow = (restaurant) => {
    // Destructuring to extract name, address, and company
    const { name, address, company } = restaurant;
    
    // Create table row element
    const tr = document.createElement('tr');
    
    // Set innerHTML with extracted properties
    tr.innerHTML = `
        <td>${name}</td>
        <td>${address}</td>
        <td>${company || 'Unknown'}</td>
    `;
    
    return tr;
};

// Arrow function to create restaurant modal content
export const restaurantModal = (restaurant, menu) => {
    // Destructuring to extract restaurant properties
    const { name, address, postalCode, city, phone, company } = restaurant;
    
    // Destructuring to extract courses from menu
    const { courses } = menu;
    
    // Generate menu items HTML using map method
    const menuHtml = courses?.map(menuItem => {
        // Use ternary operator for price handling
        const price = menuItem.price ? `${menuItem.price}€` : '?€';
        return `<li>${menuItem.name}, ${price}. ${menuItem.diets || 'No diet info'}</li>`;
    }).join('') || '<li>No menu available</li>';
    
    // Return complete HTML content
    return `
        <h1>${name}</h1>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Postal Code:</strong> ${postalCode}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || 'Unknown'}</p>
        <h3>Menu:</h3>
        <ul>${menuHtml}</ul>
    `;
};

// Arrow function to create filter button
export const createFilterButton = (filterType, isActive = false) => {
    const button = document.createElement('button');
    button.className = `filter-btn ${isActive ? 'active' : ''}`;
    button.dataset.filter = filterType;
    button.textContent = filterType.charAt(0).toUpperCase() + filterType.slice(1) + ' Restaurants';
    return button;
};
