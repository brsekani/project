import { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";

// STEP 1: Create a new context
const MyContext = createContext();

// Step 2: Define initail  state and reducer function
const initailstate = {
  cart: [],
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

    case "TOGGLE_CHECK_PRODUCT":
      return {
        ...state,
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
      };

    // case "SET_CART":
    //   return { ...state, cart: action.payload };

    default:
      return state;
  }
};

// Step 3: Create a provider component
const MyProvider = ({ children }) => {
  const [{ cart }, dispatch] = useReducer(reducer, initailstate);

  return (
    <MyContext.Provider value={{ cart, dispatch }}>
      {children}
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
