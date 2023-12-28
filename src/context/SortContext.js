// Step 1: Create a new context
import data from "../Data.json";

import { createContext, useContext, useReducer } from "react";

const SortContext = createContext();

// Step 2: Define the initail state and the function

const initailState = data;

const reducer = (state, action) => {
  switch (action.type) {
    case "SORT_PRICE_200-500":
      const sortedOne = data.products.filter(
        (product) =>
          product.price > action.payload.minPrice &&
          product.price < action.payload.maxPrice
      );
      return {
        ...state,
        data: sortedOne,
      };

    case "SORT_PRICE_500-750":
      const sortedTwo = data.products.filter(
        (product) =>
          product.price > action.payload.minPrice &&
          product.price < action.payload.maxPrice
      );
      return {
        ...state,
        data: sortedTwo,
      };

    case "SORT_PRICE_750-1000":
      const sortedThree = data.products.filter(
        (product) =>
          product.price > action.payload.minPrice &&
          product.price < action.payload.maxPrice
      );
      return {
        ...state,
        data: sortedThree,
      };

    case "SORT_PRICE_1000-1500":
      const sortedFour = data.products.filter(
        (product) =>
          product.price > action.payload.minPrice &&
          product.price < action.payload.maxPrice
      );
      return {
        ...state,
        data: sortedFour,
      };

    default:
      return state;
  }
};

// Step 3: create a provider component
const SortProvider = ({ Children }) => {
  const [state, dispatch] = useReducer(reducer, initailState);

  return (
    <SortContext.Provider value={{ dispatch, state }}>
      (Children)
    </SortContext.Provider>
  );
};

const useSortContext = () => {
  const context = useContext(SortContext);
  if (context === undefined)
    throw new Error("MyContext is used outside my SortProvider");
  return context;
};

export { useSortContext, SortProvider };
