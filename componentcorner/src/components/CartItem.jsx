import './CartItem.css';

function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <span className="cart-item-name">{item.itemname}</span>
        <span className="cart-item-price">${item.price}</span>
      </div>
      <button className="remove-btn" onClick={() => onRemove(item.cartItemId)}>Remove</button>
    </div>
  );
}

export default CartItem;