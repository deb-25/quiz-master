import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <div>
      <h1>All Products</h1>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default Products;