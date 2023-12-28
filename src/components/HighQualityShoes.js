import { useMyContext } from "../context/MyContext";
import { ProductHeader } from "./ProductHeader";
import Products from "./Products";

function HighQualityShoes({ dispatch }) {
  const { data } = useMyContext();

  const HighQualityShoes = data.filter(
    (product) => product.section === "High Quality Shoes"
  );

  if (HighQualityShoes.length <= 0) return;

  return (
    <div className="products-div">
      <ProductHeader>
        <h1 className="other-quality-header">High Quality Shoes</h1>
      </ProductHeader>
      <div className="products-container">
        {HighQualityShoes.map((product, index) => (
          <Products key={index} product={product} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}

export default HighQualityShoes;
