import { Link, useLocation } from "react-router-dom";
import { Nav } from "../components/Nav";
import { useState } from "react";

function CheckOutpage() {
  // Form validation
  const [formData, setFormData] = useState({
    email: "",
    shippingFullName: "",
    ShippingStreetAddress: "",
    city: "",
    stateProvince: "",
    zipPostalCode: "",
    shippingCountry: "",
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
    billingFullName: "",
    billingStreetAddress: "",
    billingCountry: "",
  });

  const [errors, setErrors] = useState({});
  console.log(errors);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.username && formData.username.trim() === "") {
      //Check for email
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invald email format";
      isValid = false;
    }

    //Check for shipping fullName
    if (formData.shippingFullName.trim() === "") {
      newErrors.shippingFullName = "FullName is required";
      isValid = false;
    }

    // Check for ShippingStreetAddress
    if (formData.ShippingStreetAddress.trim() === "") {
      newErrors.ShippingStreetAddress = "Address is required";
      isValid = false;
    }

    // Check for city
    if (formData.city.trim() === "") {
      newErrors.city = "City is required";
      isValid = false;
    }

    // Check for State/Provice
    if (formData.stateProvince.trim() === "") {
      newErrors.stateProvince = "State is required";
      isValid = false;
    }

    // Check for Zip/Postal Code
    if (formData.zipPostalCode.trim() === "") {
      newErrors.zipPostalCode = "Zip is required";
      isValid = false;
    }

    // Check for shipping country
    if (formData.shippingCountry.trim() === "") {
      newErrors.shippingCountry = "Country is required";
      isValid = false;
    }

    // Check for billing fullname
    if (formData.billingFullName.trim() === "") {
      newErrors.billingFullName = "Fullname is required";
      isValid = false;
    }

    // Check for billing address
    if (formData.billingStreetAddress.trim() === "") {
      newErrors.billingStreetAddress = "Address is required";
      isValid = false;
    }

    // Check for billing country
    if (formData.billingCountry.trim() === "") {
      newErrors.billingCountry = "Country is required";
      isValid = false;
    }

    // Check for card number
    if (formData.cardNumber.trim() === "") {
      newErrors.cardNumber = "Card number is required";
      isValid = false;
    } else if (!/^\d{16}$/.test(formData.cardNumber)) {
      newErrors.cardNumber = "Invalid card number";
      isValid = false;
    }

    // Check for expiration date
    if (formData.expirationDate.trim() === "") {
      newErrors.expirationDate = "Expiration date is required";
      isValid = false;
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expirationDate)) {
      newErrors.expirationDate = "Invalid expiration date format (MM/YY)";
      isValid = false;
    }

    // Check for security code
    if (formData.securityCode.trim() === "") {
      newErrors.securityCode = "Security code is required";
      isValid = false;
    } else if (!/^\d{3}$/.test(formData.securityCode)) {
      newErrors.securityCode = "Invalid security code";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const location = useLocation();

  // console.log(location);

  function handlesubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      // Form is vaild, proceed with submission or other actions
      console.log("Form submitted:", formData);
    } else {
      console.log("Form contains errors");
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

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
          <form className="info-con" onSubmit={handlesubmit}>
            <div className="first-div">
              <div className="customer-div">
                <div className="infos-header">
                  <h1>Customer Info</h1>
                  <p>* Required</p>
                </div>
                <hr />
                <div className="customer-input">
                  <div>
                    <label>Email *</label>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "-7px",
                          fontFamily: "Montserrat",
                        }}
                      >
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="Shipping-div">
                <div className="infos-header">
                  <h1>Shipping Address</h1>
                  <p>* Required</p>
                </div>
                <hr />
                <div className="Shipping-input">
                  <div className="Full-Name-input">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="shippingFullName"
                      value={formData.shippingFullName}
                      onChange={handleChange}
                    />
                    {errors.shippingFullName && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "-7px",
                          fontFamily: "Montserrat",
                        }}
                      >
                        {errors.shippingFullName}
                      </span>
                    )}
                  </div>
                  <div className="Street-input">
                    <label>Street Address *</label>
                    <input
                      type="text"
                      name="ShippingStreetAddress"
                      value={formData.ShippingStreetAddress}
                      onChange={handleChange}
                    />
                    <input type="text" />
                    {errors.ShippingStreetAddress && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "-7px",
                          fontFamily: "Montserrat",
                        }}
                      >
                        {errors.ShippingStreetAddress}
                      </span>
                    )}
                  </div>
                  <div className="Shipping-sub-input">
                    <div>
                      <label>City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                      />
                      {errors.city && (
                        <span
                          style={{
                            color: "red",
                            fontSize: "12px",
                            marginTop: "-7px",
                            fontFamily: "Montserrat",
                          }}
                        >
                          {errors.city}
                        </span>
                      )}
                    </div>
                    <div>
                      <label>State/Province </label>
                      <input
                        type="text"
                        name="stateProvince"
                        value={formData.stateProvince}
                        onChange={handleChange}
                      />
                      {errors.stateProvince && (
                        <span
                          style={{
                            color: "red",
                            fontSize: "12px",
                            marginTop: "-7px",
                            fontFamily: "Montserrat",
                          }}
                        >
                          {errors.stateProvince}
                        </span>
                      )}
                    </div>
                    <div>
                      <label>Zip/Postal Code *</label>
                      <input
                        type="number"
                        name="zipPostalCode"
                        value={formData.zipPostalCode}
                        onChange={handleChange}
                      />
                      {errors.zipPostalCode && (
                        <span
                          style={{
                            color: "red",
                            fontSize: "12px",
                            marginTop: "-7px",
                            fontFamily: "Montserrat",
                          }}
                        >
                          {errors.zipPostalCode}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="Country-input">
                    <label>Country *</label>
                    <input
                      type="text"
                      placeholder="United States"
                      name="shippingCountry"
                      value={formData.shippingCountry}
                      onChange={handleChange}
                    />
                    {errors.shippingCountry && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "-7px",
                          fontFamily: "Montserrat",
                        }}
                      >
                        {errors.shippingCountry}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="Billing-div">
                <div className="infos-header">
                  <h1>Billing Address</h1>
                  <p>* Required</p>
                </div>
                <hr />
                <div className="Billing-input">
                  <div className="Full-Name-input">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="billingFullName"
                      value={formData.billingFullName}
                      onChange={handleChange}
                    />
                    {errors.billingFullName && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "-7px",
                          fontFamily: "Montserrat",
                        }}
                      >
                        {errors.billingFullName}
                      </span>
                    )}
                  </div>
                  <div className="Street-input">
                    <label>Street Address *</label>
                    <input
                      type="text"
                      name="billingStreetAddress"
                      value={formData.billingStreetAddress}
                      onChange={handleChange}
                    />
                    <input type="text" />
                    {errors.billingStreetAddress && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "-7px",
                          fontFamily: "Montserrat",
                        }}
                      >
                        {errors.billingStreetAddress}
                      </span>
                    )}
                  </div>
                  <div className="Billing-sub-input">
                    <div>
                      <input type="text" />
                    </div>
                    <div>
                      <input type="text" />
                    </div>
                    <div>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="Country-input">
                    <label>Country *</label>
                    <input
                      type="text"
                      placeholder="United States"
                      name="billingCountry"
                      value={formData.billingCountry}
                      onChange={handleChange}
                    />
                    {errors.billingCountry && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "-7px",
                          fontFamily: "Montserrat",
                        }}
                      >
                        {errors.billingCountry}
                      </span>
                    )}
                  </div>
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
                  <div>
                    <input type="radio" />
                    <label>Any Goods</label>
                  </div>
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
                  <div>
                    <label>Card Number *</label>
                    <input
                      type="number"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                    />
                    {errors.cardNumber && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "7px",
                          fontFamily: "Montserrat",
                        }}
                      >
                        {errors.cardNumber}
                      </span>
                    )}
                  </div>
                  <div className="Card-sub-input">
                    <div>
                      <label>Expiration Date *</label>
                      <input
                        type="number"
                        name="expirationDate"
                        value={formData.expirationDate}
                        onChange={handleChange}
                      />
                      {errors.expirationDate && (
                        <span
                          style={{
                            color: "red",
                            fontSize: "12px",
                            marginTop: "7px",
                            fontFamily: "Montserrat",
                          }}
                        >
                          {errors.expirationDate}
                        </span>
                      )}
                    </div>
                    <div>
                      <label>Security Code *</label>
                      <input
                        type="number"
                        name="securityCode"
                        value={formData.securityCode}
                        onChange={handleChange}
                      />
                      {errors.securityCode && (
                        <span
                          style={{
                            color: "red",
                            fontSize: "12px",
                            marginTop: "7px",
                            fontFamily: "Montserrat",
                          }}
                        >
                          {errors.securityCode}
                        </span>
                      )}
                    </div>
                  </div>
                  <p>Billing Address Same As Shipping </p>
                </div>
              </div>
              <button onClick={handlesubmit}>Place Order</button>
            </div>
          </form>
        </div>
      </>
    </div>
  );
}

export default CheckOutpage;
