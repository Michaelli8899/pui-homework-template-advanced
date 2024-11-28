import React, { Component } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

class ReadMore extends Component {
  constructor(props) {
    super(props);
  }

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
        <p className="center">{this.props.content}</p>
        {/* <a href={this.props.link} className="center"> */}
        <div className="circle center" onClick={() => this.handleScrollTo()}>
          <p>
            <i className={`arrow ${this.props.direction}`}></i>
          </p>
        </div>
        {/* </a> */}
      </div>
    );
  }
}

export default ReadMore;
