import { Link } from "react-router-dom";
import { AddToCartProduct } from "../components/AddToCartProduct";
import { useMyContext } from "../context/MyContext";

function AddToCartPage() {
  const { cart, dispatch } = useMyContext();

  const AllProductChecked = cart.every((item) => item.checked === true);

  console.log(AllProductChecked);

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
        {cart.map((product, index) => (
          <AddToCartProduct
            product={product}
            // checked={index}
            key={index}
            index={index}
            dispatch={dispatch}
          />
        ))}
      </div>
      {cart < 1 ? (
        ""
      ) : (
        <Link to="/cart/checkout">
          <button className="check-out">Continue to Checkout</button>
        </Link>
      )}
    </div>
  );
}

export default AddToCartPage;
