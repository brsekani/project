import { useMyContext } from "../context/MyContext";
import { ProductHeader } from "./ProductHeader";
import Products from "./Products";

function OtherStandard() {
  const { data } = useMyContext();

  const OtherStandard = data.products.filter(
    (product) => product.section === "Other Standard"
  );
  return (
    <div className="products-div">
      <ProductHeader>
        <h1 className="other-quality-header">Other Standard</h1>
      </ProductHeader>
      <div className="products-container">
        {OtherStandard.map((product, index) => (
          <Products key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default OtherStandard;
