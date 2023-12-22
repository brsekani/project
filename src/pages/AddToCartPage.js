import { Link } from "react-router-dom";
import { AddToCartProduct } from "../components/AddToCartProduct";
import { useMyContext } from "../context/MyContext";

// ICONS
import { FaCartPlus } from "react-icons/fa";
import { useEffect, useState } from "react";

function AddToCartPage() {
  const { cart, dispatch } = useMyContext();

  // h6 changing color
  const [isRed, setIsRed] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsRed((prevIsRed) => !prevIsRed);
    }, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const AllProductChecked = cart.every((item) => item.checked === true);

  // TOTAL PRICE CAL
  const totalPrice = cart
    .map((item) => Number(item.price))
    .reduce((accumulator, currectValue) => {
      return accumulator + currectValue;
    }, 0);
  console.log(totalPrice);

  return (
    <div className="cart-meun-container">
      <Link to="/">
        <img
          className="back-btn-cart"
          src="/icons/back-button.svg"
          alt="back"
        />
      </Link>
      <div className="item-summary-div">
        <div>
          <p>Item Summary</p>
        </div>
        <div className="item-summary-div-icon">
          <img src="/icons/selected.svg" alt="selected" />
          <p>Select</p>
        </div>
      </div>
      <div className="product-cat">
        <ul>
          <li>
            <form>
              <input
                type="checkbox"
                id="checkbox"
                checked={cart.length && AllProductChecked}
                onClick={() => dispatch({ type: "CHECKED_ALL_ITEMS" })}
              />
              <label>All</label>
            </form>
          </li>
          <li id="item">Item</li>
          <li id="price">Price</li>
          <li id="qty">Qty</li>
          <li id="total">Total</li>
        </ul>
      </div>
      <hr />
      <div className="small-shop-cont">
        <img src="/icons/small-shop.svg" alt="small-shop" />
        <p>Fashion Frenzy</p>
      </div>

      <div className="item-container">
        {cart.length <= 0 ? (
          <div className="empty-cart-display">
            <FaCartPlus size={80} color={isRed ? "red" : "black"} />
            <h6 style={{ color: isRed ? "red" : "black" }}>
              Your Cart is empty
            </h6>
            <p>Brower our categories and discover our best deals</p>
            <Link to="/">
              <button>Start Shopping</button>
            </Link>
          </div>
        ) : (
          cart.map((product, index) => (
            <AddToCartProduct
              product={product}
              // checked={index}
              key={index}
              index={index}
              dispatch={dispatch}
            />
          ))
        )}
      </div>
      {cart < 1 ? (
        ""
      ) : (
        <div className="total-check-cont">
          <div className="total-amout">
            <p>
              Total Amount: <span>${totalPrice}</span>
            </p>
          </div>
          <Link to="/cart/checkout">
            <button className="check-out">Continue to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default AddToCartPage;
