import './Header.css';
import { Link } from 'react-router-dom'

function Header ({ storeName, cartCount }) {
    return (
        <div className='header'>
            <h1 className='storename'>{storeName}</h1>
                <nav className='nav-menu'>
                    <Link to='/' className='nav-item'>Home</Link>
                    <Link to='/products' className='nav-item'>Products</Link>
                </nav>
            <Link to='/cart' className='cart-container'>
                <span className="cart-icon">🛒</span>
                <span className="cart-badge">{cartCount}</span>
            </Link>
        </div>
    );
}

export default Header;