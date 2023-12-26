import data from "../Data.json";
import { ProductHeader } from "./ProductHeader";
import Products from "./Products";

function TopClotheContainer({ dispatch }) {
  const topcloths = data.products.filter(
    (product) => product.section === "Top cloths For You"
  );

  return (
    <div className="products-div">
      <ProductHeader>
        <h1 className="top-clothes-header">Top cloths For You!</h1>
      </ProductHeader>
      <div className="products-container">
        {topcloths.map((product, index) => (
          <Products key={index} product={product} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}

export default TopClotheContainer;
// ! IMPORTANT

// import { ProductHeader } from "./ProductHeader";
// import Products from "./Products";
// import { useMyContext } from "../context/MyContext";
// import { useState } from "react";

// function TopClotheContainer({ dispatch }) {
//   const { data } = useMyContext();
//   const [topcloths, setTopCloths] = useState(
//     data.products.filter((product) => product.section === "Top cloths For You")
//   );

//   const handleFilterClick = (targetSection, minPrice, maxPrice) => {
//     const result = filterProductsBySectionAndPrice(
//       data,
//       targetSection,
//       minPrice,
//       maxPrice
//     );
//     setTopCloths(result);
//   };

//   function filterProductsBySectionAndPrice(
//     data,
//     targetSection,
//     minPrice,
//     maxPrice
//   ) {
//     return data.products.filter((product) => {
//       const { section, price } = product;
//       const numericPrice = Number(price);

//       return (
//         section === targetSection &&
//         numericPrice > minPrice &&
//         numericPrice < maxPrice
//       );
//     });
//   }

//   // const targetSection = "Top cloths For You";
//   // const minPrice = 200;
//   // const maxPrice = 500;

//   return (
//     <div className="products-div">
//       <ProductHeader>
//         <h1 className="top-clothes-header">Top cloths For You!</h1>
//       </ProductHeader>
//       <div className="products-container">
//         {topcloths.map((product, index) => (
//           <Products key={index} product={product} dispatch={dispatch} />
//         ))}
//       </div>
//       <button onClick={() => handleFilterClick("Top cloths For You", 300, 500)}>
//         v
//       </button>
//     </div>
//   );
// }

// export default TopClotheContainer;
