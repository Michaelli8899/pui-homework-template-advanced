import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import HoverCard from "../HoverCard.js";
function SvgDian(props) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="stroke-part-main">
      {hovered && (
        <div className="stroke-part-name">
          <HoverCard
            title="Dian"
            chinese="点"
            description="Dot: top-left to bottom-right."
          />
        </div>
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="3300 0 3908 500"
        overflow="visible"
        {...props}
      >
        <Link to="/strokes/dian">
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
              d="M2077.87 480.531c-111.73 37.245-213.44 32.947-305.12-12.893q-137.52-73.058-240.66-206.281c-68.76-88.815-127.49-173.333-176.2-253.553 134.66-20.056 265.01 2.864 391.07 68.76 128.93 63.03 237.8 131.79 326.62 206.281 5.73 31.515 8.59 57.3 8.59 77.355v68.76c0 8.595-1.43 17.19-4.3 25.785z"
            />
          </g>
        </Link>
      </svg>
    </div>
  );
}
export default SvgDian;
