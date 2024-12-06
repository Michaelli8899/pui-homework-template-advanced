import React from "react";
import { Link } from "react-router-dom";
//buton that redirect to a link at props.link
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
