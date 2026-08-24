import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import "../App.css";

function Home({ products, onAddToCart }) {
  return (
    <>
      <Hero />

      <h1>Featured Products</h1>

      <p>Check out our latest products.</p>

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
    </>
  );
}

export default Home;