import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navBold: "bold",
            strokeBold: ""
        }
    }
    render() {
        const navBold =
            window.location.href.split("/")[3] == "history" ? "bold" : "";
        const strokeBold =
            window.location.href.split("/")[3] == "strokes" ? "bold" : "";
        if(navBold != ''){
            this.state.navBold = "bold";
            this.state.strokeBold = "";
        }else if(strokeBold != ''){
            this.state.navBold = "";
            this.state.strokeBold = "bold";
        }
        return (
            <>
                <nav className="nav-bar">
                    <ul>
                        <li className={`nav-item ${this.state.navBold}`}
                            onClick={() => {
                                this.setState({ navBold: "bold", strokeBold: "" })
                            }}>
                            <Link to="/history" className={`${this.state.navBold}`}>
                                History
                            </Link>
                        </li>
                        <li className={`nav-item ${this.state.strokeBold}`}
                            onClick={() => {
                                this.setState({ navBold: "", strokeBold: "bold" })
                            }}>
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

