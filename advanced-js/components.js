// UI Components for restaurant app

// Arrow function to create restaurant row
export const restaurantRow = (restaurant) => {
    // Destructuring to extract name and address
    const { name, address } = restaurant;
    
    // Create table row element
    const tr = document.createElement('tr');
    
    // Set innerHTML with extracted properties
    tr.innerHTML = `
        <td>${name}</td>
        <td>${address}</td>
    `;
    
    return tr;
};

// Arrow function to create restaurant modal content
export const restaurantModal = (restaurant, menu) => {
    // Destructuring to extract restaurant properties
    const { name, address, postalCode, city, phone, company } = restaurant;
    
    // Destructuring to extract courses from menu
    const { courses } = menu;
    
    // Generate menu items HTML using forEach
    let menuHtml = '<ul>';
    courses.forEach(menuItem => {
        // Use ternary operator for price handling
        const price = menuItem.price ? `${menuItem.price}€` : '?€';
        menuHtml += `<li>${menuItem.name}, ${price}. ${menuItem.diets || 'No diet info'}</li>`;
    });
    menuHtml += '</ul>';
    
    // Return complete HTML content
    return `
        <h1>${name}</h1>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Postal Code:</strong> ${postalCode}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <h3>Menu:</h3>
        ${menuHtml}
    `;
};
