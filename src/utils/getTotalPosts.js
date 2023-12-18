export async function getTotalPosts() {
    const response = await fetch(`${process.env.WP_REST_URL}/wp-json/wp/v2/posts?per_page=1`);
    const totalPosts = response.headers.get('X-WP-Total');
    return parseInt(totalPosts, 10);
  }