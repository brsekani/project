import HighQualityShoes from "./HighQualityShoes";
import OtherQuality from "./OtherQuality";
import OtherStandard from "./OtherStandard";
import TopClotheContainer from "./TopClotheContainer";

function CategoriesContainer({ dispatch }) {
  return (
    <div>
      <TopClotheContainer dispatch={dispatch} />
      <OtherQuality dispatch={dispatch} />
      <HighQualityShoes dispatch={dispatch} />
      <OtherStandard dispatch={dispatch} />
    </div>
  );
}

export default CategoriesContainer;
