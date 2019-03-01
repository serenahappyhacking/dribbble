import React, { Component } from "react";
import NavLeft from "./NavLeft/NavLeft";
import NavRight from "./NavRight/NavRight";
import "Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src="" alt="loading..." />
        </div>
        <div>
          <NavLeft />
          <NavRight />
        </div>
      </div>
    );
  }
}

export default Header;
