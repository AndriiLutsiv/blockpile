import { Jobs } from "@/components/screens/jobs";
import { parse } from 'node-html-parser';
import { getCategories } from '../utils/getCategories';
import { processPosts } from "../utils/processPosts";
import postsData  from '../data/posts.json';
import topSectionData from '../data/topSection.json';
import bottmSectionData from '../data/bottomSection.json';
import jobsSeoData from '../data/jobsSeo.json';

export default function JobsPage({ posts, categories, totalPages, category, yoastSEO, error }) {
    const topSectionParsed = parse(topSectionData.content.rendered);
    const topSectionText = topSectionParsed.querySelector('p')?.innerText;

    const bottomSectionParsed = parse(bottmSectionData.content.rendered);
    const bottomSectionText = bottomSectionParsed.querySelector('p')?.innerText;
    const bottomSectionButtonText = bottomSectionParsed.querySelector('.wp-block-button__link')?.innerText;

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Jobs
            posts={posts}
            totalPages={totalPages}
            categories={categories}
            category={category}
            topSectionText={topSectionText}
            bottomSectionText={bottomSectionText}
            bottomSectionButtonText={bottomSectionButtonText}
            yoastSEO={yoastSEO}
        />
    );
}

export async function getServerSideProps({ query }) {
    try {
        const category = query.category ? parseInt(query.category) : null; 
        const perPage = 6;
        const page = query.page ? parseInt(query.page) : 1;

        let posts;
        if (category) {
            posts = postsData.filter(post => post.categories.includes(category));
        } else {
            posts = postsData;
        }

        // Calculate the starting index and ending index for the current page
        const startIndex = (page - 1) * perPage;
        const endIndex = startIndex + perPage;

        // Get the posts for the current page
        const postsForPage = posts.slice(startIndex, endIndex);

        // Get total number of posts after filtering by category
        const totalPages = Math.ceil(posts.length / perPage);

        const categoryMap = await getCategories();

        const processedPosts = processPosts(postsForPage, categoryMap);

        const yoastSEO = jobsSeoData[0].yoast_head;

        return {
            props: {
                posts: processedPosts,
                totalPages,
                categories: categoryMap,
                category,
                yoastSEO,
            },
        };
    } catch (error) {
        console.error("Error in getServerSideProps: ", error);
        return {
            props: {
                error: "An error occurred while loading the page."
            },
        };
    }
}
