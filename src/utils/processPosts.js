export function processPosts(posts, categoryMap) {
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

    return processedPosts;
}