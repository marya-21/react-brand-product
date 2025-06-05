import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>
      <p className="description">{product.shortDescription}</p>
      <Link to={`/products/${product.id}`} className="view-details-btn">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
