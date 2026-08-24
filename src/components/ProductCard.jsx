import "./ProductCard.css";

function ProductCard({
  name,
  price,
  category,
  image,
  discount,
  onAddToCart,
}) {  return (
    <div className="product-card">
      <img
        className="product-image"
        src={image}
        alt={name}
      />
      
      <h2>{name}</h2>

      <p>Category: {category}</p>

      <p>Price: Rs. {price}</p>

{discount && (
  <span className="discount">
    {discount}% OFF
  </span>
)}
      <button className="add-cart-btn" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;