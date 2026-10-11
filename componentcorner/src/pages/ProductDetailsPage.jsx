import { useParams, Link } from 'react-router-dom';
import './ProductDetailsPage.css'

function ProductDetailsPage({ products = [], addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="not-found-container">
        <h2>Product Not Found</h2>
        <p>We couldn't find the product you're looking for.</p>
        <Link to="/products" className="back-link">
          ← Back to All Products
        </Link>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      <Link to="/products" className="back-link">
        ← Back to Products
      </Link>

      <div className="details-grid">
        <img 
          src={product.image} 
          alt={product.itemname} 
          className="details-image" 
        />

        <div className="info-section">
          <h1 className="details-title">{product.itemname}</h1>
          <p className="details-price">${product.price.toFixed(2)}</p>
          <p className="details-description">{product.description}</p>

          <button 
            className="add-to-cart-details-btn" 
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;