import data from "../Data.json";
import { ProductHeader } from "./ProductHeader";
import Products from "./Products";

function TopClotheContainer({ dispatch }) {
  const topcloths = data.products.filter(
    (product) => product.section === "Top cloths For You"
  );

  return (
    <div>
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
