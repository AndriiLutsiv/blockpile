import { Jobs } from "@/components/screens/jobs";
import { parse } from 'node-html-parser';

export default function JobsPage({ posts, categories, totalPages }) {
    return <Jobs posts={posts} totalPages={totalPages} categories={categories} />
}

export async function getServerSideProps({ query }) {
    const page = parseInt(query.page) || 1;
    const perPage = 6; // Number of posts per page

    // Fetch posts for the current page
    const postsRes = await fetch(`${process.env.WP_REST_URL}/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}`);
    const posts = await postsRes.json();

    // Get total number of posts to calculate total pages
    const total = postsRes.headers.get('X-WP-Total');
    const totalPages = Math.ceil(total / perPage);

    // Fetch categories
    const categoriesRes = await fetch(`${process.env.WP_REST_URL}/wp-json/wp/v2/categories?_fields=id,name`);
    const categories = await categoriesRes.json();

    const categoriesWithAllOption = [{ id: 0, name: 'All' }, ...categories];

    // mapping of category IDs to category names for quick search
    const categoryMap = categoriesWithAllOption.reduce((acc, category) => {
        acc[category.id] = category.name;
        return acc;
    }, {});

    const processedPosts = posts.map(post => {
        // image src
        const featuredMedia = post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0
            ? post._embedded['wp:featuredmedia'][0].source_url
            : null;

        // categories array
        const categoryNames = post.categories.map(catId => categoryMap[catId] || '');

        return {
            id: post.id,
            title: post.title.rendered,
            excerpt: post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, ""),
            featuredImage: featuredMedia,
            categoryNames: categoryNames,
        };
    });

    return {
        props: {
            posts: processedPosts,
            totalPages,
            categories: categoryMap
        },
    };
}
