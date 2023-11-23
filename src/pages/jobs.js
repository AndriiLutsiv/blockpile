import { Jobs } from "@/components/screens/jobs";
import { parse } from 'node-html-parser';

export default function JobsPage({ posts, categories, staticResult }) {
    console.log('cat', categories);
    console.log('processedPosts', posts);
    console.log('static', staticResult);
    return <Jobs /> 
}

async function fetchStaticContent() {
    const res = await fetch('http://hot-dang-homes-course.local/wp-json/wp/v2/pages/16');
    const page = await res.json();

    // Replace escaped newline and tab characters with actual HTML or whitespace
    let contentHtml = page.content.rendered.replace(/\\n/g, '').replace(/\\t/g, '').trim();

    // Use regular expressions to extract the text inside the paragraph (<p>) tags
    const paragraphMatches = contentHtml.match(/<p>(.*?)<\/p>/g);
    const paragraphText = paragraphMatches ? paragraphMatches.map(match => match.replace(/<p>|<\/p>/g, '')).join(' ') : '';

    // Use regular expressions to extract the text inside the button or anchor (<button> or <a>) tags
    const buttonMatches = contentHtml.match(/<button>(.*?)<\/button>/g);
    const buttonText = buttonMatches ? buttonMatches.map(match => match.replace(/<button>|<\/button>/g, '')).join(' ') : '';

    return {
        paragraph: paragraphText,
        button: buttonText
    };
}

export async function getStaticProps() {
    const postsRes = await fetch('http://hot-dang-homes-course.local/wp-json/wp/v2/posts?_fields=id,title,excerpt,categories');
    const posts = await postsRes.json();

    const categoriesRes = await fetch('http://hot-dang-homes-course.local/wp-json/wp/v2/categories?_fields=id,name');
    const categories = await categoriesRes.json();

    const staticResult = await fetchStaticContent();

    const processedPosts = posts.map(post => ({
        ...post,
        title: post.title.rendered,
        excerpt: post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, ""),
        categoryNames: post.categories.map(catId =>
            categories.find(cat => cat.id === catId)?.name || ''
        )
    }));

    return {
        props: {
            posts: processedPosts,
            categories: categories,
            staticResult: staticResult
        },
        revalidate: 10,
    };
}
