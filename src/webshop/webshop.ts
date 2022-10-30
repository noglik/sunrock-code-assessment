type Category = {
  id: string;
  products: number;
  categories: Array<Category>;
};

export const getTotalForCategories = (categories: Array<Category>): Record<string, number> =>
  categories.reduce((acc, category) => {
    const sumRecord = getTotalForCategories(category.categories);
    return {
      [category.id]:
        category.products +
        Object.keys(sumRecord)
          .filter((cName) => category.categories.some(({ id }) => id === cName))
          .reduce((sum, cName) => sum + sumRecord[cName], 0),
      ...sumRecord,
      ...acc,
    };
  }, {} as Record<string, number>);
