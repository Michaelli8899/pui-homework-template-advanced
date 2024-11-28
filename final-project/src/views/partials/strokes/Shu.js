import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import HoverCard from "../HoverCard.js";
function SvgShu(props) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="stroke-part-main">
      {hovered && (
        <div className="stroke-part-name">
          <HoverCard
            title="Shu"
            chinese="竖"
            description="Vertical: a straight vertical line from top to bottom."
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
        <Link to="/strokes/shu">
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
              d="M2069.66 2270.21c-11.46-148.98-7.16-289.36 12.89-421.15 0-32.75 2.58-111.92 12.89-166.61 10.32-54.7 4.3-63.56 0-61.16 0-71.63 8.6-133.23 25.79-184.8 20.05-54.43 41.54-106 64.46-154.71 22.92-51.57 40.11-107.43 51.57-167.6 28.65-11.46 55.87-21.49 81.66-30.08q38.67-17.19 68.76-47.28c-57.3-108.866-144.69-186.221-262.15-232.061-117.47-45.84-240.66-85.95-369.59-120.33-11.46 22.92-18.62 41.542-21.49 55.867 0 14.325 2.87 35.813 8.6 64.463-4.3 21.057-12.89 84.787-12.89 171.254s2.86 145.327 4.29 163.957c-5.73 31.51-7.16 68.76-4.29 111.73 2.86 42.98 5.73 88.82 8.59 137.52 5.73 65.9 10.03 133.22 12.89 201.98 2.87 65.9 0 159.61 12.9 219.18v206.28c2.86 68.76 5.73 138.95 8.59 210.58 5.73 186.22 7.16 371.02 4.3 554.38 0 180.49-15.76 348.1-47.27 502.81-7.17 35.71-17.19 135.61 0 249.55s44.4 184.8 55.86 205.98c2.87 37.25 20.06 57.3 51.57 60.17 34.38 5.73 58.74 20.05 73.06 42.97 31.52-20.05 55.87-28.65 73.06-25.78 20.05 2.86 45.84-4.3 77.35-21.49 71.63-140.38 103.14-305.12 94.55-494.21-5.73-189.09-20.06-383.91-42.98-584.47a11783 11783 0 0 1-42.97-446.94"
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
export default SvgShu;
