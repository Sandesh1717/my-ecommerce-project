function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (

        <div>

          {cart.map((item) => (

            <div
              className="cart-item"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div>

                <h2>{item.name}</h2>

                <p>
                  Category: {item.category}
                </p>

                <p>
                  Price: Rs. {item.price}
                </p>

                <div className="quantity-controls">

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    +
                  </button>

                </div>

                <p>
                  Subtotal: Rs.{" "}
                  {item.price * item.quantity}
                </p>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

          <div className="cart-summary">

            <h2>
              Total: Rs. {total}
            </h2>

            <button className="checkout-btn">
              Proceed to Checkout
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;