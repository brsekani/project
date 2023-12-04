import React from "react";
import data from "../Data.json";

// import { Nav } from "../components/Nav";
import { Link, useParams } from "react-router-dom";
import { Nav } from "../components/Nav";

function ProductDetails() {
  const productID = useParams();
  console.log(productID.name);
  const product = data.products[productID.name - 1];

  return (
    <div key={2}>
      <Link to="/" className="noUnderLine">
        <Nav>
          <p>Fashion Frenzy</p>
          <img src="/icons/cart.svg" alt="Cart" />
        </Nav>
      </Link>
      <Link to="/">
        <img
          className="back-btn"
          src="/icons/back-button.svg"
          alt="back"
          // onClick={() => {
          //   setDisplayBody(true);
          // }}
        />
      </Link>
      <div className="product-main">
        <div className="image-container">
          <img src={product.bigImage} alt="product" />
        </div>
        <div className="product-des">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div className="discount">
            <img src="/icons/plus discount.svg" alt="+" />
            <p>Extra 3% Off</p>
          </div>
          <div className="stars-des">
            <div className="stars">
              <img src="/icons/star.svg" alt="star" />
              <img src="/icons/star.svg" alt="star" />
              <img src="/icons/star.svg" alt="star" />
              <img src="/icons/star.svg" alt="star" />
              <img src="/icons/star.svg" alt="star" />
            </div>
            <p>5.5 Ratings </p>
          </div>
          <div className="price-des">
            <h1>${product.price}</h1>
            {product.discountPrice !== "" && (
              <>
                <p>{product.discountPrice}</p>
                <span>{product.pricePercentage}</span>
              </>
            )}
          </div>
          <div className="product-colour">
            <p>Colors Available:</p>
            <div>
              <img src={product.smallImage} alt="product" />
            </div>
          </div>
          <div className="shipping-info">
            <h2>Shipping: $150.87</h2>
            <p>
              From China to Nigeria via AliExpress Standard Shipping Estimated
              delivery on Mar 12
            </p>
          </div>
          <Link to={`/product/${product.id}/checkout`}>
            <button>Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
