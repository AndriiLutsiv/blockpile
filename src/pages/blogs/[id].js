import { BlogDetails } from "../../components/screens/blog-details";
import { fetchSectionContent } from '../../utils/fetchSectionContent';
import { fetchRandomBatchOfBlogs } from '../../utils/fetchRandomBatchOfBlogs';
import { parse } from 'node-html-parser';

export default function BlogsPage({ blogDetailsData, contactSection, randomBlogs, error }) {
  const contactSectionParsed = parse(contactSection.content.rendered);
  const contactSectionText = contactSectionParsed.querySelector('p')?.innerText;
  const contactSectionButtonText = contactSectionParsed.querySelector('.wp-block-button__link')?.innerText;

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <BlogDetails
      blogDetailsData={blogDetailsData}
      contactSectionText={contactSectionText}
      contactSectionButtonText={contactSectionButtonText}
      randomBlogs={randomBlogs}
    />
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params; // Get the blog ID from the URL

  try {
    // Fetch blog by ID
    const blogRes = await fetch(`${process.env.WP_REST_URL}/wp-json/wp/v2/blog/${id}?_embed`);
    const blogData = await blogRes.json();

    // Fetch random blogs
    const randomBlogsBatch = await fetchRandomBatchOfBlogs(6);
    // Fetch contact section
    const contactSection = await fetchSectionContent('contact_section');

    // Fetch images by ID
    const topImageRes = await fetch(`${process.env.WP_REST_URL}/wp-json/wp/v2/media/${blogData.acf.topimage}`);
    const topImageData = await topImageRes.json();

    const middleImageCoverRes = await fetch(`${process.env.WP_REST_URL}/wp-json/wp/v2/media/${blogData.acf.middleimagecover}`);
    const middleImageCoverData = await middleImageCoverRes.json();

    const middleTextImageRes = await fetch(`${process.env.WP_REST_URL}/wp-json/wp/v2/media/${blogData.acf.middletextimage}`);
    const middleTextImageData = await middleTextImageRes.json();

    const blogDetailsData = {
      ...blogData,
      topImageData,
      middleImageCoverData,
      middleTextImageData,
    };

    return {
      props: {
        blogDetailsData,
        randomBlogs: randomBlogsBatch,
        contactSection
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps: ", error);
    return {
      props: {
        blogDetailsData: null,
        contactSection: null,
        error: "An error occurred while loading the page."
      },
    };
  }
}
