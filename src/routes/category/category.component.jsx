import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { Fragment } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';

import ProductCard from '../../components/product-card/product-card.component';

import './category.styles.scss';

const Category = () => {

    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]); //need to check if products exist (products &&) because categoriesMap is retrieved async while everything else is trying to run in sync

    useEffect(() => {
        setProducts(categoriesMap[category]);
    },[category, categoriesMap])

    return(
        <Fragment>
            <h2 className='category-title'>{category.toLocaleUpperCase()}</h2>
            <div className='category-container'>
                {products && products.map((product) => <ProductCard key={product.id} product={product}/>)}
            </div>
        </Fragment>
    );

}

export default Category