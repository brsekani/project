import { useMyContext } from "./context/MyContext";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HighQualityShoes from "./components/HighQualityShoes";
import OtherQuality from "./components/OtherQuality";
import OtherStandard from "./components/OtherStandard";
import TopClotheContainer from "./components/TopClotheContainer";
import LoadingSpinner from "./components/LoadingSnipper";

// import AddToCartPage from "./pages/AddToCartPage";
// import CheckOutpage from "./pages/CheckOutpage";
// import Homepage from "./pages/Homepage";
// import ProductDetails from "./pages/ProductDetails";
// import PageNotFound from "./pages/PageNotFound";

const AddToCartPage = lazy(() => import("./pages/AddToCartPage"));
const CheckOutpage = lazy(() => import("./pages/CheckOutpage"));
const Homepage = lazy(() => import("./pages/Homepage"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

export default function App() {
  const { cart } = useMyContext();
  // Load cart from local storage when the component mount
  // useEffect(() => {
  //   const savedCart = localStorage.getItem("cart");
  //   console.log(savedCart);

  //   if (savedCart) {
  //     dispatch({ type: "SET_CART", payload: JSON.parse(savedCart) });
  //   }
  // }, []);

  // // Save cart to local storage whenever th cart chnages
  // useEffect(() => {
  //   if (cart.length) localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  const products = (
    <div>
      <TopClotheContainer />
      <OtherQuality />
      <HighQualityShoes />
      <OtherStandard />
    </div>
  );

  return (
    <BrowserRouter>
      <div className="app-container">
        <ToastContainer />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route
              path="/"
              element={<Homepage products={products.props.children} />}
            />
            <Route path="/product/:name" element={<ProductDetails />} />
            <Route path="/cart" element={<AddToCartPage />} />
            <Route path="/cart/checkout" element={<CheckOutpage />} />
            <Route path="/product/:name/checkout" element={<CheckOutpage />} />
            <Route path="/checkout" element={<CheckOutpage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}
