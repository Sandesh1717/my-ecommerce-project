import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">

      <div className="logo">
        🛍 Sandy Store
      </div>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/shop">Shop</Link>

        <Link to="/cart" className="cart-btn">
          🛒 Cart
          <span className="cart-badge">
            {cartCount}
          </span>
        </Link>

        <Link to="/login">Login</Link>

      </div>

    </nav>
  );
}

export default Navbar;