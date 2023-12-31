// import { useEffect } from "react";

import { useSpring, animated, config } from "react-spring";
import { useMyContext } from "../context/MyContext";

function CategoriesContainer() {
  const springProps = useSpring({
    opacity: 1,
    translateY: 0,
    from: { opacity: 0, translateY: 50 },
    config: config.gentle, // Adjust the config for smoother animation
    reset: true,
  });
  const { componentOrder, isFiltering } = useMyContext();

  return (
    <div>
      {isFiltering ? (
        <animated.div style={springProps}>
          {componentOrder.map((component) => component)}
        </animated.div>
      ) : (
        componentOrder.map((component) => component)
      )}
    </div>
  );
}

export default CategoriesContainer;
