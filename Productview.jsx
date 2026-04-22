import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

const ProductView = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === Number(id));

  // 🔥 Prevent crash
  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt="" />
      <p>{product.description}</p>
      <h2>${product.price}</h2>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductView;