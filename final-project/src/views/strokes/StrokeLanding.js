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

// element that allows the user to hover over
class StrokeLanding extends Component {
  constructor(props) {
    super(props);
  }

  //all the hover mechanism is within the individual components
  render() {
    return (
      <div className="stroke-img">
        <Dian />
        <Heng />
        <Shu />
        <Na />
        <Pie />
        <Ti />
        <Wan />
        <Gou />
      </div>
    );
  }
}

export default StrokeLanding;
