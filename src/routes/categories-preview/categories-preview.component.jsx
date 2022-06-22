import { Fragment } from 'react';
import { useSelector } from 'react-redux';

<<<<<<< HEAD
import { selectCategoriesMap, selectCateoriesIsLoading} from '../../store/categories/category.selector';
=======
import {
  selectCategoriesMap,
  selectIsLoading,
} from '../../store/categories/category.selector';
>>>>>>> redux-based-app

import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
<<<<<<< HEAD
  const isLoading = useSelector(selectCateoriesIsLoading);

  return (
    <Fragment>
      {isLoading ? ( <Spinner />) : (
=======
  const isLoading = useSelector(selectIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
>>>>>>> redux-based-app
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
