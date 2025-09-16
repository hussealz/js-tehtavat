// Utility function to fetch data from API
export const fetchData = async (url) => {
    try {
        // Add timeout to prevent hanging
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
        
        const response = await fetch(url, {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

// Higher-order function for filtering restaurants by company
export const createRestaurantFilter = (filterType) => {
    return (restaurant) => {
        switch (filterType) {
            case 'sodexho':
                return restaurant.company?.toLowerCase().includes('sodexho');
            case 'compass':
                return restaurant.company?.toLowerCase().includes('compass');
            case 'all':
            default:
                return true;
        }
    };
};

// Higher-order function for mapping restaurant data
export const createRestaurantMapper = (includeCompany = false) => {
    return (restaurant) => {
        const baseData = {
            _id: restaurant._id,
            name: restaurant.name,
            address: restaurant.address,
            postalCode: restaurant.postalCode,
            city: restaurant.city,
            phone: restaurant.phone
        };
        
        if (includeCompany) {
            baseData.company = restaurant.company || 'Unknown';
        }
        
        return baseData;
    };
};
