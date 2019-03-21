import React, { Component } from "react";
import "./Dropdown.css";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: "none"
    };
  }

  handleMouseOver = e => {
    this.setState({ isShow: "block" });
  };

  handleMouseOut = e => {
    this.setState({ isShow: "none" });
  };

  render() {
    const { children, items, className } = this.props;
    return (
      <div
        className="dropdown"
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        <a href="/" className={`has_sublist ${className}`}>
          <div>{children}</div>
        </a>
        <ul className="inner_list" style={{ display: this.state.isShow }}>
          {items.map((item, index) => {
            return (
              <li key={index}>
                <a href={`/${item}`}>
                  <span>{item}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Dropdown;
