import React from "react";
import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  return (
    <div className="brand-card">
      <img src={brand.logo} alt={brand.name} className="brand-logo" />
      <h3>{brand.name}</h3>
      <p>{brand.description}</p>
      <Link to={`/brands/${brand.id}/products`} className="view-products-btn">
        View Products
      </Link>
    </div>
  );
};

export default BrandCard;
