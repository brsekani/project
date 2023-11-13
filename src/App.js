import { useState } from "react";
import jsonData from "./Data.json";
import React from "react";

export default function App() {
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="app-container">
      <Nav onHandleCart={handleCart} />
      <Body showCart={showCart} />
      <Footer />
    </div>
  );

  function handleCart() {
    setShowCart(!showCart);
    console.log(showCart);
  }
}

function Nav({ onHandleCart }) {
  return (
    <nav>
      <p>Fashion Frenzy</p>
      <img src="/icons/cart.svg" alt="Cart" onClick={onHandleCart} />
    </nav>
  );
}

function Body({ showCart }) {
  const [displayBody, setDisplayBody] = useState(true);
  const [productId, setProductID] = useState(0);
  const [sortByShow, setSortByShow] = useState(false);
  const [priceShow, setPriceShow] = useState(false);
  const [reviewShow, setReviewShow] = useState(false);
  const [jsonDataArray, setJsonDataArray] = useState(jsonData.products);

  const ProductDisplay = jsonData.products.filter(
    (product) => product.id === productId
  );

  const handleDisplay = () => {
    setDisplayBody();
  };

  const products = (
    <div>
      <TopClothesContainer
        onHandleDisplay={handleDisplay}
        setProductID={setProductID}
        jsonDataArray={jsonDataArray}
      />
      <OtherQuality
        onHandleDisplay={handleDisplay}
        setProductID={setProductID}
        jsonDataArray={jsonDataArray}
      />
      <HighQualityShoes
        onHandleDisplay={handleDisplay}
        setProductID={setProductID}
        jsonDataArray={jsonDataArray}
      />
      <OtherStandard
        onHandleDisplay={handleDisplay}
        setProductID={setProductID}
        jsonDataArray={jsonDataArray}
      />
    </div>
  );
  const productsAr = React.Children.toArray(products.props.children);
  const [productArray, setProductArray] = useState(productsAr);

  // HANDLING SORT BY NAME
  function handleSortBy(num) {
    // let currentPosition = 0;
    if (num === 0 && num < productArray.length) {
      setProductArray(productsAr);
      setSortByShow(!setSortByShow);
    } else if (num === 1 && num < productArray.length) {
      const newArray = [...productsAr];
      const elementToMove = newArray.splice(num, 1)[0];
      newArray.unshift(elementToMove);
      setProductArray(newArray);
      setSortByShow(!setSortByShow);
    } else if (num === 2 && num < productArray.length) {
      const newArray = [...productsAr];
      const elementToMove = newArray.splice(num, 1)[0];
      newArray.unshift(elementToMove);
      setProductArray(newArray);
      setSortByShow(!setSortByShow);
    } else if (num === 3 && num < productArray.length) {
      const newArray = [...productsAr];
      const elementToMove = newArray.splice(num, 1)[0];
      newArray.unshift(elementToMove);
      setProductArray(newArray);
      setSortByShow(!setSortByShow);
    }
  }

  // HANDLE SORT PRICE
  function handlePriceRange(amount) {
    let startPrice = 0;
    let endPrice = 0;
    if (amount === 250) {
      startPrice = 250;
      endPrice = 500;
    } else if (amount === 500) {
      startPrice = 500;
      endPrice = 750;
    } else if (amount === 750) {
      startPrice = 750;
      endPrice = 1000;
    } else if (amount === 1000) {
      startPrice = 1000;
      endPrice = 1500;
    }

    const products = jsonData.products.filter(
      (product) =>
        Number(product.price) >= startPrice && Number(product.price) <= endPrice
    );
    setJsonDataArray(products);
    console.log(products);
  }

  return (
    <div className="body">
      {displayBody && !showCart && (
        <>
          <Main />
          <Sort
            handleSortBy={handleSortBy}
            handlePriceRange={handlePriceRange}
            sortByShow={sortByShow}
            setSortByShow={setSortByShow}
            priceShow={priceShow}
            setPriceShow={setPriceShow}
            reviewShow={reviewShow}
            setReviewShow={setReviewShow}
          />
          <ProductsContainer
            onHandleDisplay={handleDisplay}
            productArray={productArray}
          />
        </>
      )}
      {!displayBody &&
        ProductDisplay.map((product) => {
          return (
            <div key={2}>
              <img
                className="back-btn"
                src="/icons/back-button.svg"
                alt="back"
                onClick={() => setDisplayBody(true)}
              />
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
                  <h1 className="price-des">
                    $<span>{product.price}</span>
                  </h1>
                  <div className="product-colour">
                    <p>Colors Available:</p>
                    <div>
                      <img src={product.smallImage} alt="product" />
                    </div>
                  </div>
                  <div className="shipping-info">
                    <h2>Shipping: $150.87</h2>
                    <p>
                      From China to Nigeria via AliExpress Standard Shipping
                      Estimated delivery on Mar 12
                    </p>
                  </div>
                  <button>Buy Now</button>
                </div>
              </div>
            </div>
          );
        })}
      {/* NOT DONE */}
      {showCart && displayBody && <Footer />}
    </div>
  );
}

function Main() {
  return (
    <main>
      <div className="main-text">
        <h1>
          SUMMER SALE <span>50% Off</span>
        </h1>
        <p>
          Discover a world of endless possibilities with our shopping website!
          Shop from a wide range of top-quality products at unbeaten prices.Your
          satisfaction is our top priority, so start shopping now and elevate
          your life! Buy Now
        </p>
        <button>Buy Now</button>
      </div>
      <div className="main-image">
        <img src="/images/Girl-on-headphones.png" alt="Girl-on-headphones" />
      </div>
    </main>
  );
}

function Sort({
  handleSortBy,
  handlePriceRange,
  sortByShow,
  setSortByShow,
  priceShow,
  setPriceShow,
  reviewShow,
  setReviewShow,
}) {
  const handleButtonClick = (buttonNumber) => {
    if (buttonNumber === 1) setSortByShow(!sortByShow);
    else if (buttonNumber === 2) setPriceShow(!priceShow);
    else if (buttonNumber === 3) setReviewShow(!reviewShow);
  };

  return (
    <div>
      <div className="sort">
        <button onClick={() => handleButtonClick(1)}>
          Sort By
          <img
            src={sortByShow ? "/icons/arrow-down.svg" : "/icons/arrow-up.svg"}
            alt="arrow-down"
          />
        </button>
        <button onClick={() => handleButtonClick(2)}>
          Price
          <img
            src={priceShow ? "/icons/arrow-down.svg" : "/icons/arrow-up.svg"}
            alt="arrow-down"
          />
        </button>
        <button onClick={() => handleButtonClick(3)}>
          Review
          <img
            src={reviewShow ? "/icons/arrow-down.svg" : "/icons/arrow-up.svg"}
            alt="arrow-down"
          />
        </button>
      </div>
      <div
        className="sort-meun-container"
        style={{
          display: priceShow || sortByShow || reviewShow ? "flex" : "none",
        }}
      >
        <SortMeun>
          <div className="sort-meun" style={{ opacity: sortByShow ? 1 : 0 }}>
            <img
              src="/icons/cancel.svg"
              alt="X"
              onClick={() => setSortByShow(!sortByShow)}
            />
            <h1>Sort By</h1>
            <hr></hr>
            <ul className="sort-meun-list">
              <l1 onClick={() => handleSortBy(0)}>Top Cloths</l1>
              <l1 onClick={() => handleSortBy(1)}>Other Quality</l1>
              <l1 onClick={() => handleSortBy(2)}>High Quality Shoes</l1>
              <l1 onClick={() => handleSortBy(3)}>Other Standard</l1>
            </ul>
          </div>
          ;
        </SortMeun>
        <SortMeun>
          <div className="sort-meun" style={{ opacity: priceShow ? 1 : 0 }}>
            <img
              src="/icons/cancel.svg"
              alt="X"
              onClick={() => setPriceShow(!priceShow)}
            />
            <h1>Prices Range</h1>
            <hr></hr>
            <ul className="sort-meun-list">
              <l1 onClick={() => handlePriceRange(250)}>$200-$500</l1>
              <l1 onClick={() => handlePriceRange(500)}>$500-$750</l1>
              <l1 onClick={() => handlePriceRange(750)}>$750-$1000</l1>
              <l1 onClick={() => handlePriceRange(1000)}>$1000-$1500</l1>
            </ul>
          </div>
        </SortMeun>
        <SortMeun>
          <div className="sort-meun" style={{ opacity: reviewShow ? 1 : 0 }}>
            <img
              src="/icons/cancel.svg"
              alt="X"
              onClick={() => setReviewShow(!reviewShow)}
            />
            <h2>No Items Selected</h2>
          </div>
          ;
        </SortMeun>
      </div>
    </div>
  );
}

function SortMeun(props) {
  return <>{props.children}</>;
}

function ProductHeader(props) {
  return <h1>{props.children}</h1>;
}

function ProductsContainer({ productArray }) {
  return productArray;
}

function TopClothesContainer({ onHandleDisplay, setProductID, jsonDataArray }) {
  const topcloths = jsonDataArray.filter(
    (product) => product.section === "Top cloths For You"
  );

  return (
    <>
      <ProductHeader>
        <h1 className="top-clothes-header">Top cloths For You!</h1>
      </ProductHeader>
      <div className="products-container">
        {topcloths.map((product, index) => (
          <Products
            key={index}
            product={product}
            onHandleDisplay={onHandleDisplay}
            setProductID={setProductID}
          />
        ))}
      </div>
    </>
  );
}

function OtherQuality({ onHandleDisplay, setProductID, jsonDataArray }) {
  const OtherQuality = jsonDataArray.filter(
    (product) => product.section === "Other Quality"
  );

  return (
    <>
      <ProductHeader>
        <h1 className="other-quality-header">Other Quality</h1>
      </ProductHeader>
      <div className="products-container">
        {OtherQuality.map((product, index) => (
          <Products
            key={index}
            product={product}
            onHandleDisplay={onHandleDisplay}
            setProductID={setProductID}
          />
        ))}
      </div>
    </>
  );
}

function HighQualityShoes({ onHandleDisplay, setProductID, jsonDataArray }) {
  const OtherQuality = jsonDataArray.filter(
    (product) => product.section === "High Quality Shoes"
  );

  return (
    <>
      <ProductHeader>
        <h1 className="other-quality-header">High Quality Shoes</h1>
      </ProductHeader>
      <div className="products-container">
        {OtherQuality.map((product, index) => (
          <Products
            key={index}
            product={product}
            onHandleDisplay={onHandleDisplay}
            setProductID={setProductID}
          />
        ))}
      </div>
    </>
  );
}

function OtherStandard({ onHandleDisplay, setProductID, jsonDataArray }) {
  const OtherQuality = jsonDataArray.filter(
    (product) => product.section === "Other Standard"
  );

  return (
    <>
      <ProductHeader>
        <h1 className="other-quality-header">Other Standard</h1>
      </ProductHeader>
      <div className="products-container">
        {OtherQuality.map((product, index) => (
          <Products
            key={index}
            product={product}
            onHandleDisplay={onHandleDisplay}
            setProductID={setProductID}
          />
        ))}
      </div>
    </>
  );
}

function Products({ product, onHandleDisplay, setProductID }) {
  const HanldleID = (e, id) => {
    setProductID(id);
  };

  const HandleOnClickBoth = (e, id) => {
    HanldleID(e, id);
    onHandleDisplay();
  };

  return (
    <div
      className="product-container"
      key={product.id}
      onClick={(e) => HandleOnClickBoth(e, product.id)}
    >
      <div className="product-image">
        <img src={product.image} alt="Denim Jacket" />
      </div>
      <img src="/icons/empty-love.svg" alt="love" className="love" />
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
      <button>Add to Cart</button>
    </div>
  );
}
function Footer() {
  return <footer>Fashion Frenzy</footer>;
}
