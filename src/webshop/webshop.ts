type Category = {
  id: string;
  products: number;
  categories: Array<Category>;
};

/**
 *  Returns total amount of product in current category and all first level subcategories
 */
const getTotalForCategory = (category: Category, totalsRecord: Record<string, number>) => {
  const subcategoriesTotal = Object.keys(totalsRecord).reduce((sum, cName) => {
    // add only if it's this category subcategory
    if (category.categories.some(({ id }) => id === cName)) {
      sum += totalsRecord[cName];
    }

    return sum;
  }, 0);

  return category.products + subcategoriesTotal;
};

/**
 *  Returns record of categories and the total amount of product
 *  in respective category and in all subcategories
 */
export const getTotalForCategories = (categories: Array<Category>): Record<string, number> =>
  categories.reduce((acc, category) => {
    const totalsRecord = getTotalForCategories(category.categories);
    return {
      [category.id]: getTotalForCategory(category, totalsRecord),
      ...totalsRecord,
      ...acc,
    };
  }, {} as Record<string, number>);
