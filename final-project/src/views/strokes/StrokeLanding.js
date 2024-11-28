import react, { Component } from "react";
import {
  Dian,
  Gou,
  Heng,
  Na,
  Pie,
  Shu,
  Ti,
  Wan,
} from "../partials/strokes/index";

class StrokeLanding extends Component {
  constructor(props) {
    super(props);
  }

  handleHover(e) {
    console.log("hovered", e.target);
  }

  clickTest() {
    console.log("clicked");
  }

  render() {
    return (
      <div className="stroke-img">
        <Dian onClick={this.handleHover} />
        <Heng onClick={this.handleHover} />
        <Shu onClick={this.handleHover} />
        <Na onClick={this.handleHover} />
        <Pie onClick={this.handleHover} />
        <Ti onClick={this.handleHover} />
        <Wan onClick={this.handleHover} />
        <Gou onClick={this.handleHover} />
      </div>
    );
  }
}

export default StrokeLanding;
