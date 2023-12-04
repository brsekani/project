import { useEffect, useReducer } from "react";
import AddToCartPage from "./pages/AddToCartPage";
import CheckOutpage from "./pages/CheckOutpage";
import Homepage from "./pages/Homepage";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        toast(`❗ ${action.payload.name} has already been added to cart`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          progressStyle: { background: "red" },
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        return state;
      } else {
        toast(`✔️ ${action.payload.name} has been added to cart`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }

    case "REMOVE_FROM_CART":
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      console.log(updatedCart);
      return {
        ...state,
        cart: updatedCart,
      };

    // case "SET_CART":
    //   return { ...state, cart: action.payload };

    default:
      return state;
  }
};

export default function App() {
  const initailstate = {
    cart: [],
  };

  const [{ cart }, dispatch] = useReducer(reducer, initailstate);

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

  return (
    <BrowserRouter>
      <div className="app-container">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Homepage dispatch={dispatch} />} />
          <Route path="/product/:name" element={<ProductDetails />} />
          <Route
            path="/cart"
            element={<AddToCartPage cart={cart} dispatch={dispatch} />}
          />
          <Route path="/cart/checkout" element={<CheckOutpage />} />
          <Route path="/product/:name/checkout" element={<CheckOutpage />} />
          <Route path="/checkout" element={<CheckOutpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
