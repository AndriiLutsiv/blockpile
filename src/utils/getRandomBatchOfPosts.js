import { shuffleArray } from './shuffleArray';
import { processPosts } from './processPosts';
import { getCategories } from './getCategories';
import postsData from '../data/posts.json';

export async function getRandomBatchOfPosts() {
  const categoryMap = await getCategories();

  const processedPosts = processPosts(postsData, categoryMap);
  // Return the first 2 elements from the shuffled array
  return shuffleArray(processedPosts).slice(0, 2);
}