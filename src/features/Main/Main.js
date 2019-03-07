import React, { Component } from "react";
import "./Main.css";
import MenuTab from "./MenuTab/MenuTab";
import Content from "./Content/Content";
import { connect } from "react-redux";
import {} from "../../redux/action";

class Main extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="dribble_main">
        <MenuTab />
        <Content />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
