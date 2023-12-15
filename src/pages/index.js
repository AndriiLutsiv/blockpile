import { Home } from "@/components/screens/home";
import { parse } from 'node-html-parser';
import { fetchSectionContent } from '../utils/fetchSectionContent';
import { fetchRandomBatchOfPosts } from "../utils/fetchRandomBatchOfPosts";
import { processBlogs } from '../utils/processBlogs';

export default function HomePage({ testimonials, randomPosts, contactSection, blogs }) {
  const contactSectionParsed = parse(contactSection.content.rendered);
  const contactSectionText = contactSectionParsed.querySelector('p')?.innerText;
  const contactSectionButtonText = contactSectionParsed.querySelector('.wp-block-button__link')?.innerText;

  return <Home
    testimonials={testimonials}
    randomPosts={randomPosts}
    contactSectionText={contactSectionText}
    contactSectionButtonText={contactSectionButtonText}
    blogs={blogs}
  />
}

export async function getServerSideProps() {
  try {
    const randomPostsBatch = await fetchRandomBatchOfPosts(6);
    const testimonialsResponse = await fetch(`${process.env.WP_REST_URL}/wp-json/wp/v2/wpm-testimonial`);
    const testimonialsData = await testimonialsResponse.json();
    const contactSection = await fetchSectionContent('contact_section');

    // const blogPostsResponse = await fetch(`${process.env.WP_REST_URL}/wp-json/wp/v2/blog?per_page=3`);
    const blogPostsResponse = await fetch(`${process.env.WP_REST_URL}/wp-json/wp/v2/blog?_embed&per_page=3`);
    const blogPostsData = await blogPostsResponse.json();
    const processedBlogs = processBlogs(blogPostsData);

    const testimonialTextArray = testimonialsData.map(testimonial => testimonial.content.rendered);

    return {
      props: {
        testimonials: testimonialTextArray,
        randomPosts: randomPostsBatch,
        contactSection,
        blogs: processedBlogs
      },
    };
  } catch (error) {
    console.error('Error while fetching', error);
    return {
      props: {
        testimonials: [],
        randomPosts: [],
        contactSection: null,
        blogs: []
      },
    };
  }
}
