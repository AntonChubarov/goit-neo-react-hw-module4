import axios from 'axios';

const UNSPLASH_BASE_URL = 'https://api.unsplash.com';
const UNSPLASH_ACCESS_KEY = '7ZqkbtYIqvNrsYRS3UB9bFrrCCrBpoj7uzmjrts9T0o';

export const searchPhotos = async (query, page = 1, perPage = 3) => {
    const url = `${UNSPLASH_BASE_URL}/search/photos`;

    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
            },
            params: {
                query,
                page,
                per_page: perPage,
            },
        });

        const data = response.data;

        const reducedData = {
            total: data.total,
            total_pages: data.total_pages,
            results: data.results.map(photo => ({
                id: photo.id,
                description: photo.alt_description,
                urls: {
                    regular: photo.urls.regular,
                    small: photo.urls.small,
                },
            })),
        };

        return reducedData;
    } catch (error) {
        console.error('Error fetching photos:', error.message);
        return { error: error.message };
    }
}
