import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMyContext } from "../context/MyContext";

function Products({ product }) {
  const { dispatch } = useMyContext();

  const [isToggle, SetIsToggle] = useState(false);

  function handleFavourite(e) {
    if (isToggle) {
      e.target.src = "/icons/empty-love.svg";
      SetIsToggle(false);
    } else {
      e.target.src = "/icons/full-love.svg";
      SetIsToggle(true);
    }
  }

  return (
    <div className="product-container" key={product.id}>
      <Link to={`/product/${product.id}`} className="noUnderLine">
        <div className="product-image">
          <img
            src={product.image}
            alt="Denim Jacket"
            // onClick={(e) => HandleOnClickBoth(e, product.id)}
          />
        </div>
      </Link>
      <img
        src="/icons/empty-love.svg"
        alt="love"
        className="love"
        onClick={(e) => {
          handleFavourite(e);
        }}
      />
      <div className="product-name-price">
        <p className="product-name">{product.name}</p>
        <p className="product-price">
          $<span>{product.price}</span>
        </p>
      </div>
      <div className="product-details">{product.previewDescription}</div>
      <div className="review-container">
        <div className="stars">
          <img src="/icons/star.svg" alt="star" />
          <img src="/icons/star.svg" alt="star" />
          <img src="/icons/star.svg" alt="star" />
          <img src="/icons/star.svg" alt="star" />
          <img src="/icons/star.svg" alt="star" />
        </div>
        <p>{product.numberOfRatings}</p>
      </div>
      {/* STILL WORKING ON IT */}
      <button
        onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
        // onClick={() => console.log(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Products;
