import { shuffleArray } from './shuffleArray';
import { processPosts } from './processPosts';
import { getCategories } from './getCategories';
import { getTotalPosts } from './getTotalPosts';

export async function fetchRandomBatchOfPosts(perPage) {
    const totalPosts = await getTotalPosts();
    const totalPages = Math.ceil(totalPosts / perPage);
    const randomPage = Math.floor(Math.random() * totalPages) + 1;
  
    const postsUrl = `${process.env.WP_REST_URL}/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${randomPage}`;
    const response = await fetch(postsUrl);
  
    const posts = await response.json();
  
    const categoryMap = await getCategories();

    const processedPosts = processPosts(posts, categoryMap);
    // Return the first 2 elements from the shuffled array
    return shuffleArray(processedPosts).slice(0, 2);
  }