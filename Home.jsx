import { categories } from "../data/categories";
import CategoryCard from "../components/CategoryCard";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to E-Commerce</h1>
        <p>Shop everything you need!</p>
      </div>

      {/* Categories Section */}
      <h2 style={{ textAlign: "center" }}>Shop by Category</h2>

      <div className="category-container">
        {categories.map((cat, index) => (
          <CategoryCard key={index} category={cat} />
        ))}
      </div>
    </div>
  );
};

export default Home;