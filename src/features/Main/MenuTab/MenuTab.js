import React, { Component } from "react";
import "./MenuTab.css";
import ToolTip from "../../common/Tooltip/Tooltip";

class MenuTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: "none",
      optionsIsShow: "none",
      icon_hover: false,
      smallInfoColor: "",
      largeInfoColor: ""
    };
  }

  handleMouseEnterNavbar = () => {
    this.setState({
      isShow: "block"
    });
  };

  handleMouseLeaveNavbar = () => {
    this.setState({
      isShow: "none"
    });
  };

  handleMouseEnterOptions = () => {
    this.setState({
      optionsIsShow: "block",
      icon_hover: true
    });
  };

  handleMouseLeaveOptions = () => {
    this.setState({
      optionsIsShow: "none",
      icon_hover: false
    });
  };

  handleClickSmallInfo = (a, e) => {
    this.setState({
      smallInfoColor: "#999"
    });
    a.smallInfoIsShow = true;
    a.largeInfoIsShow = false;
  };

  handleClickLargeInfo = a => {
    this.setState({
      largeInfoColor: "#999"
    });
    a.smallInfoIsShow = false;
    a.largeInfoIsShow = true;
  };

  render() {
    const { optionsAreShow } = this.props;
    return (
      <div className="menutab">
        <div className="menutab_item" />
        <ul className="menutab_item navbar">
          <li
            onMouseEnter={this.handleMouseEnterNavbar}
            onMouseLeave={this.handleMouseLeaveNavbar}
          >
            <a href="/following">Following</a>
            <a href="/" className="following_icon">
              <span> > </span>
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
        <div className="menutab_item action_menu">
          <div
            className="action_button"
            onMouseEnter={this.handleMouseEnterOptions}
            onMouseLeave={this.handleMouseLeaveOptions}
          >
            <div className="action_menu_container">
              <span
                className={`action_icon ${
                  this.state.icon_hover ? "icon_hover" : ""
                }`}
              />
            </div>
            <div
              className="action_menu_inner"
              style={{ display: this.state.optionsIsShow }}
            >
              <span>display options</span>
              <ul className="display_options">
                <li
                  onClick={() => this.handleClickSmallInfo(optionsAreShow)}
                  style={{ backgroundColor: this.state.smallInfoColor }}
                >
                  <ToolTip title={"Small with info"}>
                    <a href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid"
                        width="72"
                        height="72"
                        viewBox="0 0 72 72"
                        role="img"
                      >
                        <path
                          d="M49 53L23 53C21 53 20 52 20 50L20 22C20 20 21 19 23 19L49 19C51 19 52 20 52 22L52 50C52 52 51 53 49 53L49 53 49 53ZM28 48L44 48C45 48 46 47 46 46 46 45 45 44 44 44L28 44C27 44 26 45 26 46 26 47 27 48 28 48L28 48 28 48ZM46 25L26 25 26 39 46 39 46 25 46 25Z"
                          fill="#333333"
                        />
                      </svg>
                    </a>
                  </ToolTip>
                </li>
                <li
                  onClick={e => this.handleClickLargeInfo(optionsAreShow, e)}
                  style={{ backgroundColor: this.state.largeInfoColor }}
                >
                  <ToolTip title={"Large with info"}>
                    <a href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid"
                        width="72"
                        height="72"
                        viewBox="0 0 72 72"
                        role="img"
                      >
                        <path
                          d="M57 61L15 61C13 61 12 60 12 58L12 14C12 12 13 11 15 11L57 11C59 11 60 12 60 14L60 58C60 60 59 61 57 61L57 61ZM20 56L52 56C53 56 54 55 54 54 54 53 53 52 52 52L20 52C19 52 18 53 18 54 18 55 19 56 20 56L20 56ZM54 17L18 17 18 47 54 47 54 17 54 17Z"
                          fill="#333333"
                        />
                      </svg>
                    </a>
                  </ToolTip>
                </li>
                <li>
                  <ToolTip title={"Small without info"}>
                    <a href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid"
                        width="72"
                        height="72"
                        viewBox="0 0 72 72"
                        role="img"
                      >
                        <path
                          d="M49 49L23 49C21 49 20 48 20 46L20 26C20 24 21 23 23 23L49 23C51 23 52 24 52 26L52 46C52 48 51 49 49 49L49 49ZM46 29L26 29 26 43 46 43 46 29 46 29Z"
                          fill="#333333"
                        />
                      </svg>
                    </a>
                  </ToolTip>
                </li>
                <li>
                  <ToolTip title={"Large without info"}>
                    <a href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid"
                        width="72"
                        height="72"
                        viewBox="0 0 72 72"
                        role="img"
                      >
                        <path
                          d="M57 57L15 57C13 57 12 56 12 54L12 18C12 16 13 15 15 15L57 15C59 15 60 16 60 18L60 54C60 56 59 57 57 57L57 57ZM54 21L18 21 18 51 54 51 54 21 54 21Z"
                          fill="#333333"
                        />
                      </svg>
                    </a>
                  </ToolTip>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuTab;
