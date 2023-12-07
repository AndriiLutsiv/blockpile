import { Home } from "@/components/screens/home";

export default function HomePage({ testimonials }) {
  return <Home testimonials={testimonials} />
}

export async function getServerSideProps() {
  try {
    const restUrl = `${process.env.WP_REST_URL}/wp-json/wp/v2/wpm-testimonial`;
    console.log('REST URL', restUrl);
    const response = await fetch(restUrl);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();

    // Assuming that each testimonial has a 'title' field with 'rendered' subfield.
    // You should adjust this according to the actual structure of your testimonial objects.
    const testimonialTextArray = data.map(testimonial => testimonial.content.rendered);

    return {
      props: {
        testimonials: testimonialTextArray, // or just 'data' if you want to pass the entire testimonial objects
      },
    };
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return {
      props: {
        testimonials: [],
      },
    };
  }
}
