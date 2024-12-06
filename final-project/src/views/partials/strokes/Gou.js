import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import HoverCard from "../HoverCard.js";
function SvgGou(props) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="stroke-part-main">
      {/* render the information when the item is hovered */}
      {hovered && (
        <div className="stroke-part-name">
          <HoverCard
            title="Gou"
            chinese="钩"
            description="Hook: a hook from right to the upper left with a quick lift of the brush."
          />
        </div>
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        // manually set the viewbox of the path to be outside the actual svg element
        viewBox="3300 0 3908 1000"
        overflow="visible"
        {...props}
      >
        <Link to="/strokes/gou">
          <g
            className="stroke-part"
            onMouseEnter={() => {
              setHovered(true);
            }}
            onMouseLeave={() => {
              setHovered(false);
            }}
            transform="scale(0.5, 0.5)"
          >
            <path
              fill="#000"
              d="M2058.24 3798.09c71.63-140.39 103.14-305.13 94.55-494.22-31.52-18.62-116.49-55.87-204.26-55.87-87.78 0-184.04 25.79-221.2 38.68-83.08 54.44-167.6 75.92-253.55 64.46a1918 1918 0 0 1-253.55-60.16c-57.3-17.19-114.6-31.52-171.9-42.98q-81.657-21.48-159.012-4.29 38.678 12.885 73.058 34.38c22.92 11.46 44.404 24.35 64.464 38.67-8.6 17.19-17.19 24.36-25.79 21.49l-17.186-8.59q-17.19-8.595-17.19 17.19 141.818 159 330.906 275.04c126.06 80.22 287.94 120.33 485.62 120.33 2.87 37.24 20.06 57.3 51.57 60.16 34.38 5.73 58.74 20.06 73.06 42.98 31.52-20.06 55.87-28.65 73.06-25.79 20.05 2.87 45.84-4.29 77.35-21.48"
              style={{
                mixBlendMode: "multiply",
              }}
            />
          </g>
        </Link>
      </svg>
    </div>
  );
}
export default SvgGou;
