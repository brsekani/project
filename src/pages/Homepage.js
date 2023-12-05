// import CategoriesContainer from "../components/CategoriesContainer";

import CategoriesContainer from "../components/CategoriesContainer";
import Footer from "../components/Footer";
import Main from "../components/Main";
import { Nav } from "../components/Nav";
import Sort from "../components/Sort";
import { Link } from "react-router-dom";

function Body({ dispatch, products }) {
  return (
    <div className="body">
      <Nav>
        <p>Fashion Frenzy</p>
        <Link to="/cart">
          <img src="/icons/cart.svg" alt="Cart" />
        </Link>
      </Nav>
      <Main />
      <Sort />
      <CategoriesContainer products={products} />
      <Footer />
    </div>
  );
}

export default Body;
