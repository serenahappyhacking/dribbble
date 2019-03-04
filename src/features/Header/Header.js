import React, { Component } from "react";
import NavLeft from "./NavLeft/NavLeft";
import NavRight from "./NavRight/NavRight";
import "./Header.css";
import logo from "./assets/logo.gif";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header_inner">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Dribbble" />
            </a>
          </div>
          <div className="nav">
            <NavLeft />
            <NavRight />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
