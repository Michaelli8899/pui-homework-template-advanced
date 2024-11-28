import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import HoverCard from "../HoverCard.js";
function SvgHeng(props) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="stroke-part-main">
      {hovered && (
        <div className="stroke-part-name">
          <HoverCard
            title="Heng"
            chinese="横"
            description="Horizontal: a straight horizontal line from left to right."
          />
        </div>
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="3300 0 3908 900"
        overflow="visible"
        {...props}
      >
        <Link to="/strokes/heng">
          <g
            className="stroke-part"
            onMouseEnter={() => {
              console.log("enter");
              setHovered(true);
            }}
            onMouseLeave={() => {
              console.log("leave");
              setHovered(false);
            }}
            transform="scale(0.5, 0.5)"
          >
            <path
              fill="#000"
              d="M1579.01 1170.05c51.57 2.86 104.57-7.16 159.01-30.08 59-1.96 199.8-7.87 290.95-15.83 91.16-7.97 179.22-9.96 211.86-9.96 28.65-11.46 55.87-21.49 81.65-30.08q38.685-17.19 68.76-47.28c-57.3-108.866-144.68-186.221-262.15-232.061-117.46-45.84-240.66-85.95-369.58-120.33-11.46 22.92-18.63 41.542-21.49 55.867 0 14.325 2.86 35.813 8.59 64.463-171.9 68.76-335.2 111.736-489.91 128.926q-227.773 21.487-481.325 55.867a514 514 0 0 1 55.868 55.868c20.055 20.06 40.11 41.54 60.165 64.46 45.84 51.57 93.113 100.28 141.822 146.12 51.57 42.97 110.3 63.03 176.19 60.16q64.47-4.29 103.14-51.57c28.65-34.38 64.47-58.73 107.44-73.05 57.3-20.06 110.31-27.22 159.01-21.49"
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
export default SvgHeng;
