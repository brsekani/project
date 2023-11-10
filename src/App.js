export default function App() {
  return (
    <div>
      <Nav />
      <Main />
      <Sort />
      <TopclothsForYou />
    </div>
  );
}

function Nav() {
  return (
    <div>
      <p>Fashion Frenzy</p>
      <img src="/icons/cart.svg" alt="Cart" />
    </div>
  );
}

function Main() {
  return (
    <div>
      <div>
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
      <div>
        <img src="/images/Girl-on-headphones.png" alt="Girl-on-headphones" />
      </div>
    </div>
  );
}

function Sort() {
  return (
    <div>
      <button>
        Sort By <img src="/icons/arrow-down.svg" alt="arrow-down" />
      </button>
      <button>
        Price <img src="/icons/arrow-down.svg" alt="arrow-down" />
      </button>
      <button>
        Review <img src="/icons/arrow-down.svg" alt="arrow-down" />
      </button>
    </div>
  );
}

function TopclothsForYou() {
  return (
    <div>
      <h1>Top cloths For You!</h1>
      <div>
        <img src="/images/Denim Jacket.png" alt="Denim Jacket" />
        <div>
          <p>Denim Jacket</p>
          <p>
            $<span>350.87</span>
          </p>
        </div>
        <div>
          Our jackets are made with the highest quality materials to ensure
          maximum comfort and durability.
        </div>
        <div>
          <div className="stars">
            <img src="/icons/star.svg" alt="star" />
            <img src="/icons/star.svg" alt="star" />
            <img src="/icons/star.svg" alt="star" />
            <img src="/icons/star.svg" alt="star" />
            <img src="/icons/star.svg" alt="star" />
          </div>
          <p>(151)</p>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
