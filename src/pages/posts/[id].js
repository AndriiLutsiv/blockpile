import { PostDetails } from "../../components/screens/post-details";

export default function PostDetailsPage({ postDetailsData }) {
    return (
        <PostDetails postDetailsData={postDetailsData} />
    );
}

export async function getServerSideProps(context) {
    const { id } = context.params; // Get the post ID from the URL
  
    console.log('REST', `${process.env.WP_REST_URL}/wp-json/wp/v2/posts/${id}?_embed`);
    // Fetch post by ID
    const postRes = await fetch(`${process.env.WP_REST_URL}/wp-json/wp/v2/posts/${id}?_embed`);
    const postData = await postRes.json();
  
    if (!postData.id) {
      return {
        notFound: true,
      };
    }
  
    // Fetch post category name
    const categoryId = postData.categories[0] || undefined;
    const categoryRes = await fetch(`${process.env.WP_REST_URL}/wp-json/wp/v2/categories/${categoryId}`);
    const categoryData = await categoryRes.json();
    
    const postDetailsData = {
      ...postData,
      categoryName: categoryData.name 
    };
  
    return {
      props: {
        postDetailsData,
      },
    };
  }
  