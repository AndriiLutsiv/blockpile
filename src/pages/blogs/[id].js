import { BlogDetails } from "../../components/screens/blog-details";
import { getRandomBatchOfBlogs } from '../../utils/getRandomBatchOfBlogs';
import { parse } from 'node-html-parser';
import bottomSectionData from '../../data/bottomSection.json';
import blogsData from '../../data/blogs.json';

export default function BlogsPage({ blogDetailsData, randomBlogs, error }) {


  const contactSectionParsed = parse(bottomSectionData.content.rendered);
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
    const blogData = blogsData.find(blog => blog.id === Number(id));

    const randomBlogsBatch = await getRandomBatchOfBlogs();
    return {
      props: {
        blogDetailsData: blogData,
        randomBlogs: randomBlogsBatch,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps: ", error);
    return {
      props: {
        blogDetailsData: null,
        error: "An error occurred while loading the page."
      },
    };
  }
}
