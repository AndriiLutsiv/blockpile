import categoriesData from '../data/categories.json';

export async function getCategories() {
  const categoriesWithAllOption = [{ id: 0, name: 'All' }, ...categoriesData];

  // mapping of category IDs to category names for quick search
  const categoryMap = categoriesWithAllOption.reduce((acc, category) => {
    acc[category.id] = category.name;
    return acc;
  }, {});

  return categoryMap;
}