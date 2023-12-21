import data from "../Data.json";
import { ProductHeader } from "./ProductHeader";
import Products from "./Products";

function HighQualityShoes({ dispatch }) {
  const topcloths = data.products.filter(
    (product) => product.section === "High Quality Shoes"
  );
  return (
    <div className="products-div">
      <ProductHeader>
        <h1 className="other-quality-header">High Quality Shoes</h1>
      </ProductHeader>
      <div className="products-container">
        {topcloths.map((product, index) => (
          <Products key={index} product={product} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}

export default HighQualityShoes;
