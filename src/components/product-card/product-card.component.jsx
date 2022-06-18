
import Button from "../button/button.component";

import './product-card.styles.scss';


const ProductCard = ({product}) => {

    const {name, price, imageUrl} = product;

    return(
        <div class="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div class='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{`$${price}`}</span>
            </div>
            <Button buttonType='inverted'>Add to Cart</Button>

        </div>
    );
}

export default ProductCard;