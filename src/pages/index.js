import { Home } from "@/components/screens/home";
import { parse } from 'node-html-parser';
import { getRandomBatchOfPosts } from "../utils/getRandomBatchOfPosts";
import { processBlogs } from '../utils/processBlogs';
import testimonialsData from '../data/testimonials.json';
import contactSectionData from '../data/contactSection.json';
import blogPostsData from '../data/blogPosts.json';

export default function HomePage({ randomPosts }) {
  const contactSectionParsed = parse(contactSectionData.content.rendered);
  const contactSectionText = contactSectionParsed.querySelector('p')?.innerText;
  const contactSectionButtonText = contactSectionParsed.querySelector('.wp-block-button__link')?.innerText;

  return <Home
    testimonials={testimonialsData.map(testimonial => testimonial.content.rendered)}
    randomPosts={randomPosts}
    contactSectionText={contactSectionText}
    contactSectionButtonText={contactSectionButtonText}
    blogs={processBlogs(blogPostsData)}
  />
}

export async function getServerSideProps() {
  const randomPostsBatch = await getRandomBatchOfPosts();

  return {
    props: {
      randomPosts: randomPostsBatch,
    },
  };
}