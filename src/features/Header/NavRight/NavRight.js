import React, { Component } from "react";
import "./NavRight.css";
import profile from "../assets/profile.jpg";
import upload from "../assets/upload.png";

class NavRight extends Component {
  render() {
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
            <li>
              <a href="/serena">Serena</a>
            </li>
            <li>
              <a href="/buckets">Buckets</a>
            </li>
            <li>
              <a href="/account">Account settings</a>
            </li>
            <li>
              <a href="/signout">Sign out</a>
            </li>
          </ul>
        </li>
        <li className="t_upload">
          <img src={upload} alt="upload" />
        </li>
        <li className="t_search">
          <input placeholder="Search" />
        </li>
      </ul>
    );
  }
}

export default NavRight;
