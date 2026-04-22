import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <img src={product.image} width="100" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View</Link>
    </div>
  );
};

export default ProductCard;