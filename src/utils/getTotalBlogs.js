export async function getTotalBlogs() {
    const response = await fetch(`${process.env.WP_REST_URL}/wp-json/wp/v2/blog?per_page=1`);
    const totalBlogs = response.headers.get('X-WP-Total');
    return parseInt(totalBlogs, 10);
  }