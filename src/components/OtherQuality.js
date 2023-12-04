import data from "../Data.json";
import { ProductHeader } from "./ProductHeader";
import Products from "./Products";

function OtherQuality({ dispatch }) {
  const topcloths = data.products.filter(
    (product) => product.section === "Other Quality"
  );
  return (
    <div>
      <ProductHeader>
        <h1 className="other-quality-header">Other Quality</h1>
      </ProductHeader>
      <div className="products-container">
        {topcloths.map((product, index) => (
          <Products key={index} product={product} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}

export default OtherQuality;
