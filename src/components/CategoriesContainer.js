// import { useEffect } from "react";

import { useMyContext } from "../context/MyContext";

function CategoriesContainer() {
  const { componentOrder } = useMyContext();

  return <div>{componentOrder.map((component) => component)}</div>;
}

export default CategoriesContainer;
