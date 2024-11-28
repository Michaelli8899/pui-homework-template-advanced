import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import HoverCard from "../HoverCard.js";
function SvgWan(props) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="stroke-part-main">
      {hovered && (
        <div className="stroke-part-name">
          <HoverCard
            title="Wan"
            chinese="弯"
            description="Slant: a long slightly curvy tapering line thinning from top-right toward lower left."
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
        <Link to="/strokes/wan">
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
              d="M1538.51 1871.63c80.22 0 141.82-25.78 184.79-77.35-37.24-60.17-126.06-150.41-197.68-176.2-68.76-25.78-143.25-41.54-223.47-47.27-77.36-8.6-147.55-11.46-210.58-8.6-14.33 11.46-18.91 47-18.91 75.65-14.33 20.06-67.04 384.19-67.04 392.78 2.86 8.6 10.03 18.63 21.49 30.09l17.19 17.18-257.854 429.76c-85.951 140.38-180.496 275.04-283.636 403.96q-150.414 189.09-348.099 339.51c-11.46 0-21.488-1.43-30.083-4.3l-25.785-8.6c-14.325-5.73-28.65-8.59-42.975-8.59-11.46-2.87-30.083 1.43-55.868 12.89 14.325 28.65 27.218 47.28 38.678 55.87 14.325 8.6 27.217 24.35 38.677 47.27q25.785-30.075 47.273-17.19c14.325 5.73 28.65 14.33 42.975 25.79l34.38 34.38c14.325 8.59 30.083 12.89 47.273 12.89q47.273-38.67 94.545-68.76c31.516-22.92 63.031-44.41 94.546-64.46 54.435-34.38 98.843-64.47 133.223-90.25q51.57-42.975 34.38-85.95 42.975-8.595 47.273-34.38c2.865-17.19 27.217-31.52 73.058-42.98q-21.488-17.19 17.19-55.86c10.979-13.07 43.193-46.05 84.212-73.4 51.273-34.18 72.731-45.39 79.093-42.64q-4.298-8.595 0-34.38c2.865-11.46 2.865-21.48 0-30.08 0-11.46-11.46-20.05-34.38-25.78q17.19 0 25.785 4.29c8.595 2.87 15.758 5.73 21.488 8.6q30.083 17.19 47.273 0c0-17.19-4.298-25.79-12.893-25.79q-8.595-4.29-25.785 0c-8.595 2.87-18.623 4.3-30.083 4.3-8.595-2.86-11.46-15.76-8.595-38.68 25.785-8.59 44.408-12.89 55.868-12.89 14.325 0 28.65 2.87 42.975 8.6q21.481 4.29 34.381 4.29c48.7-51.57 91.68-107.44 128.92-167.6 37.25-63.03 75.93-124.63 116.04-184.79 40.11-63.03 87.38-116.04 141.82-159.01-5.73-25.79-1.44-50.14 12.89-73.06q21.48-34.38 51.57-68.76c20.05-25.79 38.68-53 55.87-81.65s20.05-61.6 8.59-98.85"
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
export default SvgWan;
