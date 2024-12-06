import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import HoverCard from "../HoverCard.js";
function SvgTi(props) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="stroke-part-main">
      {/* render the information when the item is hovered */}
      {hovered && (
        <div className="stroke-part-name">
          <HoverCard
            title="Ti"
            chinese="提"
            description="Lifting off: a tapering horizontal line thinning from left bottom toward upper right."
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
        <Link to="/strokes/ti">
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
              d="M1534.36 1872.27c80.22 0 141.82-25.79 184.79-77.36-37.24-60.16-126.06-150.41-197.68-176.2-68.76-25.78-143.25-41.54-223.48-47.27-77.35-8.6-147.54-11.46-210.57-8.6-14.33 11.46-21.49 31.52-21.49 60.17 0 25.79-11.46 41.54-34.38 47.27q-150.414 42.975-305.125 81.66c-100.275 25.78-200.551 53-300.826 81.65-42.975-22.92-91.68-41.54-146.116-55.87-51.57-17.19-110.303-27.22-176.198-30.08q8.595 17.19 12.893 34.38c5.73 8.59 11.46 18.62 17.19 30.08q38.678 85.95 90.248 171.9 55.868 85.95 146.115 137.52c63.031 34.38 144.683 42.98 244.959 25.79q42.975-68.76 107.438-85.95 68.76-21.495 146.115-30.09c54.436-8.59 493.377-110.66 542.087-130.71z"
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
export default SvgTi;
