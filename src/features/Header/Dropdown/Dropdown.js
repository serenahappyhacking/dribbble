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
    const { title, items, className } = this.props;
    return (
      <div className="dropdown">
        <a
          href="/"
          className="has_sublist"
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        >
          {title}
        </a>
        <ul className="inner_list" style={{ display: this.state.isShow }}>
          {items.map(item => {
            return (
              <li className={`${className}`}>
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
