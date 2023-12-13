import { Home } from "@/components/screens/home";
import { parse } from 'node-html-parser';
import { fetchSectionContent } from '../utils/fetchSectionContent';
import { fetchRandomBatchOfPosts } from "../utils/fetchRandomBatchOfPosts";

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

export async function getServerSideProps() {
  try {
    const randomPostsBatch = await fetchRandomBatchOfPosts(6);
    const testimonialsResponse = await fetch(`${process.env.WP_REST_URL}/wp-json/wp/v2/wpm-testimonial`);
    const testimonialsData = await testimonialsResponse.json();
    const contactSection = await fetchSectionContent('contact_section');

    const testimonialTextArray = testimonialsData.map(testimonial => testimonial.content.rendered);

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
