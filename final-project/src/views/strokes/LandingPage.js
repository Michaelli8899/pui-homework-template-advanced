import react, { Component } from "react";
import ReadMore from "../partials/ReadMore";
import StrokeLanding from "./StrokeLanding";

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="landing">
        <h1 className="main-title">Basic Stroke Components</h1>
        <h2 className="secondary-title margin-bottom-title">
          Hover on each stroke to see more
        </h2>

        <StrokeLanding />

        <ReadMore
          direction="down"
          content="Scroll To Read More"
          link="#yong-title"
        />
      </div>
    );
  }
}

export default LandingPage;
