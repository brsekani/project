import { useEffect, useReducer, useRef } from "react";
import { SortMeun } from "./SortMeun";
import { useMyContext } from "../context/MyContext";

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

function Sort() {
  const [state, dispatch] = useReducer(reducer, initailState);

  const divRef = useRef(null);

  const { moveComponentToFront } = useMyContext();

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
    <div className="sort-container">
      <div className="sort">
        <button onClick={() => dispatch({ type: "TOOGLE_SORTBY_DIV" })}>
          Sort By
          <img
            src={
              state.sortByDiv ? "/icons/arrow-down.svg" : "/icons/arrow-up.svg"
            }
            alt="arrow-down"
          />
        </button>
        <button onClick={() => dispatch({ type: "TOOGLE_PRICEBY_DIV" })}>
          Price
          <img
            src={
              state.PriceDiv ? "/icons/arrow-down.svg" : "/icons/arrow-up.svg"
            }
            alt="arrow-down"
          />
        </button>
        <button onClick={() => dispatch({ type: "TOOGLE_REVIEW" })}>
          Review
          <img
            src={
              state.reviewDiv ? "/icons/arrow-down.svg" : "/icons/arrow-up.svg"
            }
            alt="arrow-down"
          />
        </button>
      </div>
      <div className="sort-meun-container">
        {state.sortByDiv && (
          <SortMeun>
            <div className="sort-meun" ref={divRef}>
              <img
                src="/icons/cancel.svg"
                alt="X"
                onClick={() => dispatch({ type: "TOOGLE_SORTBY_DIV" })}
              />
              <h1>Sort By</h1>
              <hr></hr>
              <ul className="sort-meun-list">
                <li
                  onClick={() => {
                    moveComponentToFront(0);
                    dispatch({ type: "TOOGLE_SORTBY_DIV" });
                  }}
                >
                  Top Cloths
                </li>
                <li
                  onClick={() => {
                    moveComponentToFront(1);
                    dispatch({ type: "TOOGLE_SORTBY_DIV" });
                  }}
                >
                  Other Quality
                </li>
                <li
                  onClick={() => {
                    moveComponentToFront(2);
                    dispatch({ type: "TOOGLE_SORTBY_DIV" });
                  }}
                >
                  High Quality Shoes
                </li>
                <li
                  onClick={() => {
                    moveComponentToFront(3);
                    dispatch({ type: "TOOGLE_SORTBY_DIV" });
                  }}
                >
                  Other Standard
                </li>
              </ul>
            </div>
            ;
          </SortMeun>
        )}

        {state.PriceDiv && (
          <SortMeun>
            <div className="sort-meun" ref={divRef}>
              <img
                src="/icons/cancel.svg"
                alt="X"
                onClick={() => dispatch({ type: "TOOGLE_PRICEBY_DIV" })}
              />
              <h1>Prices Range</h1>
              <hr></hr>
              <ul className="sort-meun-list">
                <l1>$200-$500</l1>
                <l1>$500-$750</l1>
                <l1>$750-$1000</l1>
                <l1>$1000-$1500</l1>
              </ul>
            </div>
          </SortMeun>
        )}
        {state.reviewDiv && (
          <SortMeun>
            <div className="sort-meun" ref={divRef}>
              <img
                src="/icons/cancel.svg"
                alt="X"
                onClick={() => dispatch({ type: "TOOGLE_REVIEW" })}
              />
              <h2>No Items Selected</h2>
            </div>
            ;
          </SortMeun>
        )}
      </div>
    </div>
  );
}

export default Sort;
