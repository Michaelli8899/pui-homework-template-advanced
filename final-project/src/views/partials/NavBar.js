import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    const navBold =
      window.location.href.split("/")[3] == "history" ? "bold" : "";
    const strokeBold =
      window.location.href.split("/")[3] == "strokes" ? "bold" : "";
    return (
      <>
        <nav className="nav-bar">
          <ul>
            <li className={`nav-item ${navBold}`}>
              <Link to="/history" className={`${navBold}`}>
                History
              </Link>
            </li>
            <li className={`nav-item ${strokeBold}`}>
              <Link to="/strokes" className={`${strokeBold}`}>
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
