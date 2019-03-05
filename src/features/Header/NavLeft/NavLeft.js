import React, { Component } from "react";
import "./NavLeft.css";
import Dropdown from "../Dropdown/Dropdown";

class NavLeft extends Component {
  render() {
    const { navItems } = this.props;
    return (
      <ul className="nav_left">
        <Dropdown
          title={"Shots"}
          items={navItems.shots}
          className={"t_shots"}
        />
        <Dropdown
          title={"Designers"}
          items={navItems.designers}
          className={"t_designers"}
        />
        <Dropdown
          title={"Teams"}
          items={navItems.teams}
          className={"t_teams"}
        />
        <Dropdown
          title={"Community"}
          items={navItems.community}
          className={"t_community"}
        />
        <Dropdown title={"Jobs"} items={navItems.jobs} className={"t_jobs"} />
        <Dropdown title={"More"} items={navItems.more} className={"t_more"} />
      </ul>
    );
  }
}

export default NavLeft;
