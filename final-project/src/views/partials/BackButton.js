import React from "react";
import { Link } from "react-router-dom";
function BackButtonn(props) {
  return (
    <>
    <Link to={`/${props.link}`}>
      <button className="back-button">Back</button>
    </Link>
    </>
  );
}

export default BackButtonn;