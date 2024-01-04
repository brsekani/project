import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useSpring, animated, config } from "react-spring";
import Data from "../Data.json";
import { toast } from "react-toastify";

import HighQualityShoes from "../components/HighQualityShoes";
import OtherQuality from "../components/OtherQuality";
import OtherStandard from "../components/OtherStandard";
import TopClotheContainer from "../components/TopClotheContainer";

const originalData = Data.products;

// STEP 1: Create a new context
const MyContext = createContext();

// Step 2: Define initail  state and reducer function
const initailstate = {
  cart: [],
  isFiltering: false,
};

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
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
          isFiltering: false,
        };
      }

    case "REMOVE_FROM_CART":
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        cart: updatedCart,
        isFiltering: false,
      };

    case "INCREMENT_QUANTITY":
      return {
        ...state,
        isFiltering: false,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREMENT_QUANTITY":
      return {
        ...state,
        isFiltering: false,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
            : item
        ),
      };

    case "TOGGLE_CHECK_PRODUCT":
      return {
        ...state,
        isFiltering: false,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, checked: !item.checked }
            : item
        ),
      };

    case "CHECKED_ALL_ITEMS":
      const AllProductChecked = state.cart.every(
        (item) => item.checked === true
      );
      const checkedAllItems = state.cart.map((item) =>
        AllProductChecked
          ? {
              ...item,
              checked: false,
            }
          : {
              ...item,
              checked: true,
            }
      );
      return {
        ...state,
        cart: checkedAllItems,
        isFiltering: false,
      };

    case "SET_CART":
      return { ...state, isFiltering: false, cart: action.payload };

    case "SET_FILTERING":
      return { ...state, isFiltering: action.payload };

    default:
      return state;
  }
};

// Step 3: Create a provider component
const MyProvider = ({ children }) => {
  const [isRed, setIsRed] = useState(true);

  const [{ cart, isFiltering }, dispatch] = useReducer(reducer, initailstate);

  // Load cart data from local storage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      dispatch({ type: "SET_CART", payload: JSON.parse(storedCart) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // TOTAL PRICE CAL
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const toggleIsRed = useCallback(() => {
    setIsRed((prevIsRed) => !prevIsRed);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => toggleIsRed, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [toggleIsRed]);

  // SORTED BY NAME LOGIC
  const defaultOrder = [
    <TopClotheContainer key="TopClotheContainer" />,
    <OtherQuality key="OtherQuality" />,
    <HighQualityShoes key="HighQualityShoes" />,
    <OtherStandard key="OtherStandard" />,
  ];

  const [componentOrder, setComponentOrder] = useState(defaultOrder);

  const moveComponentToFront = (num) => {
    const newOrder = [...componentOrder];

    // Find the index of the component specified by num in the current order
    const componentIndex = newOrder.findIndex(
      (component) => component.key === defaultOrder[num].key
    );

    // If the component is not already at the top, move it to the top
    if (componentIndex !== 0) {
      const [movedComponent] = newOrder.splice(componentIndex, 1);
      newOrder.unshift(movedComponent);
    }

    // If moving TopClotheContainer, and it's already at the top, do nothing
    if (num === 0 && componentIndex === 0) {
      return;
    }

    setComponentOrder(newOrder);
  };

  const [data, setData] = useState(originalData);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  useEffect(() => {
    // Apply filters when minPrice or maxPrice change
    if (minPrice !== null || maxPrice !== null) {
      const filteredData = originalData.filter(
        (product) =>
          (minPrice === null || product.price > minPrice) &&
          (maxPrice === null || product.price < maxPrice)
      );
      dispatch({ type: "SET_FILTERING", payload: false });
      setData(filteredData);
    } else {
      // Reset to the original state
      setData(originalData);
      dispatch({ type: "SET_FILTERING", payload: false });
    }
  }, [minPrice, maxPrice]);

  const handleFilterClick = (clickedMinPrice, clickedMaxPrice) => {
    if (clickedMinPrice === minPrice && clickedMaxPrice === maxPrice) {
      // Reset to the original state
      dispatch({ type: "SET_FILTERING", payload: true });
      setMinPrice(null);
      setMaxPrice(null);
    } else {
      // Apply filters on the next render (useEffect)
      dispatch({ type: "SET_FILTERING", payload: true });
      setMinPrice(clickedMinPrice);
      setMaxPrice(clickedMaxPrice);
    }
  };

  return (
    <MyContext.Provider
      value={{
        cart,
        dispatch,
        isRed,
        totalPrice,
        componentOrder,
        moveComponentToFront,
        data,
        handleFilterClick,
        isFiltering,
      }}
    >
      {children}
      {/* {isFiltering ? (
        <animated.div style={springProps}>{children}</animated.div>
      ) : (
        children
      )} */}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === undefined)
    throw new Error("MyContext is used outside my MyProvider");
  return context;
};

export { useMyContext, MyProvider };
