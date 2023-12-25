import React, { useState } from "react";

export function AddToCartProduct({ product, dispatch }) {
  // const [quatity, setQuatity] = useState(1);
  function roundToTwoDecimalPlaces(number) {
    return Math.round(number * 100) / 100;
  }

  if (product === null) return;

  function handleAddQuatity() {
    dispatch({ type: "INCREMENT_QUANTITY", payload: product.id });
  }

  function handleRemoveQuatity() {
    dispatch({ type: "DECREMENT_QUANTITY", payload: product.id });
  }

  return (
    <>
      <div>
        <form>
          <input
            type="checkbox"
            checked={product.checked}
            onClick={() =>
              dispatch({ type: "TOGGLE_CHECK_PRODUCT", payload: product.id })
            }
          />
        </form>
      </div>
      <div className="item-pic-price-cont">
        <img src={product.image} alt="product" />
        <div className="item-name-price-cont">
          <h1>{product.name}</h1>
          <div className="price">
            <h6>
              $<span>{product.price}</span>
            </h6>
            <p>
              $<span>700.87</span>
            </p>
          </div>
          <p
            className="remove"
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: product })
            }
          >
            Remove
          </p>
        </div>
        <div className="qty-cont">
          <div className="qty-btn">
            <button className="add-item" onClick={handleRemoveQuatity}>
              -
            </button>
            <p>{product.quantity}</p>
            <button className="remove-item" onClick={handleAddQuatity}>
              +
            </button>
          </div>
          <div className="total-price">
            $
            <span>
              {roundToTwoDecimalPlaces(product.price * product.quantity)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
