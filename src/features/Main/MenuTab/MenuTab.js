import React, { Component } from "react";
import "./MenuTab.css";

class MenuTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: `none`
    };
  }

  handleMouseEnter = e => {
    this.setState({ isShow: `block` });
  };

  handleMouseLeave = e => {
    this.setState({ isShow: `none` });
  };

  render() {
    return (
      <div className="menutab">
        <ul className="navbar">
          <li>
            <a
              href="/following"
              onMouseEnter={this.handleMouseEnter}
              // onMouseLeave={this.handleMouseLeave}
            >
              Following
            </a>
            <ul className="droplist" style={{ display: this.state.isShow }}>
              <li>
                <a href="/serenahacking/likes">Shots You Like</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/suggestions">Suggestions</a>
          </li>
          <li>
            <a href="/designers/friends">Find Friends</a>
          </li>
        </ul>
        <div className="action_menu">
          <a href="/actions">
            <h3>Actions</h3>
          </a>
          <div className="inner_menu">
            <h3>DISPLAY OPTIONS</h3>
            <ul>
              <li>
                <a href="./small/info">
                  <span>small with info</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuTab;
