import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category.name}`}>
      <div className="category-card">
        <img src={category.image} alt={category.title} />
        <h3>{category.title}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;