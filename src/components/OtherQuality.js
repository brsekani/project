import data from "../Data.json";
import { ProductHeader } from "./ProductHeader";
import Products from "./Products";

function OtherQuality() {
  const topcloths = data.products.filter(
    (product) => product.section === "Other Quality"
  );

  return (
    <div className="products-div">
      <ProductHeader>
        <h1 className="other-quality-header">Other Quality</h1>
      </ProductHeader>
      <div className="products-container">
        {topcloths.map((product, index) => (
          <Products key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default OtherQuality;
