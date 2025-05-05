const axios = require('axios');

module.exports.getAddresss = async (address) => {
    try {
        const apiKey = process.env.GOOGLE_MAPS_API;
        const encodedAddress = encodeURIComponent(address);

        const response = await axios.get(
            `https://gomaps.pro/api/geocode?address=${encodedAddress}&key=${apiKey}`,
        );

        const data = response.data;

        if (data.success && data.latitude && data.longitude) {
            return {
                success: true,
                coordinates: {
                    lat: data.latitude,
                    lng: data.longitude
                }
            };
        }

        return {
            success: false,
            error: data.error || 'No results found for the given address'
        };

    } catch (error) {
        console.error('Geocoding error:', error.message);
        return {
            success: false,
            error: 'Failed to get coordinates'
        };
    }
}
