import { shuffleArray } from './shuffleArray';
import { processBlogs } from './processBlogs';
import { getTotalBlogs } from './getTotalBlogs';

export async function fetchRandomBatchOfBlogs(perPage) {
    const totalBlogs = await getTotalBlogs();
    const totalPages = Math.ceil(totalBlogs / perPage);
    const randomPage = Math.floor(Math.random() * totalPages) + 1;
  
    const blogsUrl = `${process.env.WP_REST_URL}/wp-json/wp/v2/blog?_embed&per_page=${perPage}&page=${randomPage}`;
    const response = await fetch(blogsUrl);
  
    const blogs = await response.json();

    const processedBlogs = processBlogs(blogs);
    // Return the first 2 elements from the shuffled array
    return shuffleArray(processedBlogs).slice(0, 2);
  }