import { useMyContext } from "../context/MyContext";
import { ProductHeader } from "./ProductHeader";
import Products from "./Products";

function OtherQuality() {
  const { data } = useMyContext();

  const OtherQuality = data.products.filter(
    (product) => product.section === "Other Quality"
  );

  return (
    <div className="products-div">
      <ProductHeader>
        <h1 className="other-quality-header">Other Quality</h1>
      </ProductHeader>
      <div className="products-container">
        {OtherQuality.map((product, index) => (
          <Products key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default OtherQuality;
