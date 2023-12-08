import { Home } from "@/components/screens/home";
import { parse } from 'node-html-parser';

export default function HomePage({ testimonials, randomPosts, contactSection }) {

  const contactSectionParsed = parse(contactSection.content.rendered);
  const contactSectionText = contactSectionParsed.querySelector('p')?.innerText;
  const contactSectionButtonText = contactSectionParsed.querySelector('.wp-block-button__link')?.innerText;

  return <Home
    testimonials={testimonials}
    randomPosts={randomPosts}
    contactSectionText={contactSectionText}
    contactSectionButtonText={contactSectionButtonText}
  />
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

async function fetchSectionContent(slug) {
  try {
    const response = await fetch(`${process.env.WP_REST_URL}/wp-json/wp/v2/sections?slug=${slug}`);
    const data = await response.json();
    return data.length ? data[0] : null;
  } catch (error) {
    console.error(`Error fetching section content for slug ${slug}:`, error);
    return null;
  }
}

async function getTotalPosts() {
  const response = await fetch(`${process.env.WP_REST_URL}/wp-json/wp/v2/posts?per_page=1`);
  const totalPosts = response.headers.get('X-WP-Total');
  return parseInt(totalPosts, 10);
}

const getCategories = async () => {
  // Fetch categories
  const categoriesRes = await fetch(`${process.env.WP_REST_URL}/wp-json/wp/v2/categories?_fields=id,name`);
  const categories = await categoriesRes.json();
  const categoriesWithAllOption = [{ id: 0, name: 'All' }, ...categories];

  // mapping of category IDs to category names for quick search
  const categoryMap = categoriesWithAllOption.reduce((acc, category) => {
    acc[category.id] = category.name;
    return acc;
  }, {});

  return categoryMap;
}

async function fetchRandomBatchOfPosts(perPage) {
  const totalPosts = await getTotalPosts();
  const totalPages = Math.ceil(totalPosts / perPage);
  const randomPage = Math.floor(Math.random() * totalPages) + 1;

  const postsUrl = `${process.env.WP_REST_URL}/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${randomPage}`;
  const response = await fetch(postsUrl);

  const posts = await response.json();

  const categoryMap = await getCategories();

  const processedPosts = posts.map(post => {
    // image src
    const featuredMedia = post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0
      ? post._embedded['wp:featuredmedia'][0].source_url
      : null;

    // categories array
    const categoryNames = post.categories.map(catId => categoryMap[catId] || '');

    return {
      id: post.id,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, ""),
      featuredImage: featuredMedia,
      categoryNames: categoryNames,
    };
  });

  // Return the first 2 elements from the shuffled array
  return shuffleArray(processedPosts).slice(0, 2);
}

export async function getServerSideProps() {
  try {
    const randomPostsBatch = await fetchRandomBatchOfPosts(6); // Fetches a random batch of 6 posts

    const restUrl = `${process.env.WP_REST_URL}/wp-json/wp/v2/wpm-testimonial`;

    const response = await fetch(restUrl);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();


    const testimonialTextArray = data.map(testimonial => testimonial.content.rendered);

    const contactSection = await fetchSectionContent('contact_section');

    return {
      props: {
        testimonials: testimonialTextArray,
        randomPosts: randomPostsBatch,
        contactSection
      },
    };
  } catch (error) {
    console.error('Error while fetching', error);
    return {
      props: {
        testimonials: [],
        randomPosts: [],
        contactSection: null
      },
    };
  }
}
