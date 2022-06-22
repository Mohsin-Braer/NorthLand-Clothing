import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

<<<<<<< HEAD
import { selectCategoriesMap, selectCateoriesIsLoading } from '../../store/categories/category.selector';
=======
import {
  selectCategoriesMap,
  selectIsLoading,
} from '../../store/categories/category.selector';
>>>>>>> redux-based-app

import { CategoryContainer, Title } from './category.styles';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
<<<<<<< HEAD
  const isLoading = useSelector(selectCateoriesIsLoading);
=======
  const isLoading = useSelector(selectIsLoading);
>>>>>>> redux-based-app
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
<<<<<<< HEAD
      {
        isLoading ? (<Spinner />) : (
            <CategoryContainer>
                {products &&
                  products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
            </CategoryContainer>
        )
      }
=======
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
>>>>>>> redux-based-app
    </Fragment>
  );
};

export default Category;
