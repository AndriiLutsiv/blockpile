export function processBlogs(blogs) {
    const processedBlogs = blogs.map(post => {
        // image src
        const featuredMedia = post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0
            ? post._embedded['wp:featuredmedia'][0].source_url
            : null;

        return {
            id: post.id,
            title: post.title.rendered,
            featuredImage: featuredMedia,
        };
    });

    return processedBlogs;
} 