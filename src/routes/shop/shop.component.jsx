
import { Fragment, useContext } from "react";

import { ProductsContext } from '../../contexts/products.context';
import ProductCard from "../../components/product-card/product-card.component";

import './shop.styles.scss';


const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Fragment>
    <div className="shop-title">
        SHOP
    </div> 
    <br></br>
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
    </Fragment>
  );
};

export default Shop;
