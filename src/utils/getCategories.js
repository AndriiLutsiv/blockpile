export async function getCategories() {
    // Fetch categories
    const categoriesRes = await fetch(`${process.env.WP_REST_URL}/wp-json/wp/v2/categories?_fields=id,name`);
    const categories = await categoriesRes.json();
    const categoriesWithAllOption = [{ id: 0, name: 'All' }, ...categories];
  
    // mapping of category IDs to category names for quick search
    const categoryMap = categoriesWithAllOption.reduce((acc, category) => {
      acc[category.id] = category.name;
      return acc;
    }, {});
  
    return categoryMap;
  }