import React, { Component } from "react";
import NavLeft from "./NavLeft/NavLeft";
import NavRight from "./NavRight/NavRight";
import logo from "./assets/logo.png";
import { connect } from "react-redux";
import { fetchNavData } from "../../redux/action";
import "./Header.css";

class Header extends Component {
  componentDidMount() {
    this.props.onFetchNavData();
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
            <NavLeft navItems={this.props.navItems} />
            <NavRight navItems={this.props.navItems} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    navItems: state.header.navItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchNavData: () => {
      dispatch(fetchNavData());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
