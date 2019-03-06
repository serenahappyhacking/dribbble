import React, { Component } from "react";
import NavLeft from "./NavLeft/NavLeft";
import NavRight from "./NavRight/NavRight";
import "./Header.css";
import logo from "./assets/logo.gif";
import { connect } from "react-redux";
import { fetchNavData, fetchSearchForm } from "./redux/action";

class Header extends Component {
  componentDidMount() {
    this.props.dispatch(fetchNavData());
  }

  render() {
    return (
      <div className="header">
        <div className="header_inner">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Dribbble" />
            </a>
          </div>
          <div className="nav">
            <NavLeft />
            <NavRight />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    navItems: state.navItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchForm: text => {
      dispatch(fetchSearchForm(text));
    }
  };
};

Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default Header;
