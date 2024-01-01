import React from "react";

export function ProductContainer({ product }) {
  return (
    <div className="product-container" key={product.id}>
      <div className="product-image">
        <img
          src={product.image}
          alt="Denim Jacket"
          //   onClick={(e) => HandleOnClickBoth(e, product.id)}
        />
      </div>
      <img
        src="/icons/empty-love.svg"
        alt="love"
        className="love"
        // onClick={(e) => {
        //   e.stopPropagation();
        //   handleFavourite(e);
        // }}
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
      // onClick={(e) => {
      //   e.stopPropagation();
      //   onHandleAddTo(product);
      // }}
      >
        Add to Cart
      </button>
    </div>
  );
}
