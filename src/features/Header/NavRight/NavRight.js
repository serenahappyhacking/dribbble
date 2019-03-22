import React, { Component } from "react";
import profile from "../assets/profile.jpg";
import upload from "../assets/upload.png";
import Dropdown from "../../common/Dropdown/Dropdown";
import "./NavRight.css";

class NavRight extends Component {
  render() {
    const { navItems, onSearchForm } = this.props;
    if (navItems.profile) {
      return (
        <ul className="nav_right">
          <li className="t_gopro">
            <a href="/pro">
              <span>Get more out of Dribbble - </span>
              <span>Go Pro</span>
            </a>
          </li>
          <li className="t_profile">
            <Dropdown items={navItems.profile} className={`t_profile`}>
              <img src={profile} alt="My profile" />
            </Dropdown>
          </li>
          <li className="t_upload">
            <a href="/upload">
              <img src={upload} alt="upload" />
            </a>
          </li>
          <li className="t_search">
            <form>
              <input
                className="search_text"
                placeholder="Search"
                onInput={onSearchForm}
              />
            </form>
          </li>
        </ul>
      );
    } else {
      return "";
    }
  }
}

export default NavRight;
