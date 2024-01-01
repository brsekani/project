import { ProductHeader } from "./ProductHeader";
import Products from "./Products";
import { useMyContext } from "../context/MyContext";

function TopClotheContainer({ dispatch }) {
  const { data } = useMyContext();

  const topcloths = data.filter(
    (product) => product.section === "Top cloths For You"
  );

  if (topcloths.length <= 0) return;

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
