import { Link, useLocation } from "react-router-dom";
import { Nav } from "../components/Nav";
import { useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";

function CheckOutpage() {
  // Order Received
  const [orderReceived, setOrderReceived] = useState(false);

  const location = useLocation();

  // console.log(location);

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

  // Create res for each input field
  const EmailRef = useRef(null);
  const ShippingFullNameRef = useRef(null);
  const ShippingStreetAddressRef = useRef(null);
  const CityRef = useRef(null);
  const StateProvinceRef = useRef(null);
  const ZipPostalCodeRef = useRef(null);
  const ShippingCountryRef = useRef(null);
  const CardNumberRef = useRef(null);
  const ExpirationDateRef = useRef(null);
  const SecurityCodeRef = useRef(null);
  const BillingFullNameRef = useRef(null);
  const BillingStreetAddressRef = useRef(null);
  const BillingCountryRef = useRef(null);

  const scrollToFirstError = (errors) => {
    const errorFields = [
      "email",
      "shippingFullName",
      "ShippingStreetAddress",
      "city",
      "stateProvince",
      "zipPostalCode",
      "shippingCountry",
      "cardNumber",
      "expirationDate",
      "securityCode",
      "billingFullName",
      "billingStreetAddress",
      "billingCountry",
    ];

    for (const field of errorFields) {
      if (errors[field]) {
        switch (field) {
          case "email":
            EmailRef.current.scrollIntoView({ behavior: "smooth" });
            break;
          case "shippingFullName":
            ShippingFullNameRef.current.scrollIntoView({ behavior: "smooth" });
            break;
          case "ShippingStreetAddress":
            ShippingStreetAddressRef.current.scrollIntoView({
              behavior: "smooth",
            });
            break;
          case "city":
            CityRef.current.scrollIntoView({ behavior: "smooth" });
            break;
          case "stateProvince":
            StateProvinceRef.current.scrollIntoView({ behavior: "smooth" });
            break;
          case "zipPostalCode":
            ZipPostalCodeRef.current.scrollIntoView({ behavior: "smooth" });
            break;
          case "shippingCountry":
            ShippingCountryRef.current.scrollIntoView({ behavior: "smooth" });
            break;
          case "cardNumber":
            CardNumberRef.current.scrollIntoView({ behavior: "smooth" });
            break;
          case "expirationDate":
            ExpirationDateRef.current.scrollIntoView({ behavior: "smooth" });
            break;
          case "securityCode":
            SecurityCodeRef.current.scrollIntoView({ behavior: "smooth" });
            break;
          case "billingFullName":
            BillingFullNameRef.current.scrollIntoView({ behavior: "smooth" });
            break;
          case "billingStreetAddress":
            BillingStreetAddressRef.current.scrollIntoView({
              behavior: "smooth",
            });
            break;
          case "billingCountry":
            BillingCountryRef.current.scrollIntoView({ behavior: "smooth" });
            break;
          default:
            // Default case if none of the conditions match
            break;
        }
        break; // Stop the loop when the first error is found
      }
    }
  };

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
    }
    //  else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expirationDate)) {
    //   newErrors.expirationDate = "Invalid expiration date format (MM/YY)";
    //   isValid = false;
    // }

    // Check for security code
    if (formData.securityCode.trim() === "") {
      newErrors.securityCode = "Security code is required";
      isValid = false;
    } else if (!/^\d{3}$/.test(formData.securityCode)) {
      newErrors.securityCode = "Invalid security code";
      isValid = false;
    }

    // scroll to the first input field with an error
    // if (newErrors.email)
    //   EmailRef.current.scrollIntoView({ behavior: "smooth" });
    // else if (newErrors.shippingFullName)
    //   ShippingFullNameRef.current.scrollIntoView({ behavior: "smooth" });
    // else if (newErrors.ShippingStreetAddress)
    //   ShippingStreetAddressRef.current.scrollIntoView({ behavior: "smooth" });
    // else if (newErrors.city)
    //   CityRef.current.scrollIntoView({ behavior: "smooth" });
    // else if (newErrors.stateProvince)
    //   StateProvinceRef.current.scrollIntoView({ behavior: "smooth" });
    // else if (newErrors.zipPostalCode)
    //   ZipPostalCodeRef.current.scrollIntoView({ behavior: "smooth" });
    // else if (newErrors.shippingCountry)
    //   ShippingCountryRef.current.scrollIntoView({ behavior: "smooth" });
    // else if (newErrors.cardNumber)
    //   CardNumberRef.current.scrollIntoView({ behavior: "smooth" });
    // else if (newErrors.expirationDate)
    //   ExpirationDateRef.current.scrollIntoView({ behavior: "smooth" });
    // else if (newErrors.securityCode)
    //   SecurityCodeRef.current.scrollIntoView({ behavior: "smooth" });
    // else if (newErrors.billingFullName)
    //   BillingFullNameRef.current.scrollIntoView({ behavior: "smooth" });
    // else if (newErrors.billingStreetAddress)
    //   BillingStreetAddressRef.current.scrollIntoView({ behavior: "smooth" });
    // else if (newErrors.billingCountry)
    //   BillingCountryRef.current.scrollIntoView({ behavior: "smooth" });

    setErrors(newErrors);
    scrollToFirstError(newErrors);

    return isValid;
  };

  function handlesubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      // Form is vaild, proceed with submission or other actions
      // console.log("Form submitted:", formData);
      setOrderReceived(true);
    } else {
      // console.log("Form contains errors");
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  // Function to close the order received overlay
  const handleCloseOverlay = () => {
    setOrderReceived(false);
  };

  return (
    <div>
      {orderReceived && (
        <div className="order-received-overlay " onClick={handleCloseOverlay}>
          <div className="order-received" onClick={(e) => e.stopPropagation()}>
            <FaCheck size={100} />
            <h2>Order Received!</h2>
            <p>Your order has been successfully placed. Thank you!</p>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              onClick={handleCloseOverlay}
            >
              <button>Buy Again</button>
            </Link>
          </div>
        </div>
      )}
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
                      ref={EmailRef}
                      id={errors.email ? "input-error" : ""}
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
                  <div className="Full-Name-input" useRef={ShippingFullNameRef}>
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="shippingFullName"
                      value={formData.shippingFullName}
                      onChange={handleChange}
                      ref={ShippingFullNameRef}
                      id={errors.shippingFullName ? "input-error" : ""}
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
                      ref={ShippingStreetAddressRef}
                      id={errors.ShippingStreetAddress ? "input-error" : ""}
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
                        ref={CityRef}
                        id={errors.city ? "input-error" : ""}
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
                        ref={StateProvinceRef}
                        id={errors.stateProvince ? "input-error" : ""}
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
                        ref={ZipPostalCodeRef}
                        id={errors.zipPostalCode ? "input-error" : ""}
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
                      ref={ShippingCountryRef}
                      value={formData.shippingCountry}
                      onChange={handleChange}
                      id={errors.shippingCountry ? "input-error" : ""}
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
                      ref={BillingFullNameRef}
                      id={errors.billingFullName ? "input-error" : ""}
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
                      ref={BillingStreetAddressRef}
                      id={errors.billingStreetAddress ? "input-error" : ""}
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
                      ref={BillingCountryRef}
                      id={errors.billingCountry ? "input-error" : ""}
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
                      ref={CardNumberRef}
                      id={errors.cardNumber ? "input-error" : ""}
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
                        type="text"
                        name="expirationDate"
                        value={formData.expirationDate}
                        onChange={handleChange}
                        ref={ExpirationDateRef}
                        id={errors.expirationDate ? "input-error" : ""}
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
                        ref={SecurityCodeRef}
                        id={errors.securityCode ? "input-error" : ""}
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
