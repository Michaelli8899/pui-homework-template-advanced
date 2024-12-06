import React, { Component } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

class ReadMore extends Component {
  constructor(props) {
    super(props);
  }
  //scroll to the section of the page based on the link in props
  handleScrollTo = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: this.props.link, offsetY: 200 },
      ease: "power2.inOut",
    });
  };
  render() {
    return (
      <div className="read-more">
        <h3 className="center">{this.props.content}</h3>
        <div className="circle center" onClick={() => this.handleScrollTo()}>
          <i className={`arrow ${this.props.direction}`}></i>
        </div>
      </div>
    );
  }
}

export default ReadMore;
