import { Jobs } from "@/components/screens/jobs";
import { parse } from 'node-html-parser';
import { fetchSectionContent } from "../utils/fetchSectionContent";
import { getCategories } from '../utils/getCategories';
import { processPosts } from "../utils/processPosts";

export default function JobsPage({ posts, categories, totalPages, category, topSectionContent, bottomSectionContent, yoastSEO, error }) {

    const topSectionParsed = parse(topSectionContent.content.rendered);
    const topSectionText = topSectionParsed.querySelector('p')?.innerText;

    const bottomSectionParsed = parse(bottomSectionContent.content.rendered);
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
        const page = parseInt(query.page) || 1;
        const category = query.category ? parseInt(query.category) : null; const perPage = 6;

        // Fetch posts for the current page
        let postsRes;
        if (category) {
            postsRes = await fetch(`${process.env.WP_REST_URL}/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}&categories=${category}`);
        } else {
            postsRes = await fetch(`${process.env.WP_REST_URL}/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}`);
        }
        
        const posts = await postsRes.json();
        
        // Get total number of posts to calculate total pages
        const total = postsRes.headers.get('X-WP-Total');
        const totalPages = Math.ceil(total / perPage);

        const categoryMap = await getCategories();

        const processedPosts = processPosts(posts, categoryMap);
        

        const topSectionContent = await fetchSectionContent('top_heading');
        const bottomSectionContent = await fetchSectionContent('contact_section');

        // Fetch SEO data for 'jobs' page
        const jobsPageRes = await fetch(`${process.env.WP_REST_URL}/wp-json/wp/v2/pages?slug=jobs`);
        const jobsPage = await jobsPageRes.json();
        const yoastSEO = jobsPage[0].yoast_head;

        return {
            props: {
                posts: processedPosts,
                totalPages,
                categories: categoryMap,
                category,
                topSectionContent,
                bottomSectionContent,
                yoastSEO
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