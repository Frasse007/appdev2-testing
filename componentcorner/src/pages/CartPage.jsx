import CartItem from '../components/CartItem'
import './CartPage.css'

function CartPage({ cart, removeFromCart }) {
    const cartTotal = cart.reduce((total, item) => total + item.price, 0);

    return(
        <section className="cart-section">
          <h2>Shopping Cart</h2>

          {cart.length === 0 ? (
            <p className="empty-cart-message">Your cart is currently empty.</p>
          ) : (
            <div className="cart-container-list">
              {cart.map((item) => (
                <CartItem 
                  key={item.cartItemId} 
                  item={item} 
                  onRemove={removeFromCart} 
                />
              ))}
              <div className="cart-summary">
                <h3>Total: ${cartTotal.toFixed(2)}</h3>
              </div>
            </div>
          )}
        </section>
    )
};

export default CartPage;