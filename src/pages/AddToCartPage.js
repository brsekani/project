import { Link } from "react-router-dom";
import { AddToCartProduct } from "../components/AddToCartProduct";
import { useMyContext } from "../context/MyContext";

// ICONS
import { FaCartPlus } from "react-icons/fa";

function AddToCartPage() {
  const { cart, dispatch, isRed, totalPrice } = useMyContext();

  function roundToTwoDecimalPlaces(number) {
    return Math.round(number * 100) / 100;
  }

  // h6 changing color

  const AllProductChecked = cart.every((item) => item.checked === true);

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
                readOnly
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
            <Link to="/" style={{ textDecoration: "none" }}>
              <button>Start Shopping</button>
            </Link>
          </div>
        ) : (
          cart.map((product, index) => (
            <AddToCartProduct
              product={product}
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
              Total Amount: <span>${roundToTwoDecimalPlaces(totalPrice)}</span>
            </p>
          </div>
          <Link to="/cart/checkout" style={{ textDecoration: "none" }}>
            <button className="check-out">Continue to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default AddToCartPage;
