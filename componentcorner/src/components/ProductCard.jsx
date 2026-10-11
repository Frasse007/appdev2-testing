import './ProductCard.css';
import { Link } from 'react-router-dom';

function ProductCard ({ product, onAddToCart }) {
    const { image, itemname, price, description } = product;
    return (
        <div className="product-card">
            <Link to={`/products/${product.id}`} className="product-card-link">
                <img className="image" src={image} alt={itemname}/>
                <h2 className="itemname">{itemname}</h2>
            </Link>
            <h3 className="price">${price}</h3>
            <p className="description">{description}</p>
            <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
    );
}

export default ProductCard;