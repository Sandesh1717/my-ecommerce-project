import ProductCard from "../components/ProductCard";
import "../App.css";

function Shop({ products, onAddToCart }) {
  return (
    <div>
      <h1>Shop</h1>

      <p>Browse all our products.</p>

      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            image={product.image}
            discount={product.discount}
            onAddToCart={() => onAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;