const API_KEY = import.meta.env.VITE_NASA_API_KEY || 'DEMO_KEY';
const API_URL = 'https://images-api.nasa.gov';

export const fetchPlanetData = async (planetName) => {
  try {
    // Use different search terms for Mars to get better quality images
    let searchQuery = planetName;
    if (planetName.toLowerCase() === 'mars') {
      searchQuery = 'Mars planet surface crater dune';
    }
    
    // 1. Fetch a gallery of images
    const imagesResponse = await fetch(`${API_URL}/search?q=${searchQuery}&media_type=image`);
    if (!imagesResponse.ok) throw new Error('Failed to fetch planet images.');
    const imagesData = await imagesResponse.json();
    
    // Filter for items that have a preview image link and map to the correct structure
    const gallery = imagesData.collection.items
      .filter(item => item.links?.find(link => link.rel === 'preview'))
      .slice(0, 6)
      .map(item => ({
        // Find the preview image URL
        href: item.links.find(link => link.rel === 'preview').href,
        title: item.data[0].title,
      }));

    let fact = null;
    const itemsWithDescriptions = imagesData.collection.items.filter(item => item.data?.[0]?.description && item.links?.find(link => link.rel === 'preview'));
    if (itemsWithDescriptions.length > 0) {
      const randomItem = itemsWithDescriptions[Math.floor(Math.random() * itemsWithDescriptions.length)];
      fact = {
        title: randomItem.data[0].title,
        explanation: randomItem.data[0].description,
        url: randomItem.links.find(link => link.rel === 'preview').href,
      };
    }

    return { gallery, fact };

  } catch (error) {
    console.error(`Error fetching data for ${planetName}:`, error);
    return {
      gallery: [],
      fact: null,
    };
  }
}; 