import { Link } from "react-router-dom";

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
        <Link to="/">
          <button>Buy Now</button>
        </Link>
      </div>
      <div className="main-image">
        <img src="/images/Girl-on-headphones.png" alt="Girl-on-headphones" />
      </div>
    </main>
  );
}

export default Main;
