import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { Component } from "react";

class ToTopButton extends Component {
  handleClick = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: 0,
      ease: "power2.inOut",
    });
  };

  render() {
    return (
      <button
        className="btn btn-primary to-top"
        onClick={() => this.handleClick()}
      >
        <p>Back To Top</p>
        <i className={`arrow up`}></i>
      </button>
    );
  }
}

export default ToTopButton;
