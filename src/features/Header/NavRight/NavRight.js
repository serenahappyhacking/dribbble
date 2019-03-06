import React, { Component } from "react";
import "./NavRight.css";
import profile from "../assets/profile.jpg";
import upload from "../assets/upload.png";

class NavRight extends Component {
  render() {
    const { navItems, onSearchForm } = this.props;
    return (
      <ul className="nav_right">
        <li className="t_gopro">
          <a href="/pro">
            <span>Get more out of Dribbble - Go Pro</span>
          </a>
        </li>
        <li className="t_profile">
          <img src={profile} alt="my profile" className="has_sublist" />
          <ul className="inner_list">
            {navItems.profile.map(data => {
              return (
                <li>
                  <a href={`/${data}`}>{data}</a>
                </li>
              );
            })}
          </ul>
        </li>
        <li className="t_upload">
          <a href="/upload">
            <img src={upload} alt="upload" />
          </a>
        </li>
        <li className="t_search">
          <input placeholder="Search" onSearchForm={onSearchForm} />
        </li>
      </ul>
    );
  }
}

export default NavRight;
