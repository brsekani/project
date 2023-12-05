// import { useEffect } from "react";

function CategoriesContainer({ products }) {
  // useEffect(() => {
  //   const parentDiv = document.getElementById("div");
  //   const childrenArray = Array.from(parentDiv.children);

  //   console.log(childrenArray.map((child, i) => console.log(child, i)));
  // }, []);

  return <div>{products}</div>;
}

export default CategoriesContainer;
