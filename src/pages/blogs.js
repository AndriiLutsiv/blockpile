import { Blogs } from "@/components/screens/blogs";
import { parse } from 'node-html-parser';
import { processBlogs } from "../utils/processBlogs";
import topSectionData from '../data/topSection.json';
import bottomSectionData from '../data/bottomSection.json';
import blogsSeoData from '../data/blogsSeo.json';
import blogsData from '../data/blogs.json';

export default function BlogsPage({ blogs, totalPages, yoastSEO, error }) {
    const topSectionParsed = parse(topSectionData.content.rendered);
    const topSectionText = topSectionParsed.querySelector('p')?.innerText;

    const bottomSectionParsed = parse(bottomSectionData.content.rendered);
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
        const perPage = 3; // Set the number of blogs to display per page
        const page = parseInt(query.page) || 1;

        const startIndex = (page - 1) * perPage;
        const endIndex = startIndex + perPage;

        const blogs = blogsData.slice(startIndex, endIndex);

        // Get total number of blogs
        const totalPages = Math.ceil(blogsData.length / perPage);

        const processedBlogs = processBlogs(blogs);

        const yoastSEO = blogsSeoData[0].yoast_head;

        return {
            props: {
                blogs: processedBlogs,
                totalPages,
                yoastSEO,
            },
        };
    } catch (error) {
        console.error("Error in getServerSideProps: ", error);
        return {
            props: {
                error: "An error occurred while loading the page.",
            },
        };
    }
}
