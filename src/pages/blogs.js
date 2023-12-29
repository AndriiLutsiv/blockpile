import { Blogs } from "@/components/screens/blogs";
import { parse } from 'node-html-parser';
import { fetchSectionContent } from "../utils/fetchSectionContent";
import { processBlogs } from "../utils/processBlogs";

export default function BlogsPage({ blogs, totalPages, topSectionContent, bottomSectionContent, yoastSEO, error }) {

    const topSectionParsed = parse(topSectionContent.content.rendered);
    const topSectionText = topSectionParsed.querySelector('p')?.innerText;

    const bottomSectionParsed = parse(bottomSectionContent.content.rendered);
    const bottomSectionText = bottomSectionParsed.querySelector('p')?.innerText;
    const bottomSectionButtonText = bottomSectionParsed.querySelector('.wp-block-button__link')?.innerText;

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Blogs
            blogs={blogs}
            totalPages={totalPages}
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
        const perPage = 6;
        // Fetch blogs for the current page
        const blogsRes = await fetch(`${process.env.WP_REST_URL}/wp-json/wp/v2/blog?_embed&per_page=${perPage}&page=${page}`);;
  
        const blogs = await blogsRes.json();
        
        // Get total number of blogs to calculate total pages
        const total = blogsRes.headers.get('X-WP-Total');
        const totalPages = Math.ceil(total / perPage);

        const processedBlogs = processBlogs(blogs);

        const topSectionContent = await fetchSectionContent('top_heading');
        const bottomSectionContent = await fetchSectionContent('contact_section');

        // Fetch SEO data for 'blogs' page
        const blogsPageRes = await fetch(`${process.env.WP_REST_URL}/wp-json/wp/v2/pages?slug=blogs`);
        const blogsPage = await blogsPageRes.json();
        const yoastSEO = blogsPage[0].yoast_head;

        return {
            props: {
                blogs: processedBlogs,
                totalPages,
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