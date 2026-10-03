import { useState } from "react";
import { Link } from "react-router-dom";

function Checkout({ cart, clearCart }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  // Empty cart
  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="order-success">
        <div className="success-box">
          <div className="success-icon">🛒</div>

          <h1>Your Cart is Empty</h1>

          <p>
            Add some products before proceeding to checkout.
          </p>

          <Link
            to="/shop"
            className="continue-shopping-btn"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.address === ""
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    clearCart();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="order-success">
        <div className="success-box">
          <div className="success-icon">✓</div>

          <h1>Order Placed Successfully!</h1>

          <p>
            Thank you for shopping with Sandy Store.
          </p>

          <p>
            Your order has been received successfully.
          </p>

          <Link
            to="/"
            className="continue-shopping-btn"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">

        {/* Customer Information */}
        <div className="checkout-form-box">
          <h1>Checkout</h1>

          <p className="checkout-subtitle">
            Enter your details to complete your order.
          </p>

          <h2>Customer Information</h2>

          <form
            className="checkout-form"
            onSubmit={handleSubmit}
          >
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />

            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />

            <label>Delivery Address</label>

            <textarea
              name="address"
              placeholder="Enter your delivery address"
              rows="4"
              value={formData.address}
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              className="place-order-btn"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h2>Order Summary</h2>

          {cart.map((item) => (
            <div
              className="summary-item"
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.name}
              />

              <div>
                <h3>{item.name}</h3>

                <p>
                  Qty: {item.quantity}
                </p>

                <p>
                  Rs. {item.price * item.quantity}
                </p>
              </div>
            </div>
          ))}

          <div className="summary-total">
            <span>Total</span>

            <strong>
              Rs. {total}
            </strong>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Checkout;