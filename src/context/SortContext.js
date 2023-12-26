// Step 1: Create a new context

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";

const SortContext = createContext();

// Step 2: Define the initail state and the function

const initailState = {
  sortByDiv: false,
  PriceDiv: false,
  reviewDiv: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOOGLE_SORTBY_DIV":
      return {
        ...state,
        sortByDiv: !state.sortByDiv,
        PriceDiv: !state.sortByDiv ? false : "",
        reviewDiv: !state.sortByDiv ? false : "",
      };

    case "TOOGLE_PRICEBY_DIV":
      return {
        ...state,
        PriceDiv: !state.PriceDiv,
        sortByDiv: !state.PriceDiv ? false : "",
        reviewDiv: !state.PriceDiv ? false : "",
      };

    case "TOOGLE_REVIEW":
      return {
        ...state,
        reviewDiv: !state.reviewDiv,
        sortByDiv: !state.reviewDiv ? false : "",
        PriceDiv: !state.reviewDiv ? false : "",
      };

    case "CLICK_OUTSIDE_DIV":
      return {
        ...state,
        sortByDiv: false,
        PriceDiv: false,
        reviewDiv: false,
      };

    default:
      return state;
  }
};

// Step 3: create a provider component
const SortProvider = ({ Children }) => {
  const [state, dispatch] = useReducer(reducer, initailState);

  const divRef = useRef(null);

  const handleClick = (event) => {
    if (divRef.current && divRef.current.contains(event.target)) {
      // console.log("inside");
      return;
    } else {
      // console.log("Outside");
      dispatch({ type: "CLICK_OUTSIDE_DIV" });
    }
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        (state.sortByDiv || state.PriceDiv || state.reviewDiv) &&
        !event.target.closest("button")
      ) {
        handleClick(event);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [state.sortByDiv, state.PriceDiv, state.reviewDiv]);

  return (
    <SortContext.Provider value={{ dispatch, state, divRef }}>
      {Children}
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
