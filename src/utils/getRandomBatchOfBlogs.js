import { shuffleArray } from './shuffleArray';
import { processBlogs } from './processBlogs';
import blogsData from '../data/blogs.json';

export async function getRandomBatchOfBlogs() {
    const processedBlogs = processBlogs(blogsData);
    // Return the first 2 elements from the shuffled array
    return shuffleArray(processedBlogs).slice(0, 2);
  }