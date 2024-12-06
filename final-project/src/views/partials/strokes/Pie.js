import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import HoverCard from "../HoverCard.js";
function SvgPie(props) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="stroke-part-main">
      {/* render the information when the item is hovered */}
      {hovered && (
        <div className="stroke-part-name">
          <HoverCard
            title="Pie"
            chinese="撇"
            description="Short slant: a short tapering line thinning from upper right toward lower left with a quick lift of the brush."
          />
        </div>
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        // manually set the viewbox of the path to be outside the actual svg element
        viewBox="3300 0 3908 900"
        overflow="visible"
        {...props}
      >
        <Link to="/strokes/pie">
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
              d="M2085.27 1873.07c63.03 74.49 73.53 93.44 133.7 179.39 20-4.73 66.05-15.32 90.24-19.88 24.2-4.55 133.28-66 184.8-96.15 163.3-111.74 313.72-223.48 451.24-335.21 137.52-111.74 296.53-217.74 477.02-318.02 5.73-22.92 10.03-45.84 12.89-68.76q4.305-38.67 17.19-68.76c-28.65-77.35-84.51-131.79-167.6-163.304-80.22-31.515-167.6-50.138-262.15-55.868-94.54-5.73-176.2-4.297-244.96 4.298-2.86 40.11 4.3 68.76 21.49 85.954 17.19 17.19 37.25 32.94 60.17 47.27 14.32 8.59 28.65 18.62 42.97 30.08 14.33 11.46 24.35 25.79 30.08 42.98-25.78 88.81-75.92 167.6-150.41 236.36-71.62 65.9-150.41 127.49-236.36 184.79q-128.925 85.95-236.37 184.8z"
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
export default SvgPie;
