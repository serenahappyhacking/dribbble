import React, { Component } from "react";
import "./MenuTab.css";

class MenuTab extends Component {
  render() {
    return (
      <div className="menutab">
        <ul class="shot-menu full-tabs-links">
          <li class="more active">
            <a href="/">Following</a>

            <ul class="lists sub">
              <li class="">
                <a href="/serenahacking/likes">Shots You Like</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/suggestions">Suggestions</a>
          </li>
          <li class="">
            <a href="/designers/friends">Find Friends</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default MenuTab;
