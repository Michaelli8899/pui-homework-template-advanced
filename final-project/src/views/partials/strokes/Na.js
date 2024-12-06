import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import HoverCard from "../HoverCard.js";
function SvgNa(props) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="stroke-part-main">
      {/* render the information when the item is hovered */}
      {hovered && (
        <div className="stroke-part-name">
          <HoverCard
            title="Na"
            chinese="捺"
            description="Pressing forcefully: thickening line toward lower right, where it is “as sharp as a knife”"
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
        <Link to="/strokes/na">
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
              d="M3882.22 3289.65c11.46-5.73 20.05-15.76 25.78-30.09-2.86-77.35-20.05-138.95-51.57-184.79-31.51-48.71-67.33-91.68-107.44-128.93q-60.165-55.86-107.43-124.62c-143.25-68.76-283.64-140.39-421.16-214.88s-265.01-159.01-382.48-253.55c-114.6-97.41-212.01-213.45-292.23-348.1L2360.9 1811.3c-48.71-14.33-97.41-30.08-146.12-47.27-48.7-20.06-87.38-57.3-116.03-111.74l-12.89 227.77c63.03 74.49 124.62 154.71 184.79 240.66 60.16 83.09 108.87 161.87 146.11 236.36 0-11.46 4.3-15.75 12.9-12.89 17.19 60.17 41.54 110.3 73.05 150.41 31.52 37.25 61.6 74.5 90.25 111.74 31.52 37.25 50.14 84.52 55.87 141.82 60.17 25.78 107.44 70.19 141.82 133.22s60.16 118.9 77.35 167.6q30.09-4.29 47.28 17.19c40.11 42.98 85.95 90.25 137.52 141.82 51.57 48.71 110.3 91.68 176.2 128.93 68.76 37.24 148.98 58.73 240.66 64.46 63.03-17.19 117.46-25.78 163.3-25.78 48.71-2.87 106.01-5.73 171.9-8.6-5.73-22.92-4.29-37.24 4.3-42.97 8.6-8.6 20.05-15.76 34.38-21.49 14.33-2.87 27.22-7.16 38.68-12.89"
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
export default SvgNa;
