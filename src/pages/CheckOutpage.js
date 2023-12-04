import { Link, useLocation } from "react-router-dom";
import { Nav } from "../components/Nav";

function CheckOutpage() {
  const location = useLocation();

  console.log(location);
  return (
    <div>
      <>
        <Link to="/" className="noUnderLine">
          <Nav>
            <p>Fashion Frenzy</p>
            <img src="/icons/blue-cart.svg" alt="Cart" />
          </Nav>
        </Link>

        <div>
          <Link to={location.pathname === "/cart/checkout" ? "/cart" : "/"}>
            <img
              className="back-btn-cart"
              src="/icons/back-button.svg"
              alt="back"
            />
          </Link>
          <div className="info-con">
            <div className="first-div">
              <div className="customer-div">
                <div className="infos-header">
                  <h1>Customer Info</h1>
                  <p>* Required</p>
                </div>
                <hr />
                <div className="customer-input">
                  <form>
                    <label>Email *</label>
                    <input type="text" />
                  </form>
                </div>
              </div>

              <div className="Shipping-div">
                <div className="infos-header">
                  <h1>Shipping Address</h1>
                  <p>* Required</p>
                </div>
                <hr />
                <div className="Shipping-input">
                  <form className="Full-Name-input">
                    <label>Full Name *</label>
                    <input type="text" />
                  </form>
                  <form className="Street-input">
                    <label>Street Address *</label>
                    <input type="text" />
                    <input type="text" />
                  </form>
                  <div className="Shipping-sub-input">
                    <form>
                      <label>City *</label>
                      <input type="text" />
                    </form>
                    <form>
                      <label>State/Province </label>
                      <input type="text" />
                    </form>
                    <form>
                      <label>Zip/Postal Code *</label>
                      <input type="text" />
                    </form>
                  </div>
                  <form className="Country-input">
                    <label>Country *</label>
                    <input type="text" placeholder="United States" />
                  </form>
                </div>
              </div>

              <div className="Billing-div">
                <div className="infos-header">
                  <h1>Billing Address</h1>
                  <p>* Required</p>
                </div>
                <hr />
                <div className="Billing-input">
                  <form className="Full-Name-input">
                    <label>Full Name *</label>
                    <input type="text" />
                  </form>
                  <form className="Street-input">
                    <label>Street Address *</label>
                    <input type="text" />
                    <input type="text" />
                  </form>
                  <div className="Billing-sub-input">
                    <form>
                      <input type="text" />
                    </form>
                    <form>
                      <input type="text" />
                    </form>
                    <form>
                      <input type="text" />
                    </form>
                  </div>
                  <form className="Country-input">
                    <label>Country *</label>
                    <input type="text" placeholder="United States" />
                  </form>
                </div>
              </div>
            </div>

            <div className="second-div">
              <div className="Shipping-Method-div">
                <div className="infos-header">
                  <h1>Shipping Method</h1>
                  <p>* Required</p>
                </div>
                <hr />
                <div className="radio-input">
                  <form>
                    <input type="radio" />
                    <label>Any Goods</label>
                  </form>
                  <p>$5.05 USD</p>
                </div>
              </div>

              <div className="Card-Number-div">
                <div className="infos-header">
                  <h1>Payment Info</h1>
                  <p>* Required</p>
                </div>
                <hr />
                <div className="Card-Number-input">
                  <form>
                    <label>Card Number *</label>
                    <input type="text" />
                  </form>
                  <div className="Card-sub-input">
                    <form>
                      <label>Expiration Date *</label>
                      <input type="text" />
                    </form>
                    <form>
                      <label>Security Code *</label>
                      <input type="text" />
                    </form>
                  </div>
                  <p>Billing Address Same As Shipping </p>
                </div>
              </div>
              <button>Place Order</button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default CheckOutpage;
