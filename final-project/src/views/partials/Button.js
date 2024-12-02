import React from "react";
import { Link } from "react-router-dom";
function Button(props) {
  return (
    <Link to={`/strokes/${props.linkto}`}>
      <button className="btn btn-primary">Read More</button>
    </Link>
  );
}

export default Button;