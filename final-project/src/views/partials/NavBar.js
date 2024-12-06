import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";


//navigation bar on every page
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navBold: "bold",
      strokeBold: "",
    };
  }
  render() {
    //bold the current selected page
    //check the page url to see if it is history or strokes
    const navBold =
      window.location.href.split("/")[3] == "history" ? "bold" : "";
    const strokeBold =
      window.location.href.split("/")[3] == "strokes" ? "bold" : "";
    //set the state to bold the current element
    if (navBold != "") {
      this.state.navBold = "bold";
      this.state.strokeBold = "";
    } else if (strokeBold != "") {
      this.state.navBold = "";
      this.state.strokeBold = "bold";
    }
    return (
      <>
        <nav className="nav-bar" role="navigation">
          <ul>
            <li
            // change the state when the element is clicked
              className={`nav-item ${this.state.navBold}`}
              onClick={() => {
                this.setState({ navBold: "bold", strokeBold: "" });
              }}
            >
              <Link to="/history" className={`${this.state.navBold}`}>
                History
              </Link>
            </li>
            
            <li
            // change the state when the element is clicked
              className={`nav-item ${this.state.strokeBold}`}
              onClick={() => {
                this.setState({ navBold: "", strokeBold: "bold" });
              }}
            >
              <Link to="/strokes" className={`${this.state.strokeBold}`}>
                Learn About Strokes
              </Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </>
    );
  }
}

export default NavBar;
