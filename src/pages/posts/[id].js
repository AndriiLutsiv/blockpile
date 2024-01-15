import { PostDetails } from "../../components/screens/post-details";
import { getRandomBatchOfPosts } from '../../utils/getRandomBatchOfPosts';
import { parse } from 'node-html-parser';
import bottomSectionData from '../../data/bottomSection.json';
import postsData from '../../data/posts.json';
import categoriesData from '../../data/categories.json';

export default function PostDetailsPage({ postDetailsData, randomPosts, error }) {

  const contactSectionParsed = parse(bottomSectionData.content.rendered);
  const contactSectionText = contactSectionParsed.querySelector('p')?.innerText;
  const contactSectionButtonText = contactSectionParsed.querySelector('.wp-block-button__link')?.innerText;

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <PostDetails
      postDetailsData={postDetailsData}
      contactSectionText={contactSectionText}
      contactSectionButtonText={contactSectionButtonText}
      randomPosts={randomPosts}
    />
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params; // Get the post ID from the URL

  try {
    const postData = postsData.find(blog => blog.id === Number(id));

    const categoryData = categoriesData.find(category => category.id === postData.categories[0]);

    const randomPostsBatch = await getRandomBatchOfPosts();


    const postDetailsData = {
      ...postData,
      categoryName: categoryData.name,
    };

    return {
      props: {
        postDetailsData,
        randomPosts: randomPostsBatch,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps: ", error);
    return {
      props: {
        postDetailsData: null,
        error: "An error occurred while loading the page."
      },
    };
  }
}
