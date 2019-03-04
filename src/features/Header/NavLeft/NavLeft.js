import React, { Component } from "react";
import "./NavLeft.css";

class NavLeft extends Component {
  render() {
    return (
      <ul className="nav_left">
        <li className="t_shots">
          <a href="/">Shots</a>
          <ul className="inner_list">
            <li>Popular Shots</li>
            <li>Recent Shots</li>
            <li>Debuts</li>
            <li>Playoffs</li>
            <li>Followings</li>
          </ul>
        </li>
        <li className="t_designers">
          <a href="/">Designers</a>
          <ul className="inner_list">
            <li>Popular Shots</li>
            <li>Recent Shots</li>
            <li>Debuts</li>
            <li>Playoffs</li>
            <li>Followings</li>
          </ul>
        </li>
        <li className="t_teams">
          <a href="/">Teams</a>
          <ul className="inner_list">
            <li>Popular Shots</li>
            <li>Recent Shots</li>
            <li>Debuts</li>
            <li>Playoffs</li>
            <li>Followings</li>
          </ul>
        </li>
        <li className="t_community">
          <a href="/">Community</a>
          <ul className="inner_list">
            <li>Popular Shots</li>
            <li>Recent Shots</li>
            <li>Debuts</li>
            <li>Playoffs</li>
            <li>Followings</li>
          </ul>
        </li>
        <li className="t_jobs">
          <a href="/">Jobs</a>
          <ul className="inner_list">
            <li>Popular Shots</li>
            <li>Recent Shots</li>
            <li>Debuts</li>
            <li>Playoffs</li>
            <li>Followings</li>
          </ul>
        </li>
        <li className="t_more">
          <a href="/">
            <span>More</span>
          </a>
          <ul className="inner_list">
            <li>Popular Shots</li>
            <li>Recent Shots</li>
            <li>Debuts</li>
            <li>Playoffs</li>
            <li>Followings</li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default NavLeft;
