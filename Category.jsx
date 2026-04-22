import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Category = () => {
  const { name } = useParams();

  // Filter products based on category
  const filteredProducts = products.filter(
    (product) => product.category === name
  );

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {name.toUpperCase()} PRODUCTS
      </h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h3>No products found</h3>
        )}
      </div>
    </div>
  );
};

export default Category;