import React, { Component } from "react";
import "./NavLeft.css";
import Dropdown from "../../common/Dropdown/Dropdown";

class NavLeft extends Component {
  render() {
    const { navItems } = this.props;
    if (Object.keys(navItems).length > 0) {
      return (
        <ul className="nav_left">
          <Dropdown items={navItems.shots} className={"t_shots"}>
            <span>Shots</span>
          </Dropdown>
          <Dropdown items={navItems.designers} className={"t_designers"}>
            <span>Designers</span>
          </Dropdown>
          <Dropdown items={navItems.teams} className={"t_teams"}>
            <span>Teams</span>
          </Dropdown>
          <Dropdown items={navItems.community} className={"t_community"}>
            <span>Community</span>
          </Dropdown>
          <Dropdown items={navItems.jobs} className={"t_jobs"}>
            <span>Jobs</span>
          </Dropdown>
          <Dropdown items={navItems.more} className={"t_more"}>
            <span>more</span>
          </Dropdown>
        </ul>
      );
    } else {
      return "";
    }
  }
}

export default NavLeft;
