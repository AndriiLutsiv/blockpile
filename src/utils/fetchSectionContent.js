export async function fetchSectionContent(slug) {
    try {
        const response = await fetch(`${process.env.WP_REST_URL}/wp-json/wp/v2/sections?slug=${slug}`);
        const data = await response.json();
        return data.length ? data[0] : null;
    } catch (error) {
        console.error(`Error fetching section content for slug ${slug}:`, error);
        return null;
    }
}