import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoadingSpinner from "./components/LoadingSnipper";

const AddToCartPage = lazy(() => import("./pages/AddToCartPage"));
const CheckOutpage = lazy(() => import("./pages/CheckOutpage"));
const Homepage = lazy(() => import("./pages/Homepage"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

export default function App() {
  // const products = (
  //   <div>
  //     <TopClotheContainer />
  //     <OtherQuality />
  //     <HighQualityShoes />
  //     <OtherStandard />
  //   </div>
  // );

  return (
    <BrowserRouter>
      <div className="app-container">
        <ToastContainer />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
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
